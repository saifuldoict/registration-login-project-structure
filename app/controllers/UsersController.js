
import UserModel from "../model/UsersModel.js";
import {TokenEncode} from "../utility/tokenUtility.js";
import SendEmail from "../utility/emailUtility.js";
import UsersModel from "../model/UsersModel.js";
import usersModel from "../model/UsersModel.js";

export const Registration = async(req, res)=>{
    try {let reqBody = req.body;
        await UsersModel.create(reqBody)
        return res.json({ status: 'success', "message": "Registration successful" });
    }catch(err){
        return res.json({ status: 'fail', 'message': err.toString() });
    }

}

export const Login = async(req, res)=>{
    try {
        let reqBody = req.body;
        let data = await UsersModel.findOne(reqBody)

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

    try{
        let user_id = req.headers['user_id'];
        let data = await UsersModel.findOne({"_id": user_id })
        return res.json({ status: 'success', "message": "User ProfileDetails successfully", data: data })
    }
    catch(err){
        return res.json({ status: 'fail', 'message': err.toString()});
    }
}

export const ProfileUpdate = async(req, res)=>{
    try{
        let reqBody = req.body;
        let user_id= req.headers['user_id'];
        await UsersModel.updateOne({"_id":user_id},reqBody)
        return res.json({ status: 'success', "message": "User Update successfully" });
    } catch(err){
        return res.json({ status: 'fail', 'message': err.toString() });
    }
}

export const EmailVerify = async(req, res)=>{
    try{
        let email = req.params.email;
        let data = await UsersModel.findOne({email: email})
        if (data==null){
            return res.json({ status: 'fail', "message": "User email dose not exist" })
        }
        else {
            let code = Math.floor(100000+Math.random()*900000)
            let EmailTo = data['email'];
            let EmailText = "Your Code is"+ code;
            let EmailSubject = "Task Manager Verification Code"
            await SendEmail(EmailSubject,EmailTo,EmailText)

           await UserModel.updateOne({email: email},{otp: code})
            return res.json({ status: 'success', "Message": "Email Verification successfully, check email"});

        }
    }
    catch (err){
        return res.json({ status: 'fail', 'Message': err.toString() });
    }

}

export const CodeVerify = async(req, res)=>{
    try{
        let code = req.params.code;
        let email = req.params.email;

        let data= await UsersModel.findOne({ email: email, otp: code})
        if (data==null){
            return res.json({ status: 'fail', "message": "User Code dose not exist" })
        }
        else {
            return res.json({ status: 'success', "Message": "Code Verification successfully" });
        }


    }
    catch (e) {
        return res.json({status: 'fail', 'Message': e.toString()});
    }
}

export const ResetPassword = async(req, res)=>{
    try {
        let reqBody= req.body;
        let data=await usersModel.findOne({email: reqBody['email'],otp: reqBody['code']})

        if (data==null){
            return res.json({status: 'fail', "message": "User Email dose not exist" })
        }
        else {
            await UsersModel.updateOne({email: reqBody['email']},{
                otp: '0', password: reqBody['password']
            })
            return res.json({ status: 'success', "Message": "Password reset successfully" })
        }
    }
    catch (err){
        return res.json({status: 'fail', 'Message': err.toString()});
    }
}