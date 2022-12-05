import express from "express";
import helmet from "helmet";
import cors from "cors";
import creditCard from "./src/routes/creditCard.route.js";
import { connect } from "./src/database/conn.database.js";
const app = express();

// App middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

// eslint-disable-next-line no-undef
const port = process.env.port || 5000;
app.use('/credit-card', creditCard);
let server;
connect().then(() => {
    try {
        server = app.listen(port, () => {
            console.log(`Server is listening at http://localhost:${port}`);
        });
    } catch(error) {
        console.log(`Can not connect to the server: ${JSON.stringify(error)}`)
    }
}).catch((error) => {
    console.log(`Invalid database connection: ${JSON.stringify(error)}`);
});

function stop() {
    server.close();
}

export { server as default, stop };