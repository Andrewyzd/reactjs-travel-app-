import React, {useEffect} from 'react';
import '../Footer/footer.scss';
import footer from '../../Asset/footer.mp4'
import { FiChevronRight, FiSend } from 'react-icons/fi';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTikTok, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    //create a react hook to scroll animation
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, []
    )
    
    return (
        <section className='footer'>
            <div className='videoDiv'>
                <video src={footer} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div data-aos="fade-up" className="secContent container">
                <div className='contactDiv flex'>
                    <div data-aos="fade-up" className='text'>
                        <small>Keep in touch</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className='inputDiv flex'>
                        <input type='text' placeholder='Enter email address'/>
                        <button className='btn flex' type='submit'>
                            Send <FiSend className='icon' />
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a herf="#" className='logo flex'>
                                <MdOutlineTravelExplore className='icon'/> Travel.
                            </a>
                        </div>

                        <div className="footerParagraph">
                        “The largest difference between selling leisure and corporate are the nuances. Within corporate travel, exceptional service is the differentiator between travel management companies. While corporate agents make sales based off of price and schedule…the customer’s real preference is high-touch, world-class service.” 
                        – Christy Prescott (CEO of Corporate Travel Planners, San Antonio, Texas)
                        </div>

                        <div data-aos="fade-up" className='footerSocials'>
                            <AiOutlineTwitter className='icon'/>
                            <AiOutlineYoutube className='icon'/>
                            <AiOutlineTikTok className='icon'/>
                            <AiOutlineInstagram className='icon'/>
                            <AiOutlineFacebook className='icon'/>
                        </div>
                    </div>

                    <div className='footerLinks grid'>
                        {/*Group 1*/}
                        <div className='linkGroup'>
                            <span data-aos="fade-up" className='groupTitle'>
                                Our Agency
                            </span>
                            <li className='footerList flex'>
                                <FiChevronRight className='icon' />
                                Services
                            </li>
                            <li className='footerList flex'>
                                <FiChevronRight className='icon' />
                                Insurance
                            </li>
                            <li className='footerList flex'>
                                <FiChevronRight className='icon' />
                                Agency
                            </li>
                            <li className='footerList flex'>
                                <FiChevronRight className='icon' />
                                Tourism
                            </li>
                            <li className='footerList flex'>
                                <FiChevronRight className='icon' />
                                Payment
                            </li>
                        </div>
                        
                        {/*Group 2*/}
                        <div className='linkGroup'>
                            <span data-aos="fade-up" className='groupTitle'>
                                Partners
                            </span>
                            <li className='footerList flex'>
                                <FiChevronRight className='icon' />
                                Booking
                            </li>
                            <li className='footerList flex'>
                                <FiChevronRight className='icon' />
                                Rentcars
                            </li>
                            <li className='footerList flex'>
                                <FiChevronRight className='icon' />
                                HotelWorld
                            </li>
                            <li className='footerList flex'>
                                <FiChevronRight className='icon' />
                                Trivago
                            </li>
                            <li className='footerList flex'>
                                <FiChevronRight className='icon' />
                                Booking.com
                            </li>
                        </div>
                            
                        {/*Group 3*/}
                        <div className='linkGroup'>
                            <span data-aos="fade-up" className='groupTitle'>
                                Last Minutes
                            </span>
                            <li className='footerList flex'>
                                <FiChevronRight className='icon' />
                                London
                            </li>
                            <li className='footerList flex'>
                                <FiChevronRight className='icon' />
                                California
                            </li>
                            <li className='footerList flex'>
                                <FiChevronRight className='icon' />
                                Indonesia
                            </li>
                            <li className='footerList flex'>
                                <FiChevronRight className='icon' />
                                Europe
                            </li>
                            <li className='footerList flex'>
                                <FiChevronRight className='icon' />
                                Oceania
                            </li>
                        </div>

                    </div>

                    <div className='footerDiv flex'>
                        <small>BEST TRAVEL WEBSITE THEME</small>
                        <small>COPYRIGHT</small>
                        <small>RESERVED - ISRATECH 2022</small>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Footer