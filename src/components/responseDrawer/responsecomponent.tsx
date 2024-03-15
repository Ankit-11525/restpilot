import * as React from "react"
import JsonViewer from "../jsonViewer/JsonView"
import { Button } from "@/components/ui/button"
const SHEET_SIDES = ["top", "right", "bottom", "left"] as const
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
type SheetSide = (typeof SHEET_SIDES)[number]

const ResponseDrawer = (props: any) => {



    return (
        <div className="grid grid-cols-2 gap-2">
                <Sheet >
                    <SheetTrigger asChild>
                        <Button variant="outline">Response</Button>
                    </SheetTrigger>
                    <SheetContent side="bottom">
                        <SheetHeader>
                            <SheetTitle>Edit profile</SheetTitle>
                            <SheetDescription>
                                Make changes to your profile here. Click save when you're done.
                            </SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                        <JsonViewer data={props.data.data.data.data.data.data} /> 
                        </div>

                    </SheetContent>
                </Sheet>
        </div>
    )


}
export default ResponseDrawer;