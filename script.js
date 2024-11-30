//The redirect function that redirect the user to a game from the input
function redirect() {
    let inputText = document.getElementById('inputText').value;
    inputText = inputText.toLowerCase();
    if (inputText === 'x vs o') {
        window.location.href = 'XvsO.html';
    } else {
        console.log('Hello');
    }
    if (inputText === 'flip a coin') {
        window.location.href = 'FlipCoin.html';
    } else {
        console.log('Hello');
    }
}

//The redirect key that do when you click the enter key
document.getElementById('inputText').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        redirect();
    }
});

//The click on the logo
function mainHTML() {
    window.location.href = 'index.html';
}

//The sideBar Collapsed and Expend
const showMoreCategory = document.getElementById('showMoreCategory');
const sidebar = document.getElementById('sidebar');

showMoreCategory.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    const content = document.getElementById("content");

    if (sidebar.classList.contains('collapsed')) {
        content.style.marginLeft = "20px";
    } else {
        content.style.marginLeft = "200px";
    }
});
//The X vs O function
function xvsoclick(){
    window.location.href = 'XvsO.html';
}
//The Flip A Coin function
function flipcoinclick(){
    window.location.href = 'FlipCoin.html';
}
