import { useContext } from 'react'
import './News.css'
import { UseContext } from '../../App'
import { useNavigate } from 'react-router-dom'

function News() {
  const navigate = useNavigate()
  const {news} = useContext(UseContext)
  return (
    <div className='news'>
      <div className="items2Div1">
        <h1>Neohs News</h1>
        <div className="line2">
          <span></span>
        </div>
      </div>
      <div className="newsData">
        {
          news.map(e => (
            <div key={e.id} className="newsDataDiv">
              <div className="polygon3">{e.date}</div>
              <h2>{e.title}</h2>
              <p>{e.text}</p>
              <button onClick={() => navigate('/blog-single')}>READ MORE</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default News