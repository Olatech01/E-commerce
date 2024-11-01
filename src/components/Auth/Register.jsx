import Image from 'next/image'
import React from 'react'

const Register = () => {
  return (
    <div className='h-screen flex flex-row w-full'>
      <div className='w-full h-screen'>
        <Image
          height={100}
          width={200}
          src={"/register.svg"}
          className='w-full h-screen'
        />
      </div>
      <div className='w-full'>
        <form action="">
          hello
        </form>
      </div>
    </div>
  )
}

export default Register