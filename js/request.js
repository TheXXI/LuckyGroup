const description = document.getElementById('description');

fetch('https://baconipsum.com/api/?type=lucky')
  .then(res => {
    if (!res.ok) throw new Error(res.status)
    return res.json();
  })
  .then((data) => console.log(description.textContent = data[0]))
  .catch(err => console.log('Error status code: ' + err.message))