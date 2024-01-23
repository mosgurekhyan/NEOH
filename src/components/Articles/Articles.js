import { useContext } from 'react'
import './Articles.css'
import { UseContext } from '../../App'

function Articles() {
  const { articles } = useContext(UseContext)
  return (
    <div className='articles'>
      {
        articles.map(e => (
          <div key={e.id} className="articleDetail">
            <h3>{e.title}</h3>
            <p>{e.date} <span></span></p>
            <div>{e.id}</div>
          </div>
        ))
      }
    </div>
  )
}

export default Articles