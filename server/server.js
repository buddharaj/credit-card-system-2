import app from './app.js';
import { connect } from "./src/database/conn.database.js";

// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;

connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server is listening at http://localhost:${port}`);
        });
    } catch(error) {
        console.log(`Can not connect to the server: ${JSON.stringify(error)}`)
    }
}).catch((error) => {
    console.log(`Invalid database connection: ${JSON.stringify(error)}`);
});