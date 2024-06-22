import React from 'react'
import SelectBrand from './SelectBrand'

const SignalCharging = () => {
  return (
    <div>
      <div className='container'>
        <h3 className='text-center pt-3'>Signal Charging Issues</h3>
      </div>
      <div className='container'>
        <SelectBrand/>
      </div>
    </div>
  )
}

export default SignalCharging