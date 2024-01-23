import './Items.css'
import { useContext } from 'react'
import { UseContext } from '../../App'
import { useLocation, useNavigate } from 'react-router-dom'

function Items() {
  const navigate = useNavigate()
  const {items} = useContext(UseContext)
  const {pathname} = useLocation()

  const openSea = () => {
    window.open('https://opensea.io')
  }

  const openDdiscord = () => {
    window.open('https://discord.com')
  }

  return (
    <div className='items'>
      {
        items.map((e, i) => (
          <div className='itemsMainDiv' key={e.id}>
            <div style={{transform: (i + 1) % 2 === 0 && 'translateX(122%)'}} className="imgDiv">
              <img className='itemsImg' src={e.img} alt="" />
            </div>
            <div style={{transform: (i + 1) % 2 === 0 && 'translateX(-180%)'}} className="itemsData">
              <h1>{e.title1}</h1>
              <div className="line1">
                <span></span>
              </div>
              <p>{e.text1}</p>
              <p>{e.text2}</p>
              <div className="btnsDiv">
                <button onClick={(i + 1) % 2 === 1 ? openSea : () => navigate('/about')} className='itemsBtn'>
                  <i style={{display: (i + 1) % 2 === 0 && 'none'}} className='fa-solid fa-sailboat'></i>
                  {pathname === '/about' ? e.btn11 : e.btn1}  
                </button>
                <button onClick={openDdiscord} style={{display: (i + 1) % 2 === 0 && 'none'}} className='itemsBtn'>
                  <i className='fa-brands fa-discord'></i>
                  {e.btn2}
                </button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Items