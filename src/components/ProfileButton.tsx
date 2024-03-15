import React from 'react'
import Image from 'next/image'
type User = {
    email?: string | null | undefined,
    name?: string | null | undefined,
    image?: string | null | undefined
}
type Props = {
    user: User
}
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOut } from "next-auth/react";

const ProfileButton = (props: Props) => {
    console.log(props.user);
    const Imageurl = props.user.image || "Url for website";
    return (
        <div>

            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Image
                        src={Imageurl}
                        width={40}
                        height={40}
                        className="rounded-full"
                        alt="sadf"
                    />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem onClick={()=>{signOut()}}>Sign-Out</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default ProfileButton