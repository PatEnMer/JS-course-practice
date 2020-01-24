const loc = window.location.href;
const title = document.querySelector('h1').textContent;

let pathElements = loc.split('/');

// let titleParts = title.split(' - ');
let titleParts = title.split(/ *- */);
