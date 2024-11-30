// The navigate to the main page function
    function navigateToPage() {
    window.location.href = "index.html";
}
// The reload function
    function reload() {
    location.reload();
}

// The click on the logo
    function mainHTML() {
        window.location.href = 'index.html';
    }

// The toggle dropdown
    const coinchange = document.getElementById('coinchange');
    const moreOptions = document.getElementById('moreOptions');
    const backround = document.getElementById('backround');
    const coinNum = document.getElementsByClassName('coinNum');

    coinchange.addEventListener('click', (e) => {
        e.preventDefault();

        // Toggle dropdown visibility
        const isVisible = moreOptions.style.display === 'block';
        moreOptions.style.display = isVisible ? 'none' : 'block';
        backround.style.display = isVisible ? 'none' : 'block';
    });
    backround.addEventListener('click', () => {
        moreOptions.style.display = 'none';
        backround.style.display = 'none';
    });
    Array.from(coinNum).forEach((element) => {
        element.addEventListener('click', () => {
            moreOptions.style.display = 'none';
            backround.style.display = 'none';
        });
    });

let coin = 0;
//The change the coin image
function CCU1(){
    coin = 1;
}
function CCU2(){
    coin = 2;
}
function CCU3(){
    coin = 3;
}
function CCP1(){
    coin = 4
}
function CCP2(){
    coin = 5;
}
function CCP3(){
    coin = 6;
}
function CCI1(){
    coin = 7;
}
function CCI2(){
    coin = 8;
}
function CCI3(){
    coin = 9;
}


////////////////////////////////////// The game  //////////////////////////////////////////////////

function  getRandomNumber() {
    num = Math.floor((Math.random() * 100) + 1);
    return num
}

function flip() {

    getRandomNumber()
    let flipImg = document.getElementById("coinImg");

    setTimeout(() => {
        flipImg.src = 'images/adfd-removebg-preview.png';
    }, 250);

    setTimeout(() => {
        flipImg.src = 'images/hjthjty-removebg-preview.png';
    }, 1000);

    setTimeout(() => {
        if (num > 50){
            if (coin === 1) {
                flipImg.src = 'images/10_eurocent_common_2007.png';
            }else if (coin === 2){
                flipImg.src = 'images/ergt.png';
            }else if (coin === 3){
                flipImg.src = 'images/hg (1).png';
            }else if (coin === 4){
                flipImg.src = 'images/th-1540484308-removebg-preview.png';
            }else if (coin === 5){
                flipImg.src = 'images/as (1).png';
            }else if (coin === 6){
                flipImg.src = 'images/th-4253895154-removebg-preview.png';
            }else if (coin === 7){
                flipImg.src = 'images/a (2).png';
            }else if (coin === 8){
                flipImg.src = 'images/2-removebg-preview.png';
            }else if (coin === 9){
                flipImg.src = 'images/d (1).png';
            }else {
                flipImg.src = 'images/OIG3-removebg-preview.png'
            }
        }
        else{
            if (coin === 1){
                flipImg.src = 'images/3ad435d0-3448-472d-b720-cc5ac8d9a303-removebg-preview.png';
            }else if (coin === 2){
                flipImg.src = 'images/Untitled designasdsasd.png';
            }else if (coin === 3){
                flipImg.src = 'images/n.png';
            }else if (coin === 4){
                flipImg.src = 'images/th-3136801138-removebg-preview.png';
            }else if (coin === 5){
                flipImg.src = 'images/as (2).png';
            }else if (coin === 6){
                flipImg.src = 'images/th-2996250850-removebg-preview.png';
            }else if (coin === 7){
                flipImg.src = 'images/a (1).png';
            }else if (coin === 8){
                flipImg.src = 'images/1-removebg-preview.png';
            }else if (coin === 9){
                flipImg.src = 'images/d (2).png';
            }else {
                flipImg.src = 'images/OIG1-removebg-preview.png'
            }
        }
    }, 1750);
}