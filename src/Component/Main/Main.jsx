import React, {useEffect} from 'react'
import '../Main/main.scss'
import img1 from '../../Asset/img1.jpg'
import img2 from '../../Asset/img2.jpg'
import img3 from '../../Asset/img3.jpg'
import img4 from '../../Asset/img4.jpg'
import img5 from '../../Asset/img5.jpg'
import img6 from '../../Asset/img6.jpeg'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
        id: 1,
        imgSrc: img1,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
    },

    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Bali Island',
        location: 'Indonesia',
        grade: 'CULTURAL RELAX',
        fees: '$500',
        description: 'Bali is an Indonesian Island and one of the best holiday destination in the Indonesian archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches. '

    },

    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Cappadocia',
        location: 'Turkey',
        grade: 'CULTURAL RELAX',
        fees: '$800',
        description: 'According to the World Tourism Ranking, 45 million people visit Turkey each year, and from that about 2 Million come to visit Cappadocia. This place is known for its luxurious stays and adventurous activities '

    },

    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Guanajuato',
        location: 'Mexico',
        grade: 'CULTURAL RELAX',
        fees: '$1100',
        description: 'A city in central Mexico, Guanajuato is known for its history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright colors available. Always welcome. '

    },

    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Eiffel Tower',
        location: 'Paris',
        grade: 'CULTURAL RELAX',
        fees: '$2100',
        description: 'Make the most of your visit to one of the worlds most popular landmarks on a guided Eiffel Tower tour. Hear the history and legends behind the Paris icon as a guide accompanies you up to the second level, where panoramic views of the city await. '
    },

    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Stonehenge',
        location: 'England',
        grade: 'CULTURAL RELAX',
        fees: '$4100',
        description: 'Stonehenge is a bucket list destination, it is in the middle of nowhere. Take your time to review the displays at the entrance building. Walk one way and take the bus on return which was roughly 2 miles walking distance. '
    },
]

const Main = () => {
    //create a react hook to scroll animation
    useEffect(()=>{
            Aos.init({duration: 2000})
        }, []
        )

    return (
        <section className='main container section'>

            <div data-aos="fade-up" className='secTitle'>
                <h3 className='title'>
                    Most visited destionation
                </h3>
            </div>

            <div data-aos="fade-up" className='secContent grid'>

                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
                        return(
                            <div key={id} className='singleDestination'>
                                <div data-aos="fade-up"className='imageDiv'>
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div data-aos="fade-up" className='cardInfo'>
                                    <h4 data-aos="fade-up" className="destTitle">{destTitle}</h4>
                                    <span data-aos="fade-up" className='continent flex'>
                                        <HiOutlineLocationMarker className='icon'/>
                                        <span className='name'>{location}</span>
                                    </span>

                                    <div className='fees flex'>
                                        <div className='grade'>
                                            <span>{grade}<small>+1</small></span>
                                        </div>

                                        <div className='price'>
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className='desc'>
                                        <p>{description}</p>
                                    </div>

                                    <button className='btn flex'>
                                        <HiOutlineClipboardCheck className='icon'/>
                                    </button>

                                </div>

                            </div>
                        )
                    })
                }
            </div>

        </section>
    )
}

export default Main