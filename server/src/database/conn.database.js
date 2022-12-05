import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

let mongodbServer;
let mongoUri;

/**
 * @description - Provide connection to a new in-memory database server.
 */
const connect = async () => {
    mongodbServer = MongoMemoryServer.create();
    mongoUri = (await mongodbServer).getUri();
    await mongoose.connect(mongoUri, { dbName: 'creditCardDb'}, err => {
        if (err) {
            throw new Error(err);
        }
      });
    console.log(`successfully connected to mongodb ${mongoUri}`);
}

/**
 * @description - Provide connection to a new in-memory database server.
 */
const close = async () => {
  await mongoose.disconnect();
  (await mongodbServer).stop();
  console.log(`successfully closed to mongodb ${mongoUri}`);

};
/**
 * @description - Remove all data from collections
 */
async function clear() {
    const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany();
  }
}

export { connect, close, clear };