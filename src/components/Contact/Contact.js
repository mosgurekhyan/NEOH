import { useNavigate } from 'react-router-dom'
import './Contact.css'
import { useContext, useEffect } from 'react'
import { UseContext } from '../../App'
// import nodemailer from 'nodemailer'

function Contact() {
  const navigate = useNavigate()
  const { ref1 } = useContext(UseContext)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // const sendEmail = () => {
  //   const transporter = nodemailer.createTransport({
  //     service: 'gmail',
  //     auth: {
  //       user: 'your_email@gmail.com',
  //       pass: 'your_password'
  //     }
  //   })
    
    // const mailOptions = {
    //   from: 'your_email@gmail.com',
    //   to: 'recipient_email@example.com',
    //   subject: 'Test email from Node.js',
    //   text: 'Hello world!'
    // }
    
    // transporter.sendMail(mailOptions, function(error, info){
    //   if (error) {
    //     console.log(error)
    //   } else {
    //     console.log('Email sent: ' + info.response)
    //   }
    // })
  // }
  
  return (
    <div ref={ref1} className='contact'>
      <div className="aboutHeader">
        <img className="overlay1" src="https://neoh-react.vercel.app/img/hero/bg.jpg" alt="" />
        <div className="aboutHeaderDiv">
          <h1>CONTACT</h1>
          <h3><p onClick={() => navigate('/')} className='aboutP1'>Home</p> / <p>Contact</p></h3>
        </div>
      </div>
      <div className="contactDiv">
        <div className="contactDiv1">
          <h3>Name</h3>
          <input placeholder='Yout Name' type="text" />
          <h3>Email</h3>
          <input placeholder='youremail@mail.com' type="text" />
          <h3>Subject</h3>
          <input type="text" />
          <h3>Message</h3>
          <input className='contactInp' type="text" />
          {/* <button onClick={sendEmail}>SEND MESSAGE</button> */}
          <p>Duis eu lorem ut mauris pulvinar auctor. Maecenas et dapibus orci, eleifend euismod justo. Quisque luctus turpis eu tristique feugiat. <br /><br />Praesent ac magna feugiat, interdum lacus ac, interdum dui. Pellentesque id quam quis enim malesuada rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          <h4>ADDRESS</h4>
          <h1>69 Queen St, Melbourne Australia</h1>
          <h4>PHONE</h4>
          <h1><a href="tel:+7068980751">(+706) 898-0751</a></h1><br />    
          <a href="mailto:example@domain.com" className="email">example@domain.com</a>   
        </div>
      </div>
    </div>
  )
}

export default Contact