import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/assets/logo.png'
import {login , signup} from '../../Config/firebase'
import netflix_spinner from '../../assets/assets/netflix_spinner.gif'



const Login = () => {

  const [signState , setSignState] = useState('Sign-In')
  const initialState = {name:'' ,email:'' , password:''}
const [state , setState] = useState(initialState)
const [loading , setLoading] = useState(false)

const handleChange = (e) =>
{
  const { name , value } = e.target

  setState(prev=>({...prev ,[name]:value}))

}

const user_auth = async (e) =>
  {
    e.preventDefault()
    setLoading(true)
    if(signState === 'Sign-In')
      {
  const {email , password } = state

        if(!email , !password )
          {
            alert('Fill the Form complete')
                return
              }
              await login(email , password)
            }
            else
            {
              const {email , password  , name} = state
              if(!email , !password , !name )
                {
                  alert('Fill the Form complete')
                  return
                }
                await signup(name , email , password)
              }
              setLoading(false)
            }


  return (
    loading ? 
    <div className='login-spinner'>
      <img src={netflix_spinner} alt="img" />
    </div>
    :
      <div className='login'>
      <img src={logo} className='login-logo' alt="img" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState==='Sign-Up'?<input type="text" placeholder='Your Name' value={state.name} name='name'  onChange={handleChange}/>:<></> }
          
          <input type="email" placeholder='Email' value={state.email} name='email'onChange={handleChange}/>
          <input type="password" placeholder='Password' value={state.password} name='password'onChange={handleChange} />
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox"/>
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==='Sign-In'
          ?
          <p>New to Netflix? <span onClick={()=>setSignState('Sign-Up')}>Sign Up Now</span> </p>
          :
          <p>Already have an Account? <span  onClick={()=>setSignState('Sign-In')}>Sign In Now</span> </p>
        }
        </div>
        </div>
        </div>
     
      )
    }

export default Login