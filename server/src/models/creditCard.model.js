import mongoose from "mongoose";
import { creditCardSchema } from "./credit.schema.js";

export default mongoose.models.creditCardDetails || mongoose.model('credit-card-detail', new mongoose.Schema(creditCardSchema));

