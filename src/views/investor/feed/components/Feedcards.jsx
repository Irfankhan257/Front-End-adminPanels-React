import Card from 'components/card'
import React from 'react'

export const Feedcards = () => {
  return (
    <Card extra="flex w-full h-full flex-col px-3 py-3">
      <div className="flex items-center">
        <div className="flex relative w-12 h-12 bg-orange-500 justify-center items-center m-1 mr-2 text-xl rounded-full text-white">
          p
        </div>
        <div className="info ml-3 flex-1"> 
          <h2>Title</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum natus officiis quod, quae libero vel perferendis quia dolores porro nam in, impedit praesentium aperiam necessitatibus perspiciatis blanditiis harum architecto? Nulla!</p>
        </div>
        <div className="rating ml-auto mt-auto mb-2">
          <h6>4.5</h6>
        <svg class="text-gray-600 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 " width="23" height="23" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
      </svg>
        </div>
      </div>
    </Card>
  )
}
