const searchButton = document.getElementById("search-button");
const request = document.getElementById("request");
const err = document.getElementById("error");

searchButton.addEventListener('click', () => {
    const request = document.getElementById("request").value.length;
    if (request < 4) {
        err.textContent = "Minimum of 4 characters.";
    } else if (request > 13) {
        err.textContent = "Maximum of 12 characters.";
    } else {
        err.textContent = " ";
    }
})

request.addEventListener('input', () => {
    let requestValue = request.value.replace(/[!,@,#,$,%,^,&,*,(,)]/g, '');
    request.value = requestValue;
})