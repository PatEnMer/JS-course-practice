const xhr = new XMLHttpRequest();

console.log(xhr.readyState);

xhr.open('GET', 'about-us.html', true);

// 0 - Unsent
// 1 - Opened
// 2 - Headers_recived
// 3 - Loading
// 4 - Done
