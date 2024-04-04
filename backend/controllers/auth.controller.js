import User from  '../models/user.model.js';
import bcryptjs from "bcryptjs";
import generateTokenAndSetCookie from '../utils/generateToken.js';

export const signup = async(req,res) => {
    try {
        const {fullname,username,password,confirmPassword,gender} = req.body;
    if(password !== confirmPassword){
        return res.status(400).json({error:"Passwords do not match"});
    }
    
    const user  = await User.findOne({username})
    if(user){
        return res.status(400).json({error: "User already exists."});
    }

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy=${username}`
    const  girlProfilePic = `https://avatar.iran.liara.run/public/girl=${username}`
   
    //Hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword =await bcryptjs.hash(password,salt);
 
 
    const newUser = new User({
        fullname,
        username,
        password: hashedPassword,
        gender,
        profilePic : gender == "Male" ?  boyProfilePic : girlProfilePic
    })
 
if(newUser){
    //generate new token
    await generateTokenAndSetCookie(newUser._id,res);
    await newUser.save();
    res.status(201).json({
        _id: newUser._id,
        username:newUser.username,
        fullname: newUser.fullname,
        profilePic:newUser.profilePic
    })
}else{
res.status(400).json({error:"Invalid user data"});
}


} catch (error) {
    console.log("error in signup controller",error.message);
        res.status(500).json({error:"Internal server error"})
    }
};
export const login = async (req,res) => {
try {
    const {username,password} = req.body;
    const user = await User.findOne({username});
    const isPasswordCorrect = await bcryptjs.compare(password,user?.password || "");
    if(!user || !isPasswordCorrect){
        return res.status(400).json({error:"Invalid username or password"})
    }

generateTokenAndSetCookie(user._id,res);

res.status(200).json({
    _id:user._id,
    fullname:user.fullname,
    username:user.username,
    profilePic:user.profilePic
 })


} catch (error) {
    console.log("error in login controller",error.message);
    res.status(500).json({error:"Internal server error"})
}
    
};
export const logout =  (req,res) => {

try {
    res.cookie("jwt","",{maxAge:0});
    res.status(200).json({message:"Logged out successfully"});
} catch (error) {
    console.log("error in logout controller",error.message);
    res.status(500).json({error:"Internal server error"})

}

};