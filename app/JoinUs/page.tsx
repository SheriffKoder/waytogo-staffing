import Form from '@/components/JoinUs/Form'
import FormModal from '@/components/JoinUs/FormModal'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-[calc(100vh-100px)] w-full pt-[7rem]
    vp3:px-[1rem]'>

    <FormModal/>
      <Form/>

    </div>
  )
}

export default page
