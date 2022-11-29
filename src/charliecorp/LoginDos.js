import React, { useState } from 'react';
import './LoginDos.css'

function LoginDos({ Login, error }) {
  const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

  return (

    <form onSubmit={submitHandler}>
      <div className='login'>
          <img className='imagen_login' src='https://tradinginsider.fr/wp-content/uploads/2020/06/cyber-security.jpg' />

          <div className='seccion_derecha_login'>

              <div className='seccion_derecha_login_box'>
                  <h2 className='login_logo'>Charlie<span className='niva_light'>Corp</span></h2>
                 
                  <h1 className='h1_login'>Welcome!</h1>

                  <div className='h1_input_flex'>

                      <input className='input_login' type="text" placeholder="Enter Name" id='name' autocomplete="off" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
                      <input className='input_login' type="email" placeholder="Enter Email" id='email' autocomplete="off" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                      <input className='input_login' type="password" placeholder="Enter Email" id='password' autocomplete="off" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />

                  </div>

                  <input className='boton_login' type="submit" value="LOGIN" />
                 
                  <div className='error'>
                    {(error != "") ? ( <div className='error'>{error}</div>) : "" }
                  </div>
              </div>
              
          </div>

      </div>
    </form>
  )
}

export default LoginDos