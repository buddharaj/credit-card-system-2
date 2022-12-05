import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

let mongodbServer;
let mongoUri;

/**
 * @description - Provide connection to a new in-memory database server.
 */
const connect = async () => {
  try {
    mongodbServer = MongoMemoryServer.create();
    mongoUri = (await mongodbServer).getUri();
    await mongoose.connect(mongoUri, { dbName: 'creditCardDb'}, err => {
        if (err) {
            throw new Error(err);
        }
      });
    console.log(`successfully connected to ${mongoUri}`);
  } catch(err) {
    throw new Error(err);
  }
}

/**
 * @description - Provide connection to a new in-memory database server.
 */
const close = async () => {
  try {
    await mongoose.disconnect();
    (await mongodbServer).stop();
    console.log(`successfully closed connection to ${mongoUri}`);
  } catch(error) {
    console.log(`Can not close mongodb connection: ${JSON.stringify(error)}`)
  }
};

export { connect, close };