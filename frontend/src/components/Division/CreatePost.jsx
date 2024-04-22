import React from 'react'
import DivisionHeader from '../MyComponents/DivisionHeader'
import DivisionCard from './DivisionCard'

function CreatePost() {
  return (
    <div className='px-10 py-5'>
      <DivisionHeader text={'Add Division'} />
      <div className='mt-6'>
        <DivisionCard saveBtn={ 'Add'} />
      </div>
    
    </div>
  )
}

export default CreatePost