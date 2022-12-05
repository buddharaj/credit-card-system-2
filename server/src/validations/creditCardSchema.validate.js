const validateCreditCardSchema = {
    id: '/validateCreditCardSchema',
    type: 'object',
    properties: {
        name: {
            type: 'string',
        },
        cardNumber: {
            type: 'string',
            maxLength: 19,
            pattern: "^[0-9]+$"
        },
        limit: {
            type: 'string',
            pattern: "^[0-9]+$"
        }
    },
    additionalProperties: false,
    required: ['name', 'cardNumber', 'limit'],
};
export default validateCreditCardSchema;