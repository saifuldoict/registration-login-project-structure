
export const Registration = async(req, res)=>{
    return res.json({ status: 'success', "message": "Registration successful" });
}

export const Login = async(req, res)=>{
    return res.json({ status: 'success', "message": "Login successful" });
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