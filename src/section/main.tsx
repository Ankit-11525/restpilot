import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/button"
import ResponsivePlayer from "./../components/ResponsivePlayer";

type Props = {}

const Main = (props: Props) => {
    return (
        <div>
            <div className="flex ">
                <div className="m-5" >
                    <div className="text-4xl 	font-bold m-2 ">
                        Rapid REST <span className='text-primary'>API Visualization</span>: Test in Seconds
                    </div>
                    <div className="text-xl m-2 text-muted-foreground">
                        Experience lightning-fast REST API visualization with our intuitive platform In just seconds


                    </div>
                    <div className='m-2'>
                        <Link href="/guestuser" className='m-2'><Button variant="ghost">Guest User</Button></Link>

                        <Button className='m-2'>Demo Video</Button>

                    </div>
                </div>
                <div className="border-2 m-2">
                    <ResponsivePlayer />
                    {/* <iframe width="560" height="315" src="htt://www.youtube.com/embed/ksZpu1s1LV0?si=7ZnkBwNLqYC7mQom" title="YouTube video player" allow=" " ></iframe> */}

                </div>
            </div>
        </div>
    )
}

export default Main