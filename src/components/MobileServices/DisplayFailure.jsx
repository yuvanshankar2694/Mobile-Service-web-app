import React from 'react'
import SelectBrand from './SelectBrand'

const DisplayFailure = () => {
  return (
    <div>
        <div className='container'>
            <h2 className='text-center pt-4'>Facing Display Failure</h2>
        </div>
        <div className='container'>
            <SelectBrand/> 
        </div>
    </div>
  )
}

export default DisplayFailure