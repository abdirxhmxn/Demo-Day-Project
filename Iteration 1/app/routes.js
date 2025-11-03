const { ObjectId } = require('mongodb');

module.exports = function (app, db) {
    const userCollection = db.collection('Users');

    app.get('/', (req, res) => {
        res.render('index');
    });

    app.get('/missions', (req, res) => {
        res.render('missions');
    });

    app.get('/grades', (req, res) => {
        res.render('grades');
    });

    app.get('/admin', (req, res) => {
        userCollection.find().toArray()
            .then(users => res.render('admin.ejs', { Users: users }))
            .catch(error => res.status(500).send('Error loading admin'));
    });

    app.post('/student', (req, res) => {
        userCollection.insertOne(req.body)
            .then(() => res.redirect('/admin'))
            .catch(error => res.status(500).send('Error creating student'));
    });

    app.put('/studentEdit', (req, res) => {
        userCollection.findOneAndUpdate(
            { name: req.body.name },
            { $set: { name: req.body.name, quote: req.body.quote } },
            { returnDocument: 'after' }
        )
            .then(result => {
                console.log('Update result:', result); // Debug log
                res.json('Success')
            })
            .catch (error => {
            console.error('Update error:', error);
            res.status(500).json('Error');
    })
});

app.delete('/delete', (req, res) => {
    userCollection.deleteOne({ _id: new ObjectId(req.body.id) })
        .then(result => {
            if (result.deletedCount === 0) return res.json('Nothing to delete');
            res.json('Deleted');
        })
        .catch(error => res.status(500).json('Error'));
});
};