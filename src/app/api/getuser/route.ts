import { NextResponse, NextRequest } from "next/server";
import User, { UserDocument } from "../../../../models/UserModel";
import connect from "../../../../db";
import Jwt from "jsonwebtoken";
import mongoose from "mongoose";

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const cookie = req.cookies.get("codepilot");

        if (!cookie?.value) {
            return NextResponse.json({ "Error": "Invalid cookie" }, { status: 400 });
        }

        const JWTSECRET = process.env.JWTSECRET || "afs";
        const response = Jwt.verify(cookie.value, JWTSECRET, async (error, decoded) => {
            if (error || !decoded) {
                return NextResponse.json({ "Error": "Invalid cookie" }, { status: 400 });
            }

            const { id }: any = decoded;
            const userId = new mongoose.Types.ObjectId(id);
            const existingUser: UserDocument | null = await User.findById(userId);

            if (!existingUser) {
                return NextResponse.json({ "Error": "User not found" });
            } else {
                return NextResponse.json(existingUser);
            }
        });
        return response;
    } catch (error) {
        console.error("Internal server error:", error);
        return NextResponse.json({ "Error": "Internal server error" });
    }
}
