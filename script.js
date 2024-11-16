function redirect() {
    const inputText = document.getElementById('inputText').value;

    if (inputText === 'x vs o') {
        window.location.href = 'XvsO.html';
    } else {
        console.log('Hello');
    }
}
document.getElementById('inputText').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        redirect();
    }
});

function xvsoclick(){
    window.location.href = 'XvsO.html';
}
