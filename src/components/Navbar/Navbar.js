import { useState, useEffect } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [sidebar, setSidebar] = useState(false)
  const [color, setColor] = useState(false)
  const storedAdminMail = localStorage.getItem("adminMail")
  const storedAdminPassword = localStorage.getItem("adminPassword")

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = (e) => {
    if (e.target.documentElement.scrollTop > 155){
      setColor(true)
    }else {
      setColor(false)
    }
  }

  function handleLogout() {
    localStorage.removeItem("adminMail")
    localStorage.removeItem("adminPassword")
  }

  return (
    <nav style={{backgroundColor: color ? '#111111' : 'transparent'}} className='navbar'>
      <img onClick={() => window.scrollTo(0, 0)} className='navImg' src="https://neoh-react.vercel.app/img/logo.png" alt="" />
      <div onClick={() => setSidebar(true)} className='menu'>
        <h3 className='menuH3'>MENU</h3>
        <div className='hambDiv'>
          <span className='hamb'></span>
          <span className='hamb'></span>
          <span className='hamb'></span>
        </div>
      </div>
      <div onClick={() => setSidebar(false)} style={{width: sidebar && '100%'}} className='leftSide'></div>
      <div style={{transform: !sidebar && 'translateX(100%)'}} className='rightSideBar'>
        <div style={{visibility: !sidebar && 'hidden'}} onClick={() => setSidebar(false)} className="menu2">
          <h4 className='menu2H4'>CLOSE</h4>
          <i className="close fa-solid fa-xmark"></i>
        </div>
        <ul className='navUl'>
          <li onClick={() => setSidebar(false)} className='navLi'><NavLink className={({isActive}) => isActive ? 'active-nav' : null} to='/'>Home</NavLink></li>
          <li onClick={() => setSidebar(false)} className='navLi'><NavLink className={({isActive}) => isActive ? 'active-nav' : null} to='/about'>About</NavLink></li>
          <li onClick={() => setSidebar(false)} className='navLi'><NavLink className={({isActive}) => isActive ? 'active-nav' : null} to='/collection'>Collection</NavLink></li>
          <li onClick={() => setSidebar(false)} className='navLi'><NavLink className={({isActive}) => isActive ? 'active-nav' : null} to='/blog'>Blog</NavLink></li>
          <li onClick={() => setSidebar(false)} className='navLi'><NavLink className={({isActive}) => isActive ? 'active-nav' : null} to='/contact'>Contact</NavLink></li>
          <li onClick={() => setSidebar(false)} className='navLi'><NavLink className={({isActive}) => isActive ? 'active-nav' : null} to={(storedAdminMail && storedAdminPassword) ? '/admin' : '/login'}>Admin</NavLink></li>
          <li onClick={() => {setSidebar(false); handleLogout()}} className='navLi'><NavLink to='/login'>Log out</NavLink></li>
        </ul>
        <div className="navFooter">
          <div className="navFooterDiv1">
              <p>Copyright 2022- Designed & Developed by</p>
              <a href="https://themeforest.net/user/codeefly/portfolio">Codeefly</a>
          </div>
          <div className="navFooterDiv2">
            <a href="https://twitter.com"><i className="navIcon fa-brands fa-twitter"></i></a>
            <a href="https://facebook.com"><i className="navIcon fa-brands fa-facebook"></i></a>
            <a href="https://instagram.com"><i className="navIcon fa-brands fa-instagram"></i></a>
            <a href="https://pinterest.com"><i className="navIcon fa-brands fa-pinterest-p"></i></a>
            <a href="https://behance.net"><i className="navIcon fa-brands fa-behance"></i></a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar