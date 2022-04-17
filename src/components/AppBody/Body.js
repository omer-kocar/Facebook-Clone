import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Widgets from './Widgets/Widgets'
import Feed from './Feed/Feed'

function Body() {
  return (
    <div>
        <Sidebar/>
        <Feed/>
        <Widgets/>

    </div>
  )
}

export default Body