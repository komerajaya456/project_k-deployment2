import mongoose from "mongoose"

async function connectDB(){
    try {
   
        const conn= await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to mongo db ${conn.connection.host}`)
    } catch (error) {
        console.log(`my error gow ${error}`)
    }
}

export default connectDB;