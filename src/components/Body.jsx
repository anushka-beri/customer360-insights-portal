import React from 'react';

import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex justify-between'>
      <Outlet/>
    </div>
  )
}

export default Body
