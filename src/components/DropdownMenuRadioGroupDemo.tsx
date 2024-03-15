"use client"
import * as React from "react"
import { Dispatch, SetStateAction } from "react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface DropdownMenuRadioGroupProps {
    method: string;
    setMethod: Dispatch<SetStateAction<string>>;
}
export function DropdownMenuRadioGroupDemo(props: DropdownMenuRadioGroupProps) {
    const { method, setMethod } = props;
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="default">{method}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={method} onValueChange={setMethod}>
                    <DropdownMenuRadioItem value="GET">GET</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="POST">POST</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="PUT">PUT</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="DELETE">DELETE</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="PATCH">PATCH</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="HEAD">HEAD</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="OPTION">OPTION</DropdownMenuRadioItem>

                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
