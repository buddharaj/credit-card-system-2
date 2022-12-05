import creditCardModel from "../models/creditCard.js";
/**
 * @description - get all credit card details
 * @returns {object} -  all credit card records from db
 */
export default async function getCreditCard() {
    return await creditCardModel.getAll();
}