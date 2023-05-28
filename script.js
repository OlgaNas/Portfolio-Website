const infoAboutOlga = ['Olga lives in Leeds', 'Olga is an ITCareerSwitch Codding course student', 'Olga was born in Latvia', 'Current employer DoubleTree by Hilton', 'Supply Chain Management and Logistics Graduate', 'Olga has a three-years old son', 'Knowledge of English, Russian and Latvian', 'Hobby: growing flowers, reading books, codding', 'Favourite phrase: What doesn\'t kill you makes you stronger', 'Olga is kind, punctual, reliable', 'Favurite restuarant: Wagamama'];


function randomInfoAboutOlga() {

    const info = infoAboutOlga[Math.floor(Math.random() * infoAboutOlga.length)];
    return document.getElementById("message").innerHTML = info;
};
document.getElementById("messageButton").addEventListener('click', randomInfoAboutOlga);