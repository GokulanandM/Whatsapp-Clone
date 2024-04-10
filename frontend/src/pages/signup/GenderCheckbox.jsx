import React from 'react'

export const GenderCheckbox = () => {
  return (
    <div className='flex'>
        <div className='form-control'>
        <label className=' flex flex-col label gap-2 cursor-pointer'>
              <span className='label-text'>Male</span>
              <input type="checkbox"  className="checkbox border-slate-900" />
            </label>            
        </div>
        <div>
        <label className=' flex flex-col label gap-2 cursor-pointer'>
              <span className='label-text'>Female</span>
              <input type="checkbox"  className="checkbox border-slate-900" />
            </label>  
        </div>

    </div>
  )
}
