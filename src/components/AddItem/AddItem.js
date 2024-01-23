import './AddItem.css'
import { useState, useContext, useEffect } from 'react'
import { UseContext } from '../../App'
import { useNavigate } from 'react-router-dom'

function AddItem() {
  const navigate = useNavigate()
  const { addItem, ref1 } = useContext(UseContext)
  const [img, setImg] = useState('')
  const [title1, setTitle1] = useState('')
  const [title2, setTitle2] = useState('')
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [btn1, setBtn1] = useState('')
  const [btn11, setBtn11] = useState('')
  const [btn2, setBtn2] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    addItem({ id: Date.now().toString(), img, title1, title2, text1, text2, btn1, btn11, btn2 })
    setImg('')
    setTitle1('')
    setTitle2('')
    setText1('')
    setText2('')
    setBtn1('')
    setBtn11('')
    setBtn2('')
  }

  return (
    <div className='addItem' ref={ref1}>
      <div className="addItemBtns">
        <button className='adminBtn' onClick={() => navigate('/admin')}>Go Back</button>
        <button onClick={handleSubmit} className='adminBtn' type="submit">Add Item</button>
      </div>
      <form className='addItemForm' onSubmit={handleSubmit}>
        <label> 
          Img:
          <input type="text" value={img} onChange={e => setImg(e.target.value)} />
        </label>
        <label>
          Title1:
          <input type="text" value={title1} onChange={e => setTitle1(e.target.value)} />
        </label>
        <label>
          Title2:
          <input type="text" value={title2} onChange={e => setTitle2(e.target.value)} />
        </label>
        <label>
          Text1:
          <input type="text" value={text1} onChange={e => setText1(e.target.value)} />
        </label>
        <label>
          Text2:
          <input type="text" value={text2} onChange={e => setText2(e.target.value)} />
        </label>
        <label>
          Btn1:
          <input type="text" value={btn1} onChange={e => setBtn1(e.target.value)} />
        </label>
        <label>
          Btn11:
          <input type="text" value={btn11} onChange={e => setBtn11(e.target.value)} />
        </label>
        <label>
          Btn2:
          <input type="text" value={btn2} onChange={e => setBtn2(e.target.value)} />
        </label>
      </form>
    </div>
  )
}

export default AddItem