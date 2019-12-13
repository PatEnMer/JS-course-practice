const xhr = new XMLHttpRequest();

console.log(xhr.readyState);

xhr.open('GET', 'about-us.html', true);

console.log(xhr.readyState);

xhr.onreadystatechange = function(e) {};

// xhr.send(null);

// console.log(xhr.response);

// 0 - Unsent
// 1 - Opened
// 2 - Headers_recived
// 3 - Loading
// 4 - Done
