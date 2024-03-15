"use client";
import Link from "next/link"
import React, { useEffect } from "react";
import { FaGoogle } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from 'next/navigation'
type Props = {};

const Register = (props: Props) => {
    const router = useRouter()
    const { data: session, status } = useSession();
    useEffect(() => {
        if (status === "authenticated") {
            router.push("/");
        }
    }, [status]);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }
    return (
        <div className="flex h-screen items-center justify-center">

            <div className="w-1/4 ">

                <div className="mb-2">
                    <div className="font-bold p-4  mb-4">
                        <Link href={"/"} className="flex justify-center gap-2  align-center">
                            <p className="rounded-lg border-2 border-b-4 border-r-4 border-purple-600 px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
                                RESTPilot
                            </p>
                        </Link>
                    </div>
                    <div className="text-center  text-xl ">Create account</div>
                </div>
                <form onSubmit={onSubmit}>
                    <div className="grid gap-2">
                        <div className="grid gap-1">
                            <Label className="sr-only" htmlFor="email">
                                Email
                            </Label>
                            <Input
                                id="email"
                                placeholder="name@example.com"
                                type="email"
                                autoCapitalize="none"
                                autoComplete="email"
                                autoCorrect="off"
                                disabled={isLoading}
                            />
                        </div>
                        <Button disabled={isLoading}>Sign In with Email</Button>
                    </div>
                </form>
                <div className="relative mb-2 mt-2">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                            Or continue with
                        </span>
                    </div>
                </div>
                <Button
                    className="w-full mt-2 mb-2"
                    variant="outline"
                    type="button"
                    disabled={isLoading}
                    onClick={() => signIn("github")}
                >
                    <FaGithub className="m-2" size={16} />
                    GitHub
                </Button>
                {/* <Button
                    className="w-full mt-2 mb-2"
                    variant="outline"
                    type="button"
                    disabled={isLoading}
                >
                    <FaGoogle className="m-2" size={16} />
                    Google
                </Button> */}
                <Link href="/guestuser"><Button className="w-full mt-2 mb-2"
                    variant="outline"
                    type="button"
                    disabled={isLoading}>Guest User</Button></Link>
                <div className="relative mt-2 mb-2 cursor-pointer">
                    <div className="relative flex justify-center text-xs uppercase underline">
                        <Link href="/login">
                            <span className="bg-background px-2 text-muted-foreground">
                                Already have an account? Sign In{" "}

                            </span>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
