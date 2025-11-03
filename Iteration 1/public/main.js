const dropdown = document.getElementById('dropDown');
const dropdown1 = document.getElementById('dropDown1');
const nameInput = document.getElementById('studentName');
const quoteInput = document.getElementById('studentQuote');

const nameInput1 = document.getElementById('studentName1');
const quoteInput1 = document.getElementById('studentQuote1');

const updateButton = document.getElementById('update-button');
const deleteButton = document.getElementById('delete-button');


dropdown.addEventListener('change', (e) => {
  const selected = e.target.selectedOptions[0];
  nameInput.value = selected.dataset.name || '';
  quoteInput.value = selected.dataset.quote || '';
});
dropdown1.addEventListener('change', (e) => {
  const selected = e.target.selectedOptions[0];
  nameInput1.value = selected.dataset.name || '';
  quoteInput1.value = selected.dataset.quote || '';
});

updateButton.addEventListener('click', () => {
  const studentId = dropdown.value;

  if (!studentId) {
    alert('Please select a student');
    return;
  }

  fetch('/studentEdit', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: studentId,
      name: nameInput.value,
      quote: quoteInput.value,
    }),
  })
    .then(res => {
      if (res.ok) return res.json()
    })
    .then(response => {
      console.log(response)
      window.location.reload()
    })
    .catch(error => console.log(error));
})
deleteButton.addEventListener('click', () => {
  const studentId = dropdown1.value;
  if (!studentId) {
    alert('Please select a student');
    return;
  }
  fetch('/delete', {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: studentId
    })
  })
    .then(res => res.json())
    .then(response => {
      console.log(response);
      window.location.reload();
    })
    .catch(error => console.log(error));
});