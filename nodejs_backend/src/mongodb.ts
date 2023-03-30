import logger from './logger';
import mongoose from 'mongoose';
mongoose.set('debug', false); 

let initDbConnection = async () => {

  logger.debug(`INIT DB CONNECTION`);

  try {
    let MONGO_DATA_URI = process.env.MONGO_DATA_URI as string;
    logger.debug(`MONGO_DATA_URI = ${MONGO_DATA_URI}`);

    
    // logging options for the driver
    var options = {
      useNewUrlParser: true,
      autoIndex: true, // important for indexes
    };
    
    mongoose.set('strictQuery', false);

    await mongoose.connect(MONGO_DATA_URI, options)
    
    logger.info("Connected to database");
  } catch (error) {
    logger.error(`Failed to connect to database: ${error}`)
    //process.exit(1)
  }
}


export { initDbConnection, mongoose }