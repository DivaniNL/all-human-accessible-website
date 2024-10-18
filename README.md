# The Client - Website

We hebben voor Red Pers een artikel detailpagina nagebouwt.

## Inhoudsopgave Readme

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving

Voor Red Pers hebben we de artikel detail pagina nagemaakt op desktop en mobiel.
Voor Red Pers is het belangrijk dat de schrijver centraal staat aangezien het een platform is voor opkomende redacteurs.
Op deze pagina is in een intro-gedeelte te zien, in het kort, waar het artikel over gaat. Daarna is het textgedeelte te zien. Hier staat alle artikel tekst te zien. Daarna is er een sectie om een donatie te geven aan Red Pers. Als laatste zijn relevante artikelen te zien die afkomstig zijn van de zelfde auteur of van andere redacteurs.
In de header en footer is er een navigatiemenu om te navigeren naar andere links.

De pagina is responsive en is Mobile first ontworpen en gemaakt.  
[Bekijk de website](https://divaninl.github.io/red-pers/)  
<img width="1425" alt="Schermafbeelding 2024-10-09 om 10 11 22" src="https://github.com/user-attachments/assets/7a06a098-91ea-45dc-b85e-5a5d2e8df3f5">
<img width="389" alt="Schermafbeelding 2024-10-09 om 10 35 24" src="https://github.com/user-attachments/assets/60f4cd17-9bc6-4092-a6fe-3288f389cce3">  
<img width="380" alt="Schermafbeelding 2024-10-09 om 12 45 36" src="https://github.com/user-attachments/assets/479e6cf0-bb5b-4cd8-84dc-410c57297436">

**P.S. De afbeeldingen zijn iets uitgezoomd om meer van de pagina te kunen laten zien per screenshot.**


## Kenmerken

De website is gebouwd met [HTML](#html) en [CSS](#CSS).

### HTML

Hieronder staat de basis structuur uitgelegd met de setting in de [HEAD](#HEAD) en opmaak van de [BODY](#BODY):

#### HEAD
  
  In de `<head>` word een CSS file geladen. In dit CSS bestand worden de andere bestanden geinclude. Dit wordt meer uitgelegd onder het kopje [CSS](#CSS)
  ```html
     <link rel="stylesheet" href="./styles/styles.css">
  ```

In de `<head>` word een JS file geladen. Dit wordt meer uitgelegd onder het kopje [JS](#JS)
  ```html
     <script src="./scripts/script.js" defer></script>
  ```


  In de `<head>` wordt een extern font geladen: De Inter + De Google static API (is nodig bij het inladen van Google Fonts
  In de css wordt ook de Tiempos Headline en Tiempos Text fotns ingeladen. Deze staan in de bestanden in het mapje /fonts/.
Hierover meer onder het kopje [CCS](#SS)
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
  ```
In de head heb ik de favicon ingeladen. Dit is het icoontje wat in het tabblad getoond wordt.
```html
         <link rel="icon" type="ico"  sizes="32x32" href="./favicon.ico">
```
#### BODY

  De structuur van de body is [HEADER](#HEADER), [MAIN](#MAIN) en [FOOTER](#FOOTER): 
  
  ##### HEADER
  In de header staan navigatieinks, een logo en de huidige datum (de functie met de huidige datum is nog niet gedaan op 10 oktober).
  
  ##### MAIN
  In de main staan een article om het hele artikel heen. Daarin zit allereerst een section voor de intro. Ook zit er een div in met de 
  artikeltekst, een frame met donatielinks, informatie over de redacteurs en gerelateerde artikelen. Ook staan er twee poups in de html:
  ```html

  <div class="popup" id="search_popup" data-popup="search_popup">
                <h2>Zoeken</h2>
                <form action="/search" method="GET">
                    <input type="text" name="q" placeholder="Search...">

                    <button type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" viewBox="0 0 512 512" height="25">
                            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6 .1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                        </svg>
                    </button>
                    <span class="closePopUp"></span>
                </form>
            </div>
            <div class="popup" id="nieuwsbrief_popup" data-popup="nieuwsbrief_popup">
                <h2>Nieuwsbrief</h2>
                <p>Elke drie weken houden we je op de hoogte van wat we schreven en wat we lazen in de Red Pers-nieuwsbrief.</p>
                <a class="nieuws_btn" href="https://redpers.substack.com/">
                    <svg aria-hidden="true" class="e-font-icon-svg e-fas-external-link-alt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>
                    Schrijf je in!
                </a>
                <span class="closePopUp"></span>
            </div>

  ```
  
  ##### FOOTER
  
  In de `<footer>` staan alle links naar andere pagina's
  
  
### CSS

In de CSS worden de fonts Tiempos Text en Tiempos Headline ingeladen. Dit heb ik als volgt gedaan:
```css
/*  Added Tiempos */
@font-face {
    font-family: 'Tiempos Text';
    src: url('./../fonts/TiemposText-Regular.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Tiempos Text';
    src: url('./../fonts/TiemposText-RegularItalic.otf') format('opentype');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Tiempos Headline';
    src: url('./../fonts/TiemposHeadline-Bold.otf') format('opentype');
    font-weight: bold;
    font-style: normal;
}
```

#### Colors

De kleuren heb ik opgeslagen als variabels, dan kan ik ze op meerdere plaatsen makkelijk gebruiken en dan heof ik ze maar op een plek aan te passen. Dit heb ik als volgt gedaan:
```css
/*  VARS! */
:root{
    --basefont: "Inter", sans-serif;
    --black: #000000;
    --grey-text: #7B7B7A;
    --dark-grey: #747474;
    --dark-grey-text: #7A7A7A;
    --light-border: #E1E1E1;
    --red: #E85340;
    --light-red: #F9D4CF;
    --lighter-red: #F9CDC8;
    --lightest-red: #FFF4F2;
    --brownred: #AF726B;
    --redactortext: #444;
    --white: #FFFFFF;
    --grey-bg: #F7F7F5;
    --yellow: #FAC232;
    --black-opacity: #000000B5;
    --light-green: #F4FBE9;
    font-size: 12px;
}
```

#### @media (min-width: 380px)

Minor breakpoint waarna een paar grootes in de intro worden aangepast en in de 1-kolom weergave de tekst en afbeeldingen van de gerelateerde artikelen naast elkaar worden geplaatst.

#### @media (min-width: 680px)

Minor breakpoint waarop de zwarte top bar in de header zichtbaar wordt.


#### @media (min-width: 860px)

Belangrijke breakpoint waarbij veel elementen nu naast elkaar komen te staan

#### @media (min-width: 1200px)

Minor breakpoint waarbij in de intro section de paddign en de h1 groter is.

### JS

In JavaScript heb ik een aantal dingen gedaan:
1. De textsize aanpassen van de artikeltekst:
```js
document.querySelector('.utility_btn.textsize').addEventListener("click", function() {
    if (Textsizeison === 0) {
        // Increase font size by 10% for direct children of #main_content
        document.querySelectorAll('#main_content > *').forEach(function(el) {
            const currentFontSize = parseInt(window.getComputedStyle(el).fontSize);
            const increasedSize = (currentFontSize * 110) / 100; // Increase font size
            el.style.fontSize = increasedSize + 'px'; // Set new font size
        });
        Textsizeison = 1; // Update state variable
    } else {
        // Decrease font size back to original (by dividing by 1.10)
        document.querySelectorAll('#main_content > *').forEach(function(el) {
            const currentFontSize = parseInt(window.getComputedStyle(el).fontSize);
            const decreasedSize = (currentFontSize * 100) / 110; // Decrease font size
            el.style.fontSize = decreasedSize + 'px'; // Set new font size
            el.style.fontSize = '';
        });
        Textsizeison = 0; // Update state variable
    }
});
```
2. Popups tonen op basis van scroll en klik op buttons:
Als je door 50% van de website gescrollt hebt, verschijnt de newsletter popup. De newsletter popup en de zoeken popup kunnen ook beide geopend worden met de buttons die hiervoor bedoeld zijn.

Ook kunnen de popups gesloten worden door naast de popup te klikken, op het kruisje te klikken of door op de ESC knop te toetsen.

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
