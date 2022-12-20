import React from 'react'
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate()
  return (
    <div className="p-5">
      <h1
        className="my-4 text-light fw-bold "
        style={{
          textShadow: "2px 2px 3px rgb(27, 27, 27)",
        }}
      >
        WELCOME
      </h1>
      <button className="learn-more mt-3">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span onClick={() => navigate("/register")} className="button-text">
          JOİN US
        </span>
      </button>
    </div>
  );
}

export default Main