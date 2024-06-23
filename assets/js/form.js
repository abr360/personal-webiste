const scriptURL = 'https://script.google.com/macros/s/AKfycbyxDjKRisupv5SUOX3c3w_RHUVeSNQR2h31CGYQNBtTUe4ZJ3DElB_gfcPpredyejiV/exec'

const form = document.forms['form-content']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})