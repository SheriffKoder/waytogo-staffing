import Form from '@/components/JoinUs/Form'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-[calc(100vh-100px)] flex-c-c w-full tb pt-[10rem]'>
      {/* <Form/> */}

      <form>
      <input
            className=""
            id="firstname"
            maxLength={35}
            name="firstname"
            required
            type="text"
            placeholder="First Name"
            />
      </form>
    </div>
  )
}

export default page
