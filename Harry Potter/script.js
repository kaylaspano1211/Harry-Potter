
const english = new Map([
    ['begin_your_adventure', 'Begin Your Adventure'],
    ['play_now', 'Play Now'],
    ['media', 'Media'],
    ['fact', 'Fact'],
    ['community', 'Community'],
    ['welcome_to_hogwarts', 'Welcome to Hogwarts'],
    ['stay_connected', 'Stay Connected'],
    ['buy_now', 'Buy Now'],
    ['choose_your_house', 'Choose Your House'],
    ['professor_steve', 'Professor Steve'],
    ['professor_john', 'Professor John']
]);

const french = new Map([
    ['begin_your_adventure', 'Commencez Votre Aventure'],
    ['play_now', 'Joue Maintenant'],
    ['media', 'Medias'],
    ['fact', 'Fait'],
    ['community', 'Communaute'],
    ['welcome_to_hogwarts', 'Bienvenue a Hogwarts'],
    ['stay_connected', 'Rester Connecte'],
    ['buy_now', 'Acheter Maintenant'],
    ['choose_your_house', 'Choisissez Votre Maison'],
    ['professor_steve', 'Professeur Steve'],
    ['professor_john', 'Professeur John']
]);

const somali = new Map ([
    ['begin_your_adventure', 'Bilow Tacaburkaaga'],
    ['play_now', 'Ciyaar Imika'],
    ['media', 'Warbaahinta'],
    ['fact', 'Xaqiiqda'],
    ['community', 'Bulshada'],
    ['welcome_to_hogwarts', 'Ku Soo Dhawoow Hogwarts'],
    ['stay_connected', 'Ku Xidhnow'],
    ['buy_now', 'Hadda Iibso'],
    ['choose_your_house', 'Dooro Gurigaaga'],
    ['professor_steve', 'Macalinka Steve'],
    ['professor_john', 'Macalinka John']
])

function translate(attribute, language) {
    // collects every element in the body 
    let elements = document.querySelectorAll( 'body *' );
    for(let i = 0; i < elements.length; i++) {
        let element = elements[i];
        let key = element.getAttribute(attribute);
        // We only want to translate elements with the attribute specified (only ever "lng" in this case)
        if(key != null) {
            // Overwrite the innerHTML depending on what language was selected
            if(language === 'french') {
                element.textContent = french.get(key);
            } else if(language === 'english') {
                element.textContent = english.get(key);
            } else if (language === 'somali') {
                element.textContent = somali.get(key);
            }
        }
    }
}

// trigger the translate function when the language selector is changed
function onLanguageChange(object) {
    let language = object.value;
    translate("lng", language);
}