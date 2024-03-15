import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import JsonViewer from "../components/jsonViewer/JsonView"

type Props = {}

const ResponseSection = (props: any) => {
  return (
    <div><Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="body">body</TabsTrigger>
        <TabsTrigger value="cookie">cookie</TabsTrigger>
        <TabsTrigger value="Header">Header</TabsTrigger>

      </TabsList>
      <TabsContent value="body"><JsonViewer data={props.data} /> </TabsContent>
      <TabsContent value="cookie">cookies content will be there</TabsContent>
      <TabsContent value="Header">Header content will be there</TabsContent>

    </Tabs></div>
  )
}

export default ResponseSection