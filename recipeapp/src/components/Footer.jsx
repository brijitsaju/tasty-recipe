import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div className='d-flex flex-column align-items-center justify-content-center' style={{width:'100%',padding:'20px',backgroundColor:"black"}}>
        <div className=' d-flex flex-column align-items-center justify-content-center mt-1' style={{width:'350px', backgroundColor:'lightgray',borderRadius:'10px'}}>
            <h4>Ready to cook ?</h4>
            <input className='btn btn-warning rounded mt-1 text-dark' placeholder='Instant Subscribe' type="text" />
            <h5 className=''>Let's be friends !</h5>
            <div className='w-75 d-flex align-items-center justify-content-around  mt-1'>
       <Link style={{color:'black',fontSize:'20px',fontWeight:'bold'}}> <i class="fa-brands fa-instagram"></i></Link>
       <Link style={{color:'black',fontSize:'20px',fontWeight:'bold'}}> <i class="fa-brands fa-facebook"></i></Link>
       <Link style={{color:'black',fontSize:'20px',fontWeight:'bold'}}> <i class="fa-brands fa-pinterest"></i></Link>
       <Link style={{color:'black',fontSize:'20px',fontWeight:'bold'}}> <i class="fa-brands fa-twitter"></i></Link>
        <Link style={{color:'black',fontSize:'20px',fontWeight:'bold'}}><i class="fa-brands fa-youtube"></i></Link>
        </div>
        </div><br />
        <div className='w-75 d-flex align-items-center justify-content-around'>
          <h3 style={{color:'white'}}>The Tasty Pallete</h3>
           <Link to={'/'} style={{textDecoration:'none'}}><h5 style={{color:'white'}}>About Us</h5></Link>
         <Link to={'./home'} style={{textDecoration:'none'}}>  <h5 style={{color:'white'}}>Our Recipes</h5></Link>
          <Link style={{textDecoration:'none'}}> <h5 style={{color:'white'}}>Advertise</h5></Link>
           <Link style={{textDecoration:'none'}}><h5 style={{color:'white'}}>Terms of Service</h5></Link>
        </div>
        <p >Copyright &copy; 2023 Recipe app Built with react.</p>
       
    </div>
    </div>
  )
}

export default Footer
