import { NextRequest, NextResponse } from "next/server";
import User from "../../../../models/Test";
import connect from "../../../../db";
// import User from "../../../../models/UserModel";
export async function POST(req: NextRequest, res: NextResponse) {
    try {
        // Connect to the MongoDB database
        await connect();

        // Extract email and username from the request body
        const { email, username }: any = await req.json();

        // Create a new instance of the Test model with the provided data
        const newTest = new User({ email, username });

        // Save the new document to the database
        await newTest.save();
        const response = NextResponse.json({ newTest });

        // response.cookies.set("helo","hell");
        return response;
    } catch (error) {
        // If an error occurs, respond with an error message
        console.error("Error:", error);
        return NextResponse.json({ error: "An error occurred while saving data" }, { status: 500 });
    }
}
export async function GET(req: NextRequest, res: NextResponse) {
    try {

        return NextResponse.json({ "helo": "hello" });
    } catch (error) {
        return NextResponse.json({ "hello": "errro" });
    }
}

export async function PUT(req: NextRequest, res: NextResponse) {
    try {
        await connect();
        const { email, username }: any = await req.json();

        // Check if the user exists
        let userExist = await User.findOne({ email });

        if (!userExist) {
            return NextResponse.json({ "error": "User not found" }, { status: 400 });
        }

        let updatevalue = await User.findByIdAndUpdate(userExist._id, { email, username }, {
            new: true,
            runValidators: true,
            useFindAndyModify: false
        });


        // Save the updated user

        return NextResponse.json({ updatevalue });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ "error": "An error occurred while updating data" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, res: NextResponse) {
    try {
        await connect();
        const { email }: any = await req.json();
        const existingUser = await User.findOneAndDelete({ email });
        console.log(existingUser);
        if (!existingUser) {
            return NextResponse.json({ "hello": "user not found" }, { status: 200 });
        }

        return NextResponse.json({ "hello": "deleted value" }, { status: 200 });
    } catch (error) {
        const response = NextResponse.json({ "Error": "Error in deletion" }, { status: 405 });
        return response;
    }
}
