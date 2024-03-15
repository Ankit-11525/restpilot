import { NextResponse,NextRequest } from "next/server";
import bcrypt from "bcrypt"
import connect from "../../../../db";
import User,{UserDocument,UserModel} from "../../../../models/UserModel";
import jwt,{ JsonWebTokenError } from "jsonwebtoken";
export async function POST(req:NextRequest,res:NextResponse)
{

    try {
        await connect();
        const {email,password}=await req.json();
        const existingUser:UserDocument|null=await User.findOne({email});
        if(!existingUser)
        {
           return NextResponse.json("User not exist",{status:400});
        }
        
        const isPasswordValid =await bcrypt.compare(password,existingUser.password);
        if(isPasswordValid)
        {
            const response=NextResponse.json(existingUser,{status:200});
            const JWTSECRET=process.env.JWTSECRET||"hello";
            const token=jwt.sign({email:existingUser.email,id:existingUser._id},JWTSECRET,{ expiresIn: '1h' })
            response.cookies.set('codepilot',token);
            return response;
        }
        else{
            return NextResponse.json({error:"Password not match"},{status:200});
        }

    } catch (error) {
        return NextResponse.json({error:"Internal server error"},{status:400});
        
    }

}