var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("punkt");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

//Navigation

function showMenu(){
document.querySelector('.navigation').classList.toggle('active');
document.querySelector('.menu.fa.fa-bars').classList.toggle('hide');
    document.querySelector('.close.fa.fa-bars').classList.toggle('show');

}
//Ende Navigation

//Plus-Knöpfe

//Speichertechnik ANFANG

//Anleitung
function showAnleitungen(){
    document.querySelector('.WarmwasserSpeicherAnleitung').classList.toggle('active');
    document.querySelector('.fa.fa-plus').classList.toggle('hide');
    document.querySelector('.fa.fa-minus').classList.toggle('show');
}

//Datenblatt


function showDatenblatt(){
    document.querySelector('.WarmwasserSpeicherDatenblatt').classList.toggle('active');
    document.querySelector('.daten.fa.fa-plus').classList.toggle('hide');
    document.querySelector('.daten.fa.fa-minus').classList.toggle('show');
}

//Edel-Warmwasser
//Anleitung
function showEdelAnleitung(){
    document.querySelector('.EdelWarmwasserAnleitung').classList.toggle('active');
    document.querySelector('.anleitungEdel.fa.fa-plus').classList.toggle('hide');
    document.querySelector('.anleitungEdel.fa.fa-minus').classList.toggle('show');
}

//Daten Edel-Speichertechnik
function EdelDaten() {
    document.querySelector('.EdelWarmwasserDaten').classList.toggle('active');
    document.querySelector('.datenEdel.fa.fa-plus').classList.toggle('hide');
    document.querySelector('.datenEdel.fa.fa-minus').classList.toggle('show');
}

//Solarspeicher
//anleitung
function showUnedelSolar(){
    document.querySelector('.AnleitungSolarNichtEdel').classList.toggle('active');
    document.querySelector('.anleitungUnedel.fa.fa-plus').classList.toggle('hide');
    document.querySelector('.anleitungUnedel.fa.fa-minus').classList.toggle('show');
}


//daten
function showUnedelSolarDaten(){
    document.querySelector('.DatenSolar').classList.toggle('active');
    document.querySelector('.datenSolar.fa.fa-plus').classList.toggle('hide');
    document.querySelector('.datenSolar.fa.fa-minus').classList.toggle('show');
}
//Edel- Solarspeicher

//Anleitung
function showSolarAnleitung(){
    document.querySelector('.SolarSpeicherAnleitung').classList.toggle('active');
    document.querySelector('.solarAnleitung.fa.fa-plus').classList.toggle('hide');
    document.querySelector('.solarAnleitung.fa.fa-minus').classList.toggle('show');
}
//Daten

function showDatenSolar(){
    document.querySelector('.SolarSpeicherDaten').classList.toggle('active');
    document.querySelector('.solarDaten.fa.fa-plus').classList.toggle('hide');
    document.querySelector('.solarDaten.fa.fa-minus').classList.toggle('show');
}

//Unterstellspeicher
function showUnterstellAnleitung(){
    document.querySelector('.UnterstellAnleitung').classList.toggle('active');
    document.querySelector('.unterstellspeicherAnleitung.fa.fa-plus').classList.toggle('hide');
    document.querySelector('.unterstellspeicherAnleitung.fa.fa-minus').classList.toggle('show');
}
//Daten

function showUnterstell(){
    document.querySelector('.UnterstellDaten').classList.toggle('active');
    document.querySelector('.unterstellspeicherDaten.fa.fa-plus').classList.toggle('hide');
    document.querySelector('.unterstellspeicherDaten.fa.fa-minus').classList.toggle('show');
}

//Speichertechnik ENDE

//Speicherserie 6000
//Wasserspeicher
function showWasserDaten(){
    document.querySelector('.WasserspeicherDaten').classList.toggle('active');
    document.querySelector('.WasserDaten.fa.fa-plus').classList.toggle('hide');
    document.querySelector('.WasserDaten.fa.fa-minus').classList.toggle('show');
}

//Solar
function showSolarDaten(){
    document.querySelector('.SolarspeicherDaten6000').classList.toggle('active');
    document.querySelector('.SolarDaten.fa.fa-plus').classList.toggle('hide');
    document.querySelector('.SolarDaten.fa.fa-minus').classList.toggle('show');
}
//Wasserspeicher


