require('dotenv').config()
const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const app=express()
// const MembersRoutes=require("./routes/user")
// const MembersData=require("./routes/AdminRoutes")
const connectDB=require("./db/database")
app.use(cors({
origin:["https://bride-mu.vercel.app/"],
credentials:true,
methods: ['GET', 'POST'], // Specify the allowed HTTP methods
}))
app.use(express.json())
// mongoose.connect(process.env.MONGODB_URL)
connectDB()
const port = process.env.PORT || 3002;

const members=require("./controllers/RegisterMembers")
const admin=require("./controllers/AdminController")

app.use("/api/members",members)
app.use("/api/dashboard",admin)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
