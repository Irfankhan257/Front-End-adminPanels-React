import React from 'react'
import Banner1 from './components/Banner'
import { Feedcards } from './components/Feedcards'

const Feed = () => {
  return (
    <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2 my-7">
    <Banner1 />
    <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2 my-5">
    <Feedcards/>
    </div>
    <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2 my-5">
    <Feedcards/>
    </div>
     <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2 my-5">
    <Feedcards/>
    </div>
     <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2 my-5">
    <Feedcards/>
    </div> 
    <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2 my-5">
    <Feedcards/>
    </div> 
    <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2 my-5">
    <Feedcards/>
    </div>
    </div>
    )
}

export default Feed
