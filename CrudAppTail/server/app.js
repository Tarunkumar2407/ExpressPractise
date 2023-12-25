import express from "express"
import "dotenv/config"
import connectdb from "./db/connectdb.js";
import cors from "cors"
import studentRoutes from "./routes/studentRoutes.js"

const app = express()

const PORT = process.env.PORT || 8001;
const DATABASE_URL = process.env.DATABASE_URL;

//cors policy
app.use(cors())

//json parser
app.use(express.json())

//database connections
connectdb(DATABASE_URL)

//routes
app.use("/student", studentRoutes)

app.listen(PORT , () => {
    console.log(`Server is running at port ${PORT}`)
})