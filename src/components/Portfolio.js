import React from 'react'
import parallex from "../assets/portfolio/parallex.jpeg"
import razorpay from "../assets/portfolio/razorpay.jpg"
import calsi from "../assets/portfolio/calsi.jpg"
import weather from "../assets/portfolio/weather.jpg"
import tictactoe from "../assets/portfolio/tic-tac-toe.png"
import ecommerce from "../assets/portfolio/ecommerce.jpg"

const Portfolio = () => {


    const portfolio = [
        {
            id:1,
            src:parallex
        },
        {
            id:2,
            src:razorpay
        },
      
        {
            id:4,
            src:calsi
        },
        {
            id:5,
            src:weather
        },
        {
            id:6,
            src:tictactoe
        },
        {
            id:7,
            src:ecommerce
        },
    ]












  return (
    <div name="portfolio" className='bg-gradient-to-b from-black
    to-gray-800 w-full text-white  md:h-screen'
    >

    <div className='max-w-screen-lg p-4 mx-auto flex flex-col 
    justify-center w-full h-full'
    >
        <div className='pb-8'>
            <p className='text-4xl  font-bold inline border-b-4
             border-gray-500'
            >Portfolio</p>
            <p className='py-6'>Check out some of my Work right here </p>
        </div>

        <div  className='grid  sm:grid-cols-2 md:grid-cols-3  gap-8
                px-12 sm:px-0'>





        {
            portfolio.map(({id,src})=>(




               
        <div key={id} className='shadow-md shadow-gray-600 rounded-lg '>
            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
            <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
            </div>
        </div>
 

            
            
            ))
        }
        </div>










       
     </div>

    </div>
  )
}

export default Portfolio