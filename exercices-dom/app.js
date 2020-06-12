// Exercice 1


function message() {
    alert("C'est cool hein!?");
}

// Exercice 2

//Avec la fonction getElementById()
function afficheMessage() {
    alert(document.getElementById('exo2').value);
}

//Avec la fonction getElementByClassName()
function afficheMessage() {
    alert(document.getElementsByClassName('exo2')[0].value);
}

//Exercice 3

const page = document.body;


function changeAmbiance() {
    page.style.backgroundColor = "black";
    page.style.color = "white";
}

//Exercice 4

function modifyImage(img) {
    // setTimeout(function() { document.getElementById('imgChange').src = img; }, 500);
    document.getElementById('imgChange').src = img;
}

//Exercice 5

function scrollImage() {

    const pano = document.getElementById('imgPano');
    pano.classList.remove("imgPano");
}

//Exercice 6
function changeP() {
    const para = document.getElementById('paragraphe');
    para.classList.add('perfectP');
    para.classList.remove('rePerfectP');
}

function reChangeP() {
    const para = document.getElementById('paragraphe');
    para.classList.add('rePerfectP');
    para.classList.remove('perfectP');

}