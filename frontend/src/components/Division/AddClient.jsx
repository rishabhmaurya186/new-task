import React from 'react'
import DivisionHeader from '../MyComponents/DivisionHeader'
import DivisionCard from './DivisionCard'
import AddClientCard from './DivisionComponents/AddClientCard'

function AddClient() {
  return (
    <div className='px-10 py-5'>
      <DivisionHeader text={'Add Associate Clients'} />
      <div className='mt-6'>
        
        <AddClientCard saveBtn={'Add'} />
      </div>
    
    </div>
  )
}

export default AddClient