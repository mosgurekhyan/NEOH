import { useNavigate } from 'react-router-dom'
import './Blog.css'
import News from '../News/News'
import { useContext, useEffect } from 'react'
import { UseContext } from '../../App'

function Blog() {
  const navigate = useNavigate()
  const { ref1 } = useContext(UseContext)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []) 

  return (
    <div ref={ref1} className='blog'>
      <div className="aboutHeader">
        <img className="overlay1" src="https://neoh-react.vercel.app/img/hero/bg.jpg" alt="" />
        <div className="aboutHeaderDiv">
          <h1>BLOG</h1>
          <h3><p onClick={() => navigate('/')} className='aboutP1'>Home</p> / <p>Blog</p></h3>
        </div>
      </div>
      <News/>
    </div>
  )
}

export default Blog