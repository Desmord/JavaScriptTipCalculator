import css from "./mainCss.css";

const submitButton = document.querySelector(`.calculator__submitButton`),
    billSum = document.querySelector(`.calculator__input`),
    tipSelect = document.querySelector(`.calculator__tipSelect`);


/**
 *  Checks if given string contains only numbers
 * @param {string} value
 */
const checkIfNumber = value => Number.isFinite(Number(value)) ? false : true;


/**
 *  Checks if given string contains any character
 * @param {string} value
 */
const checkIfEmptyValue = (value) => value.length < 1 ? true : false;


/**
 * Calculating tip value
 * @return {number} tip value
 */
const calculateTip = () => {

    let bill = billSum.value,
        tipPercent = tipSelect.value;

    if (checkIfEmptyValue(bill)) {
        console.log(`Podaj wartość rachunku`);
    } else if (checkIfNumber(bill)) {
        console.log(`Podany rachunek musi być liczbą`);
    } else {

        return bill * tipPercent;

    }

    return 0;
}


//  Events

submitButton.addEventListener(`click`, () => document.querySelector(`.calculator__result`).innerHTML = `Napiwek wynosi: ${calculateTip()} `);

