import React from 'react'
import { Link } from 'react-router-dom'


const Category = () => {
  return (
    <div className='px-5 mt=3 '>
      <div className="d-flex justify-content-center">
        <h2>Category List</h2>
      </div>
      <Link to="/dashboard/add_category" className='btn btn-success' >Add category</Link>
    </div>
  )
}

export default Category