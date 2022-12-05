import creditCardDataValidate from "../validations/creditCardData.validate.js";
import creditCard from "../models/creditCard.js";

/**
 * @description - process new credit card request
 * @params {object} - user input data
 * @returns {object} -  all credit card records from db
 */
export default async function storeCreditCard(data) {
    if (!data || !creditCardDataValidate(data)) {
        throw new Error(JSON.stringify({ code: 300, message: 'Invalid request'}));
    }
    return await creditCard.save(data);
}