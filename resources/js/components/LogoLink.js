import { Link } from 'react-router-dom';

const LogoLink = () => {
  return (
    <div className='d-flex justify-content-center'>
      <Link className='logo-link' to="/">Ozcan | tadilat</Link>
    </div>
  )
}

export default LogoLink