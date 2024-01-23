import { useContext } from 'react'
import './Comments.css'
import { UseContext } from '../../App'

function Comments() {
  const { comments } = useContext(UseContext)
  return (
    <div className='comments'>
      <h2>3 COMMENTS</h2>
      <div className="commentsDiv">
        {
          comments.map(e => (
            <div key={e.id} className="commentsData">
              <img src={e.img} alt="" />
              <div className="detail">
                <h3>{e.name}</h3>
                <h5>{e.date}</h5>
                <p>{e.text}</p>
                <p>{e.text2}</p>
                <p>{e.text3}</p>
                <div>
                  <button><i className="fa-solid fa-reply"></i>Reply</button>
                  <button>Edit</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Comments