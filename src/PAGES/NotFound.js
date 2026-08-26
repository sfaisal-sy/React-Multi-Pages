import React from 'react';
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

  const navigate = useNavigate();


  return (
    <>
        <h2>NOT FOUND PAGE</h2>
        <div style={{textAlign:'center', padding: '50px'}}>
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you are looking for does not exist</p>

          <button onClick={() => navigate('/')}>
            Go Back Home
          </button>

        </div>
    </>
  )
}

export default NotFound
