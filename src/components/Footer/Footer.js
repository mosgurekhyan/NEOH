import './Footer.css'
import { useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate()

  return (
    <div className='footer'>
      <div className="footerDiv1">
        <div className="footerDiv11">
          <img className='navImg' src="https://neoh-react.vercel.app/img/logo.png" alt="" />
          <h1>Join Now For Early Access</h1>
          <p>Morbi non dignissim erat, a blandit felis nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare</p>
          <div className="footerInputs">
            <input type="text" placeholder='Email...' />
            <button className='footerBtn1'>SUBSCRIBE</button>
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
      <div className="footerDiv2">
        <div className="navFooterDiv1">
          <p>Copyright 2022- Designed & Developed by</p>
          <a href="https://themeforest.net/user/codeefly/portfolio">Codeefly</a>
        </div>
        <div className="footerDiv21">
          <button className='footerBtn2' onClick={() => navigate('/roadmap')}>Roadmap</button>
          <button className='footerBtn2' onClick={() => window.scrollTo(0, 0)}>Cookies</button>
          <button className='footerBtn2' onClick={() => window.scrollTo(0, 0)}>Terms & Conditions</button>
        </div>
      </div>
    </div>
  )
}

export default Footer