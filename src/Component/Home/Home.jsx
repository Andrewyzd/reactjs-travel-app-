import React, {useEffect} from 'react'
import homo from '../../Asset/homo.mp4'
import '../Home/home.scss'
import { GrLocation } from 'react-icons/gr'
import { HiFilter } from 'react-icons/hi'
import { AiFillSafetyCertificate, AiOutlineInstagram } from 'react-icons/ai'
import { FiFacebook } from 'react-icons/fi'
import { BsListTask } from 'react-icons/bs'
import { TbApps } from 'react-icons/tb'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

    //create a react hook to scroll animation
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, []
    )

    return (
        <section className='home'>
            <div className='overlay'>
            </div>
            <video src={homo} muted autoPlay loop type='video/mp4'>
            </video>

            <div className='homeContent container'>
                <div className='textDiv'>

                    <span data-aos="fade-up" className='smallText'>
                        Our Package
                    </span>

                    <h1 data-aos="fade-up" className='homeTitle'>
                        Search your holidays
                    </h1>

                </div>

                <div data-aos="fade-up" className="cardDiv grid">
                    
                    <div className='destinationInput'>
                        <label htmlFor="city">
                            Search your destination:
                        </label>
                        <div className="input flex">
                            <input type="text" placeholder='Enter name here...'/>
                            <GrLocation className='icon'/>
                        </div>
                    </div>

                    <div className='dateInput'>
                        <label htmlFor="city">
                            Select your Date:
                        </label>
                        <div className="input flex">
                            <input type="date" placeholder='Enter date here...'/>
                        </div>
                    </div>

                    <div className='priceInput'>
                        <div className='label_total flex'>
                            <label htmlFor='price'>Max price</label>
                            <h3 className='total'>$5000</h3>
                        </div>

                        <div className='input flex'>
                            <input type="range" max="5000" min="2000"/>
                        </div>
                    </div>

                    <div className='searchOptions flex'>
                        <HiFilter className='icon'/>
                        <span>MORE FILTERS</span>
                    </div>

                </div>

                <div className="homeFooterIcons">
                    <div className="rightIcons">
                        <AiOutlineInstagram className="icon"/>
                        <FiFacebook className="icon"/>
                        <AiFillSafetyCertificate className="icon"/>
                    </div>
                    <div className="leftIcons">
                        <BsListTask className="icon"/>
                        <TbApps className="icon"/>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Home