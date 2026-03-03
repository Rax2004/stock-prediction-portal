import React from 'react'
import Button from './Button'



const Main = () => {
  return (
    <>
      <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
          <h1 className='text-light'>Stock Prediction App</h1>
          <p className='text-light lead'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores porro quos velit ipsam. Ipsum saepe iusto expedita magnam dignissimos nemo veniam fuga illo delectus, rerum esse facere eligendi rem mollitia.</p>
          <Button text = 'Login' class='btn-outline-info'/>
        </div>
      </div>
    </>
  )
}

export default Main