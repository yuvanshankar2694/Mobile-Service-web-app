import React from 'react'
import SelectBrand from './SelectBrand'

const MotherBoard = () => {
  return (
    <div>
      <div className='container'>
        <h3 className='text-center pt-3'>MotherBoard Replacement</h3>
      </div>
      <div className='container'>
        <SelectBrand/>
      </div>
    </div>
  )
}

export default MotherBoard