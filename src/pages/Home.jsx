import { useState } from 'react'
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

function Home() {

  let { data : months , error, loading } = useFetch( 'http://localhost:3000/Months' )

  return (
        
          <div className='p-4 max-w-7xl mx-auto'>

              { error && <p className=' h-screen text-center mt-20 text-6xl font-bold text-white '> { error } </p> }
             
              { loading && <p className=' h-screen text-center mt-20 text-6xl font-bold text-white '> Loading..... </p> }

              { !!months && 
                <div className="grid grid-col-1 md:grid-cols-4 place-items-center gap-y-6">

                    { months.map( month => (

                         <div className=' bg-main px-5 pt-5 pb-2 space-y-2 rounded-2xl' key={ month.id }>

                              <div className=" ">
                                  <img src={ `/src/assets/img/${month.id}.jpg` } alt="Image" className=' rounded-lg w-60 h-44' />
                              </div>

                              <div className=" flex justify-between items-center py-1 ">

                                  <p className=' text-white '> { month.MonthMm } </p>

                                  <Link to={ `/months/${month.id}` } className=" p-2 text-secondary bg-bg rounded-full hover:px-4 ">
                                  
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                      </svg>

                                  </Link>

                              </div>

                         </div>

                    ) ) }

                </div>
              }

          </div>

  )
}

export default Home;
