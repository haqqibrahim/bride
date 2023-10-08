require('dotenv').config()
const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const app=express()
const MembersRoutes=require("./routes/user")
const MembersData=require("./routes/AdminRoutes")
const connectDB=require("./db/database")
app.use(cors())
app.use(express.json())
// mongoose.connect(process.env.MONGODB_URL)
connectDB()

app.use("/api",MembersRoutes)
app.use("/api/getMembers",MembersData)

app.listen(process.env.PORT,()=>{
    console.log("Server is Running")
})
