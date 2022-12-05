import validateCreditCardSchema from "./creditCardSchema.validate.js";
import * as validator from "./jsonValidator.js";
import luhnCheck from "../utils/luhn.utils.js";

/**
 * @description - validate credit card input data
 * @params {object} - user input data
 * @returns {boolean} -  true if valid user data else false
 */
function creditCardDataValidate(creditCardData = null) {
    if (!validator.validate(creditCardData, validateCreditCardSchema)) {
        throw new Error(JSON.stringify({
            Code: 300,
            Message: `Passed in card details was invalid ${validator.getErrors(creditCardData, validateCreditCardSchema)}` }));
    }

    // validate credit card number using Luhn 10  and it should be less than 19
    if (!luhnCheck(creditCardData.cardNumber)) {
        throw new Error(JSON.stringify({
            Code: 300,
            Message: 'Credit card number is invalid.' }))
    }
    return true;
}
export default creditCardDataValidate;