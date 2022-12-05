import chai, { expect } from 'chai';
import getCreditCard from '../src/controllers/getCreditCard.controller.js';
import storeCreditCard from '../src/controllers/storeCreditCard.controller.js';
import { connect, close} from '../src/database/conn.database.js';
chai.expect();
chai.should();
describe('get credit card details', () => {
    before(async () => await connect());
    after(async () => await close());

    let creditCardDetails = {
        name: 'buddharaj ambhore',
        cardNumber: '8763304723150326838',
        limit: '100',
    };
    it('Should store and get valid credit card input data', async () => {
        await storeCreditCard(creditCardDetails);
        const resp = await getCreditCard();
        expect(resp[0].cardNumber).to.equal(creditCardDetails.cardNumber)
     });

    it('Should throw error on trying to store invalid card number', async () => {
        creditCardDetails.cardNumber = '65645641'; // invalid luhn number
        const resp = async() => await storeCreditCard(creditCardDetails);
        expect(resp).to.throw;
     });

    it('Should throw error on empty inputs', async () => {
        const resp = async() => await storeCreditCard();
        expect(resp).to.throw;
     });

     it('Should throw error on missing required fields(no card number) -  validation error', async () => {
        let creditCardDetails = {
            name: 'buddharaj ambhore',
            limit: '100',
        };
        const resp = async() => await storeCreditCard(creditCardDetails);
        expect(resp).to.throw;
     });
     it('Should throw error on empty input values -  validation error', async () => {
        let creditCardDetails = {
            name: '',
            cardNumber: '',
            limit: '',
        };
        const resp = async() => await storeCreditCard(creditCardDetails);
        expect(resp).to.throw;
     });
});