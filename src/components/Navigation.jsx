import Link from "next/link";

const Navigation = () => {
  return (
    <div style={{backgroundColor: `#ecf0f3`}} className='fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'>
        <div className='flex justify-between items-center w-full px-2 2xl:px-16' >
          <div>
            <ul className='hidden md:flex'>
              <li className='ml-10 text-sm uppercase hover:border-b'>
                <Link href='/'>Home</Link>
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
}

export default Navigation;