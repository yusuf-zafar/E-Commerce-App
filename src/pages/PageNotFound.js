import React from 'react'
import { useNavigate } from 'react-router-dom'

function PageNotFound() {
    const navigate = useNavigate();
  return (
    <>
    <h2>404</h2>
    <p>Page Not Found</p>
    <button onClick={()=> navigate('/')}>Go to home</button>
    </>
  )
}

export default PageNotFound