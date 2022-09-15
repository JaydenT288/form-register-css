import React from 'react'

const SignUp = () => {
  return (
    <div className='container'>
        <div className='title'><h1>Sign Up</h1></div>
        <form>
            <div className='user-details'>
                <div className='input-box'>
                    <input className='short' type='text' placeholder='First Name' />
                    <input className='short' type='text' placeholder='Last Name' />
                </div>
                <div className='input-box'>
                    <input className='long' type='text' placeholder='Mobile No.' />
                </div>
                <div className='input-box'>
                    <input className='long' type='text' placeholder='Email Address' />
                </div>
                <div className='input-box'>
                    <input className='short' type='text' placeholder='Password' />
                    <input className='short' type='text' placeholder='Confirm Password' />
                </div>
            </div>
            <div className='agreement-wrap'>
                <label>
                    <input type='checkbox'></input>I agree
                </label>
                <p>By cliking Register, you agree to the Terms and Conditions
                    set out by this site, including our Cookie Use.
                </p>
            </div>
            <div className='button'>
                <div className='input-box'>
                    <button className='register'>Register</button>
                    <button className='sign-in'>Sign In</button>
                </div>  
            </div>
        </form>
    </div>
  )
}

export default SignUp