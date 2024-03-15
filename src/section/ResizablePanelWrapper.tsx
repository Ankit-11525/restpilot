"use client";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { JsonEditor } from "@/components/jsonEditor/Editor";
import PromptEditor from "@/components/promptEditor/PromptEditor";
import { useRef } from "react";
type props = {
    addjson: (value: any) => void
}
export const ResizablePanelWrapper = (props: props) => {


    return (
        <ResizablePanelGroup direction="horizontal" >
            <ResizablePanel className="b-2 m-3" defaultSize={34}>
                <PromptEditor />
            </ResizablePanel>

            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={34}><div className="m-4"><JsonEditor addjson={props.addjson} /></div></ResizablePanel>

        </ResizablePanelGroup>
    )
}