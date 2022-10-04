import React from 'react'
import './Banner.css';
import LoginModal from './LoginModal';
import{useState} from 'react';

function Banner() {

const [openModal, setopenModal] = useState(false)
  return (
    
    <>
       {openModal && < LoginModal closeModal={setopenModal}/>}
      <div className='container'>
        <div className='row'>
          <div className='col-md-7 bannerleft' >
            <h5 className='text-orange'>First Impression <span className='text-grey'>First Impressions matter, especially when</span></h5>
            <h3 className='text-blue  py-2'><b>First Impressions matter,</b>especially when you’re trying to land clients.</h3>
            <div>
              <button onClick={() => setopenModal(true)} className='btn-blue '>Log In</button>
              <button className='btn-outline-blue mx-3'>Sign Up</button>
            </div>
          </div>
          <div className='col-md-5 banner-right px-5'>
            <img src='./image/bannerimg.png' />
          </div>
        </div>
      </div>
      <div class="banner-bottom">
        <div className='row m-0 bg-blue py-4 px-5'>
          <div className='col-md-7 row'>
            <div class="col-md-6">
              <div class="d-flex align-items-center">
                <img src="./image/Group14.png"/>
                <div class="mx-3">
                  <h6 class="text-white ">First Impression matter</h6>
                  <h6 class="text-white text-10">especially when you’re trying to land clients</h6>

                  

                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="d-flex align-items-center">
                <img src="./image/Group15.png"/>
                <div class="mx-3">
                  <h6 class="text-white ">First Impression matter</h6>
                  <h6 class="text-white text-10">especially when you’re trying to land clients</h6>

                  

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Banner