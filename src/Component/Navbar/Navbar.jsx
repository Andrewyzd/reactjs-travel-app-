import React, {useState} from 'react'
import { AiFillAccountBook, AiFillClockCircle } from 'react-icons/ai'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { TbGridDots } from 'react-icons/tb'
import '../Navbar/navbar.scss'

const Navbar = () => {
    const [active, setActive] = useState('navBar')
    const showNav = ()=>{
        setActive('navBar activeNavbar')
    }
    const removeNavbar = ()=>{
        setActive('navBar')
    }

    return (
        <section className='navBarSection'>
            <header className='header flex'>
                <div className='logoDiv'>
                    <a herf="#" className='logo flex'>
                        <h1><MdOutlineTravelExplore className="icon"/> Travel.</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className='navLists grid'>
                        <li className='navItem'>
                            <a herf="#" className='navLink'>Home</a>
                        </li>
                        <li className='navItem'>
                            <a herf="#" className='navLink'>Package</a>
                        </li>
                        <li className='navItem'>
                            <a herf="#" className='navLink'>Shop</a>
                        </li>
                        <li className='navItem'>
                            <a herf="#" className='navLink'>About</a>
                        </li>
                        <li className='navItem'>
                            <a herf="#" className='navLink'>Pages</a>
                        </li>

                        <button className='btn'>
                            <a href="#">Book Now</a>
                        </button>
                    </ul>
                    <div onClick={removeNavbar} className='closeNavbar'>
                        <AiFillClockCircle className='icon'/>
                    </div>
                </div>
                <div onClick={showNav} className='toggleNavbar'>
                        <TbGridDots className='icon'/>
                    </div>
            </header>
        </section>
    )
}

export default Navbar