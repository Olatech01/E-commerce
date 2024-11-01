import AdminLayout from '@/components/Admin/Layout/AdminLayout'
import React from 'react'

const layout = ({ children }) => {
  return (
    <AdminLayout>
      {children}
    </AdminLayout>
  )
}

export default layout