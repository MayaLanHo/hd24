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
//Pufferspeicher
function showPufferDaten(){
    document.querySelector('.pufferspeicher').classList.toggle('active');
    document.querySelector('.pufferDaten.fa.fa-plus').classList.toggle('hide');
    document.querySelector('.pufferDaten.fa.fa-minus').classList.toggle('show');
}

//Hygenespeicher

function showHygeneDaten(){
    document.querySelector('.Hygenespeicher6000').classList.toggle('active');
    document.querySelector('.hygeneDaten.fa.fa-plus').classList.toggle('hide');
    document.querySelector('.hygeneDaten.fa.fa-minus').classList.toggle('show');
}

//Solarflüssigkeit

function showSolarflüssigkeitDaten(){
    document.querySelector('.solarflüssigkeitDaten').classList.toggle('active');
    document.querySelector('.Solarflüssigkeitdaten.fa.fa-plus').classList.toggle('hide');
    document.querySelector('.Solarflüssigkeitdaten.fa.fa-minus').classList.toggle('show');
}

//Bewertungen

//   all ------------------
function initParadoxWay() {
    "use strict";

    if ($(".testimonials-carousel").length > 0) {
        var j2 = new Swiper(".testimonials-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.listing-carousel-button-next',
                prevEl: '.listing-carousel-button-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                },

            }
        });
    }

// bubbles -----------------


    setInterval(function () {
        var size = randomValue(sArray);
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity': '-=0.7'
        }, 4000, function () {
            $(this).remove()
        });
    }, 350);

}

//   Init All ------------------
$(document).ready(function () {
    initParadoxWay();
});
