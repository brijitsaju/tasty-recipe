import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'
import './home.css'

function HomePage() {
    const [uploadStatusRecipe,setUploadStatusRecipe] = useState({})
    return (
        <>
            <>
                <div className='bg-wheat align-items-center ' style={{ backgroundColor: 'white', padding: "26px" }}>
                    <div className='container mt-5 rounded' style={{ backgroundColor: 'gray', width: '100%', padding: '30px' }}>
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-md-6  text-center">
                                <img width={'250px'} height={'300px'} src="https://m.media-amazon.com/images/I/71nIiJO1uQL.AC_UF1000,1000_QL80.jpg" alt="" />
                            </div>
                            <div className="col-md-6 " >

                                <p className='text-light fs-5 fw-bolder'>“Food for us comes from our relatives, whether they have wings or fins or roots. That is how we consider food. Food has a culture. It has a history. It has a story. It has relationships.”</p>
                                <Add setUploadStatusRecipe={setUploadStatusRecipe}/>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginLeft: "40px" ,width:"1130px"}} className='container-fluid  mt-5 mb-5 d-flex justify-content-center ' >
                        <div className='all-videos col-lg-12'>
                            <h4 className='mb-5 text-dark fw-bolder' style={{textAlign:"center",fontSize:"50px"}}>ALL RECEPIES</h4>
                            <View  uploadStatusRecipe={uploadStatusRecipe}/>
                        </div>
                    </div>
                </div>


            </>




        </>
    )
}

export default HomePage
