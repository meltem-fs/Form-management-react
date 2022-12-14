import React from 'react'
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate()
  return (
    <div className='p-5' >
      <h1 className="my-4 text-danger">WELCOME</h1>
      <button className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span onClick={()=> navigate("/register")} className="button-text">JOİN US</span>
      </button>
    </div>
  );
}

export default Main