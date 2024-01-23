import { useNavigate } from "react-router-dom"

function ErrorPage() {
  const navigate = useNavigate()
  return (
    <div className="errorPage">
      <h1>Oops! Something went wrong.</h1>
      <p>We're sorry, but it looks like something went wrong.</p>
      <button className="adminBtn" onClick={() => navigate('/')}>Go to Home</button>
    </div>
  )
}

export default ErrorPage