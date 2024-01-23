import { useContext, useState } from 'react'
import './Items3.css'
import { UseContext } from '../../App'
import { useLocation, useNavigate } from 'react-router-dom'

function Items3() {
  const navigate = useNavigate()
  const {items3} = useContext(UseContext)
  const [popUp, setPopUp] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const { pathname } = useLocation()

  const openSea = () => {
    window.open('https://opensea.io')
  }

  const handleClick = (item) => {
    setSelectedItem(item)
    setPopUp(true)
  }

  return (
    <div className='items3'>
      <div style={{display: !popUp && 'none'}} className="popup">
        <div className="items3Popup">
          <div className="items3BtnDiv">
            <button onClick={() => setPopUp(false)} className='items3Btn2'>X</button>
          </div>
          <img src={selectedItem?.img} alt="" />
          <div className='popupData'>
            <h1>{selectedItem?.nikname}</h1>
            <div className="line1">
                <span></span>
            </div>
            <p>Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia.</p>
            <div className="btnsDiv">
                <button onClick={openSea} className='itemsBtn'>
                  <i className='fa-solid fa-sailboat'></i>
                  VIEW ON OPENSEA
                </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{display: pathname === '/collection' && 'none'}} className="items2Div1">
        <h1>Our Latest Drops</h1>
        <div className="line2">
          <span></span>
        </div>
      </div> 
      <div className="items3Div1">
        {
          pathname === '/' ?
          items3.map(e => e.id < 7 && (
            <div onClick={() => handleClick(e)} className='items3Data' key={e.id}>
              <div className='items3Img'>
                <img src={e.img} alt="" />
              </div>
              <div className='items3Nikname'>{e.nikname}</div>
            </div>
          )) : 
          items3.map(e => (
            <div onClick={() => handleClick(e)} className='items3Data' key={e.id}>
              <div className='items3Img'>
                <img src={e.img} alt="" />
              </div>
              <div className='items3Nikname'>{e.nikname}</div>
            </div>
          ))
        }
      </div>
      <button style={{display: pathname === '/collection' && 'none'}} className='items3Btn1' onClick={() => navigate('/collection')}>CLICK HERE TO SEE ALL ITEMS</button>
    </div>
  )
}

export default Items3