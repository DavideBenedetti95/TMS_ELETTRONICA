import React from 'react'

const Gallery = () => {
  return (
    
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg transition-transform transform hover:scale-105" src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg transition-transform transform hover:scale-105" src="https://images.pexels.com/photos/1105379/pexels-photo-1105379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg transition-transform transform hover:scale-105" src="https://images.pexels.com/photos/2136243/pexels-photo-2136243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg transition-transform transform hover:scale-105" src="https://images.pexels.com/photos/159220/printed-circuit-board-print-plate-via-macro-159220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
        </div>
    </div>

  )
}

export default Gallery