const Members=require("../models/userDataModel")
const Admin=require("../models/AdminModel")
const validator =require("validator")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const createToken=(_id)=>{
    return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})
}

const getMembersData=async(req,res)=>{
    Members.find({})
    .then(members=>res.json(members))
    .catch(error=>res.json(error))
    }
const adminLogin=async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){  //If a field or both is/are left empty, it'll return this message and won't proceed to the next
        return res.status(400).json("All fields must be filled")
            }
            if(!validator.isEmail(email)){ //Checks if the email entered is valid or not
        return res.status(400).json("Invalid email format")
            }
            if(!validator.isStrongPassword(password)){//Checks if the password entered is valid or not
        return res.status(400).json("Password is not strong enough")
            }
            const user=await Admin.findOne({email})//Checks if the email is in our database
            if (!user) {  //if the email is not, it returns this message
                return res.status(400).json("Email not recognised!!")
            }
            const match=await bcrypt.compare(password,user.password) 
            if (!match) {
                return res.status(400).json("Incorrect password")
            }
  const token=createToken(user._id)
  res.status(200).json({email,token})             
}
// const forgottenPassword=async(req,res)=>{
//     const {email} = req.body;
//     if (!email) {
//         return res.status(400).json({message:"Please fill the field"})
//     }
//     const user=await Admin.findOne({email}) //Checks if the email is in our database
// if (!user) {  //if the email is not, it returns this message
// return res.status(400).json({message:"User does not exist"})
// }
// const token=createToken(user._id)
// var transporter=nodemailer.createTransport({
//     service:process.env.MAILSERVICE,
//     auth:{
//         user:process.env.USER,
//         pass:process.env.PASSWORD
//     }
//  });
//  var mailOptions = {
//     from: process.env.USER,
//     to:user.email,
//     subject: 'Reset Password Link',
//     text: `http://localhost:3000/resetPassword/${user._id}/${token}`
//   };
//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//       return res.status(500).json({ message: "Email sending failed" });
//     } else {
//       return res.send({message: "Check your gmail account"})
//     }
//   });
// }
// const resetPassword=async(req,res)=>{
//     const {id, token} = req.params
//     const {password} = req.body
//     const verifyToken=await jwt.verify(token,process.env.SECRET);
//     if (!verifyToken) {
//         return res.status(400).json({message:"Error with the token"})
//     }
// const verifyUserInDataBase = await Admin.findById(id);
// if (!verifyUserInDataBase) {
//   return res.status(400).json({ message: "User not in database" });
// }
//     if (!validator.isStrongPassword(password)) {
//         return res.status(400).json({message:"Password not strong enough"})
//     }
    
//     try {
//         const salt=await bcrypt.genSalt(10)
//         const hash=await bcrypt.hash(password,salt)
//     const updatePassword=await Admin.findByIdAndUpdate({_id:id},{password:hash})
//     res.status(200).json({message:"Password Reset Successful"})

//     } catch (error) {
//         res.status(500).json({message:error.message})

//     }
// }
// const adminSignUp=async(req,res)=>{
//     const {email,password}=req.body //The values collected from the request body/frontend
//     if (!email || !password ) {  //if any or the 3 fields is/are left blank
//         return res.status(400).json({message:"All field must be filled"})
//     }
//     if (!validator.isEmail(email)) {
//         return res.status(400).json({message:"Invalid email format"})
//     }
//     if (!validator.isStrongPassword(password)) {
//         return res.status(400).json({message:"Password not strong enough"})
//     }
//     const existingEmail=await Admin.findOne({email}) //Checks if the email is in our database
//     if (existingEmail) {
//         return res.status(400).json({message:"Email already in use"})
//     }
    
//     try {
//         const salt=await bcrypt.genSalt(10) //random values(10) that adds additional complexity to the hashing process
//         const hash=await bcrypt.hash(password,salt) //hash the password collected from the user and adds the salt value to increase its complexity
//         const admin=await Admin.create({email,password:hash}) //Creates a user with the provided email and the hashed value of the password
//         res.status(200).json({message:"Created Successfully"})//This json executes if everything goes fine in this try block(sends back the entered email and the generated jwt token as response)
//     } catch (error) {
//         res.status(400).json({message:error.message})
//     }
    
// }

module.exports={
    getMembersData,
adminLogin,
// adminSignUp
}