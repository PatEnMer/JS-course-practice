const p = document.querySelector('p');

let regex = /\w+@(\w+\.\w{2,4})/gi;

let search = p.textContent.match(regex);
