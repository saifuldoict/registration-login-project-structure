
import UserModel from "../model/UsersModel.js";
import {TokenEncode} from "../utility/tokenUtility.js";

export const Registration = async(req, res)=>{
    try {let reqBody = req.body;
        await UserModel.create(reqBody)
        return res.json({ status: 'success', "message": "Registration successful" });
    }catch(err){
        return res.json({ status: 'fail', 'message': err.toString() });
    }

}

export const Login = async(req, res)=>{
    try {
        let reqBody = req.body;
        let data = await UserModel.findOne(reqBody)

        if(data===null){
            return res.json({ status: 'fail', "message": "User does not exist" });
        } else{
            //Login Sussecc Token Encode
            let token = TokenEncode(data['email'], data['_id']);
            return res.json({ status: 'success', Token: token, "message": "Login successful" });
        }

    } catch (err){
        return res.json({ status: 'fail', 'message': err.toString() });
    }
}

export const ProfileDetails = async(req, res)=>{
    return res.json({ status: 'success', "message": "Profile details fetched successfully" });
}   

export const ProfileUpdate = async(req, res)=>{
    return res.json({ status: 'success', "message": "Profile updated successfully" });
}

export const EmailVerify = async(req, res)=>{
    return res.json({ status: 'success', "message": "Email verification successful" });
}

export const CodeVerify = async(req, res)=>{
    return res.json({ status: 'success', "message": "Code verification successful" });
}

export const ResetPassword = async(req, res)=>{
    return res.json({ status: 'success', "message": "Password reset successful" });
}