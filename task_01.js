const userNameLowerCase = 'krzysztof';
const userAge = 39;
const likesJavaScript = true;
const userHobby = 'gra na fortepianie';
const userCity = "Warszawa";

const userName = userNameLowerCase[0].toUpperCase() + userNameLowerCase.slice(1, userNameLowerCase.length);

const ageInTenYears = userAge + 10;

const isAdult = userAge >= 18 ? true : false;

const isWarsawCitizen = userCity === 'Warszawa' ? true : false;

const likesJSAndIsAdult = likesJavaScript && isAdult;

console.log(likesJSAndIsAdult);

let message = `Witaj, ${userName}, co masz ${userAge} lat!`;
message += `\nJesteś ${isAdult ? '' : 'nie'}pełnoletni`;
message += `\nWidzę, że ${likesJavaScript ? '' : 'nie '}lubisz JS`;
isWarsawCitizen && (message += `\nMieszkasz w Warszawie`);
message += `\nTwoje hobby to ${userHobby}`;

console.log(message);