import React from 'react'
import './Banner.css'

function LoginModal({closeModal}) {
  return (
    <div className='login-modal' >
        <div className='modal-card'>
          <div className='modalheader'>

            <div className='logo'>
              <img src='./image/blue.png' />
              <div className='logopara'>
                <span className='text-blue'>Business</span> <span className='text-orange'>Consulting</span>
              </div>
            </div>
            <h5  className='text-orange'>login</h5>
            <h4 className='close-modal' onClick={()=> closeModal(false)}>x</h4>

          </div>
          <div className='modalbody'>
            <form>
              <input placeholder=' Mobile Number' />
              <input placeholder=' Password' />
              <button className=' btn mt-4 w-100 btn-secondary'>log in</button>
            </form>
          </div>

        </div>
      </div>
  )
}

export default LoginModal