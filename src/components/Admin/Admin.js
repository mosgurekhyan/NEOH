import { useContext, useEffect, useState } from 'react'
import { UseContext } from '../../App'
import { useNavigate } from 'react-router-dom'
import './Admin.css'
import EditItem from '../EditItem/EditItem'

function Admin() {
  const navigate = useNavigate()
  const { ref1, items, deleteItem, adminMail, adminPassword, setAdminMail, setAdminPassword } = useContext(UseContext)
  const [newMail, setNewMail] = useState(adminMail)
  const [newPassword, setNewPassword] = useState(adminPassword)
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const handleMailChange = (e) => {
    setNewMail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value)
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    if (newMail !== '') {
      localStorage.setItem('adminMail', newMail)
      setAdminMail(newMail)
      setNewMail('')
    }
    if (newPassword !== '') {
      localStorage.setItem('adminPassword', newPassword)
      setAdminPassword(newPassword)
      setNewPassword('')
    }
  }

  return (
    <div ref={ref1} className='admin'>
      <ul className='adminUl'>
        {items.map(e => (
          <li key={e.id}>
            {e.id}
            <EditItem item={e} />
            <button className='adminBtn' onClick={() => deleteItem(e.id)}>Delete</button>
            <div className="adminLine"></div>
          </li>
        ))}
        <div className="adminLine"></div>
        <button className='adminBtn' onClick={() => navigate('/additem')}>Go to AddItem</button>
        <button className='adminBtn' onClick={() => navigate('/')}>Go to Home</button>
      </ul>
      <div className="changeData">
        <h2 className='adminH2'>Update Email and Password</h2>
        <form className='adminForm' onSubmit={handleUpdate}>
          <div>
            <label htmlFor="new-email">New Email:</label>
            <input autoComplete='username' id="new-email" type="email" value={newMail} onChange={handleMailChange} />
          </div>
          <div>
            <label htmlFor="new-password">New Password:</label>
            <input autoComplete="current-password" id="new-password" type={showPassword ? 'text' : 'password'} value={newPassword} onChange={handlePasswordChange} />
            <i onClick={() => setShowPassword(!showPassword)} className={`fa-solid ${showPassword ? 'fa-eye' :'fa-eye-slash'}`}></i>
          </div> 
          <button className='adminBtn' type="submit">Update</button>
        </form>
      </div>
    </div>
  )
}

export default Admin