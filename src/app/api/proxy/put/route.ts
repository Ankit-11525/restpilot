import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
export async function PUT(req: NextRequest, res: NextResponse) {
    try {
        const urlData = await req.json();

        const option = urlData.data;
        const apidata = await axios.put(urlData.url, option, {
            withCredentials: true
        })
        const Header_cookie = apidata.headers["set-cookie"];
        const data = apidata.data;
        const response = NextResponse.json({ data }, { status: 200 })
        Header_cookie?.map(biscuit => {
            const cream = biscuit.split(";");
            const [key, value] = cream[0].split("=");

            class OptionsClass {
                constructor(
                    public secure: boolean = false,
                    public httpOnly: boolean = false,
                    public expires: number | Date | undefined = undefined
                ) { }

                [key: string]: any;
            }
            let Option: OptionsClass = new OptionsClass();

            for (const element of cream.slice(1)) {
                const [key, value] = element.split("=");
                if (key.trim() === 'expires') {
                    const date = new Date(value);
                    Option[key.trim()] = date;
                } else {
                    Option[key.trim()] = (value === undefined ? true : false);
                }
            }
            const { expires, Secure, HttpOnly } = Option;
            const NewOption = new OptionsClass;
            NewOption.expires = Option.expires;
            NewOption.httpOnly = Option.HttpOnly;
            NewOption.secure = Option.Secure;
            response.cookies.set(key, value, NewOption);
        });
        if (apidata.headers !== undefined && apidata.headers !== null) {
            Object.keys(apidata.headers).forEach(key => {
                const value = apidata.headers[key];
                if (value !== undefined && value !== null) {

                    response.headers.set(key, value.toString());
                }
            });
        }
        return response;


    } catch (error) {
        console.error('Error parsing PUT data:', error);
        return NextResponse.json({ "error": "An error occurred while parsing POST data" });
    }
}
