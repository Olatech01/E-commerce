import AdminLayout from '@/components/Admin/Layout/AdminLayout'
import React from 'react'

const layout = ({ children }) => {
  return (
    <div className='bg-[#F6F6F6]'>
      <AdminLayout>
        {children}
      </AdminLayout>
    </div>
  )
}

export default layout