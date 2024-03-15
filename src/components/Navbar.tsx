"use client"
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import ProfileButton from "./ProfileButton";
import ResponsivePlayer from "./ResponsivePlayer";

const Navbar = () => {
    const { data: session, status } = useSession();

    return (
        <div className="flex border-b mb-[50px]	justify-between		  ">
            <div className="font-bold p-4 ">
                <Link href={"/"} className="flex items-center gap-2">
                    <p className="rounded-lg border-2 border-b-4 border-r-4 border-purple-600 px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
                        RESTPilot
                    </p>
                </Link>
            </div>
            <div className="flex justify-center items-center pr-8 ">
                <div className="p-1"><ModeToggle /></div>
                <div className="p-1">
                    {status === "unauthenticated" && <Link href={"/login"}><Button variant="ghost" className="m-1" onClick={() => signIn("github")}>Signin</Button></Link>}
                    {status === "unauthenticated" && <Link href={"/register"}><Button className="m-1" onClick={() => signIn("github")}>Signup</Button></Link>}
                    {session?.user && <ProfileButton user={session.user} />}
                </div>
            </div>

        </div>
    );
};
export default Navbar;
