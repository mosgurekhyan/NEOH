import { memo, useContext } from 'react'
import './Items5.css'
import { UseContext } from '../../App'

function Items5() {
  const { items5, ref1, handleClick } = useContext(UseContext)
  const doubledArray = items5.map(e => [e, e]).flat().sort(() => .5 - Math.random())
  return (
    <div className='items5'>
      <div className="items2Div1">
        <h1>Neohs Investors</h1>
        <div className="line2">
          <span></span>
        </div>
      </div>
      <div className="items5Div1">
        {
          doubledArray.map((e, i) => (
            <div onClick={() => handleClick(ref1)} key={i} className="items5Data">
              <img src={e.img} alt="" />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default memo(Items5)