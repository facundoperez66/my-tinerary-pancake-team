import React from 'react'
import './CompNotFound.css'

export default function CompNotFuond() {
  return (
    <>
    <div className='container-notfound'>
    <   div className='error'>
            <h2>Error 404</h2>
            <h2>Page Not Found</h2>
        </div>
        <div className='sadFace'>
            <img src="https://cdn-icons-png.flaticon.com/512/42/42901.png" alt="sad face" />
        </div>
    </div>
    </>
  )
}
