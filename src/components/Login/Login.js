import './Login.css'
import * as yup from 'yup'
import { Formik } from "formik"
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { UseContext } from '../../App'

function Login() {
  const navigate = useNavigate()
  const {adminMail, adminPassword, ref1} = useContext(UseContext)
  const [showPassword, setShowPassword] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const validationSchema = yup.object().shape({
    email: yup.string().email('please enter a valid email').required("can't be empty"),
    password: yup.string().typeError('must be a string').required("can't be empty")
  })  

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      
      onSubmit={(values, {resetForm}) => {
        if(values.email === adminMail && values.password === adminPassword) {
          localStorage.setItem("adminMail", JSON.stringify(adminMail))
          localStorage.setItem("adminPassword", JSON.stringify(adminPassword))
          navigate('/admin')
          resetForm()
        }
        setShowMessage(true)
        setTimeout(() => {
          setShowMessage(false)
        }, 3000)
      }}

      validateOnBlur
      validationSchema={validationSchema}>
      {
        ({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
          <form ref={ref1} className="loginForm" onSubmit={handleSubmit}>
            <h1>Log in</h1>
            <div className='loginDiv'> 
              <input 
                className="input" 
                type='text'
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder='email'
                autoComplete='username'
              />
              {touched.email && errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className='loginDiv'>
              <input 
                className="input" 
                type={showPassword ? 'text' : 'password'}
                name='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder='password'
                autoComplete='username'
              />
              <i onClick={() => setShowPassword(!showPassword)} className={`fa-solid ${showPassword ? 'fa-eye' :'fa-eye-slash'}`}></i>
              {touched.password && errors.password && <p className="error">{errors.password}</p>}
            </div>
            <p style={{visibility: !showMessage && 'hidden'}} className="showMessage">Invalid email or password. Please try again.</p>

            <button
            className="submit"
            disabled={!isValid && !dirty}
            type='submit'
            >Log in</button>
          </form>
        )
      }
    </Formik>
  )
}

export default Login


