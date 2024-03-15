// const GuestUser=()=>{
//     return<div>hello</div>
// }
// export default GuestUser;
"use client";
import { MutableRefObject } from 'react';

import Image from "next/image";
import { ModeToggle } from "@/components/ModeToggle";
import { Input } from "@/components/ui/input";
import {
  DropdownMenuGroup,
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DropdownMenuRadioGroupDemo } from "@/components/DropdownMenuRadioGroupDemo";
import { useEffect, useRef, useState } from "react";
import { Deletedata, FetchData, PostData, PutData } from "@/utils/api";
import { JsonEditor } from "@/components/jsonEditor/Editor";
import JsonViewer from "../../components/jsonViewer/JsonView"
import { MehIcon } from "lucide-react";
import { json, text } from "stream/consumers";
import ResponseSection from '@/section/response';
import { ResizablePanelWrapper } from '@/section/ResizablePanelWrapper';

import ResponseDrawer from "@/components/responseDrawer/responsecomponent"
export default function GuestUser() {
  const [url, setUrl] = useState<string>("");
  const [data, setData] = useState<any | null>([]);
  const [responsevisible, setresponsevisible] = useState(false);
  const [isLoading,setloading]=useState<boolean>(false);
  // const [options, setOption] = useState<any | null>({
  //   "email": "anshu@example.com",
  //   "password": "anshupathak",
  //   "username": "RAJ"
  // });
  const options = useRef({});
  const addjson = (value: any) => {

    options.current = value;
  }
  const [method, setMethod] = useState<string>("GET")
  const executeRequest = async () => {
    try {
      const optionObject = JSON.parse(JSON.stringify(options.current));

      if (method === "GET") {
        setloading(true)
        const result = await FetchData(url);
        setloading(false)

        setData(result);
      }
      else if (method === "POST") {
        setloading(true)
        const result = await PostData(optionObject, url);
        setloading(false)
        console.log(result);
        setData(result);
      }
      else if (method === "PUT") {
        setloading(true)
        const result = await PutData(optionObject, url);
        setloading(false)
        setData(result);
      }
      else if (method === "DELETE") {
        setloading(true)
        const result = await Deletedata(optionObject, url);
        setloading(false)
        setData(result);
      }
    } catch (error) {
      throw new Error("Error in execute request");

    }

  }
  const runmethod = async () => {
    if (!url) {
      console.log("Please provide Url");
      return;
    }
    executeRequest();

  }
  useEffect(() => { }, [url]);

  return (
    <div className="  ">
      <div className="flex-col">
        <div className='flex justify-center m-2'>
          <div className="m-1">
            <DropdownMenuRadioGroupDemo method={method} setMethod={setMethod} />
          </div>
          <div className="m-1">

            <input
              type="text" placeholder="https://example.com" onChange={(e) => setUrl(e.target.value)} value={url}
              className="flex h-10 w-[1000px]		 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"


            />
          </div>
          <div className="m-1">
            <Button disabled={isLoading} variant="default" onClick={() => url !== "" ? runmethod() : console.log("Please add url")}>
              Send
            </Button>
          </div>
        </div>

        <div>
          {responsevisible && <ResponseSection data={data} />}

          <Button variant="default" onClick={() => setresponsevisible(!responsevisible)}>
            {responsevisible ? "Hide response" : "Show response"}
          </Button>
        </div>
        <ResizablePanelWrapper addjson={addjson} />

      </div>

    </div>
  );
}
