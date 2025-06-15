import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      Home <Link to="/posts">Posts</Link>
    </div>
  )
}

export default Home
