"use client"
import React from 'react'
import ReactPlayer from 'react-player'
import dynamic from 'next/dynamic'

type Props = {}
import thumb from "./thumb.png"
import Image from 'next/image'
const ResponsivePlayer = (props: Props) => {
  return (
    <div>
        
        <ReactPlayer light={<Image src={thumb} alt='Thumbnail of the video'/>}    url='https://www.youtube.com/watch?v=uHrHE7MTxR8' />
    </div>
  )
}
export default ResponsivePlayer