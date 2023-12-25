import mongoose from "mongoose"
import "dotenv/config"

const connectdb = async (DATABASE_URL) => {
    const DB_OPTIONS = {
        dbName : process.env.DB_NAME
    }
     try {
        await mongoose.connect(DATABASE_URL, DB_OPTIONS)
        return console.log("Connected Successfully...")
     } catch (error) {
        console.log(error)
     }
}

export default connectdb