import React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


export default function page() {
  return (
    <div className='w-screen h-screen flex justify-center'>
      <Card className="w-[1000px] h-screen bg-gray-300">
        <CardHeader>
          <div className='border border-black text-center mb-1'>LOGO GOES HERE</div>
          <CardTitle className="border border-black rounded-lg p-10 text-center">What do you think of the recent trends in the stock market?</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
    </Card>
    </div>
  )
}
