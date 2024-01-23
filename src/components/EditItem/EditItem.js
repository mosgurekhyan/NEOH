import { memo, useContext, useState } from 'react'
import { UseContext } from '../../App'
import './EditItem.css'

function EditItem(props) {
  const { updateItem } = useContext(UseContext)
  const [img, setImg] = useState(props.item.img)
  const [title1, setTitle1] = useState(props.item.title1)
  const [title2, setTitle2] = useState(props.item.title2)
  const [text1, setText1] = useState(props.item.text1)
  const [text2, setText2] = useState(props.item.text2)
  const [btn1, setBtn1] = useState(props.item.btn1)
  const [btn11, setBtn11] = useState(props.item.btn11)
  const [btn2, setBtn2] = useState(props.item.btn2)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    updateItem(props.item.id, { img, title1, title2, text1, text2, btn1, btn11, btn2 })
  }

  return (
    <form className='editForm' onSubmit={handleSubmit}>
      <div className='editDiv'>
        <p>Img:</p>
        <input type="text" value={img} onChange={e => setImg(e.target.value)} />
      </div>
      <div className='editDiv'>
        <p>Title1:</p>
        <input type="text" value={title1} onChange={e => setTitle1(e.target.value)} />
      </div>
      <div className='editDiv'>
        <p>Title2:</p>
        <input type="text" value={title2} onChange={e => setTitle2(e.target.value)} />
      </div>
      <div className='editDiv'>
        <p>Text1:</p>
        <input type="text" value={text1} onChange={e => setText1(e.target.value)} />
      </div>
      <div className='editDiv'>
        <p>Text2:</p>
        <input type="text" value={text2} onChange={e => setText2(e.target.value)} />
      </div>
      <div className='editDiv'>
        <p>Btn1:</p>
        <input type="text" value={btn1} onChange={e => setBtn1(e.target.value)} />
      </div>
      <div className='editDiv'>
        <p>Btn11:</p>
        <input type="text" value={btn11} onChange={e => setBtn11(e.target.value)} />
      </div>
      <div className='editDiv'>
        <p>Btn2:</p>
        <input type="text" value={btn2} onChange={e => setBtn2(e.target.value)} />
      </div>
      <button className='adminBtn' type="submit">Save</button>
    </form>
  )
}

export default memo(EditItem)