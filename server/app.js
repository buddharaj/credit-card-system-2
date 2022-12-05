import express from "express";
import helmet from "helmet";
import cors from "cors";
import creditCard from "./src/routes/creditCard.route.js";
const app = express();

// App middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use('/credit-card', creditCard);

export default app;