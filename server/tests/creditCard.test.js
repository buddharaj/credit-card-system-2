import request from "supertest";
import app from '../app.js';
import { connect, close} from '../src/database/conn.database.js';
import { expect } from 'chai';
describe('get credit card details', () => {
    before(async () => await connect());
    after(async () => await close());

    let creditCardDetails = {
        name: 'buddharaj ambhore',
        cardNumber: '8763304723150326838',
        limit: '100',
    };
    it('POST /credit-card/create -  valid scenario', async () => {
        const response = await request(app).post("/credit-card/create").send(creditCardDetails);
        expect(response.statusCode).to.equal(201);
     });

     it('GET /credit-card/list', async () => {
        const response = await request(app).get("/credit-card/list");
        expect(response.statusCode).to.equal(200);
        expect(response.body[0].cardNumber).to.equal(creditCardDetails.cardNumber);

     });

    it('Should throw error on trying to store invalid card number', async () => {
        creditCardDetails.cardNumber = '65645641'; // invalid luhn number
        const resp = async() => await request(app).post("/credit-card/create").send(creditCardDetails);
        expect(resp).to.throw;
     });

    it('Should throw error on empty inputs', async () => {
        const resp = async() => await request(app).post("/credit-card/create").send({});
        expect(resp).to.throw;
     });

     it('Should throw error on missing required fields(no card number) -  validation error', async () => {
        let creditCardDetails = {
            name: 'buddharaj ambhore',
            limit: '100',
        };
        const resp = async() => await request(app).post("/credit-card/create").send(creditCardDetails);
        expect(resp).to.throw;
     });
     it('Should throw error on empty input values -  validation error', async () => {
        let creditCardDetails = {
            name: '',
            cardNumber: '',
            limit: '',
        };
        const resp = async() => await request(app).post("/credit-card/create").send(creditCardDetails);
        expect(resp).to.throw;
     });
});