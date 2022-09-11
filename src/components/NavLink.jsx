import {Link} from 'next/link'

const NavLink = ({active = false, children,...props}) => {

  // console.log(props);
  
  return <li>
    <Link href='/'>
      <a className="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out">Home</a>
    </Link>
  </li>
}

export default NavLink