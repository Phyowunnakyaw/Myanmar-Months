import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';


export default function MonthDetail() {

    let { id } = useParams();
    let { data : months , error, loading } = useFetch( `http://localhost:3000/Months/${id}` );
    let navigate = useNavigate();

    useEffect( () => {
        if( error ) {
            setTimeout(() => {
                navigate( '/' )
            }, 1000);
        }
    } )

  return (
         
         <div className=' max-w-7xl mx-auto rounded-lg bg-main'>

             { loading && <p className=' h-screen text-center mt-20 text-6xl font-bold text-white '> Loading..... </p> }

             { months && 
             
               <div className="" key={ months.id }>

                   <div className=" grid grid-cols-1 md:grid-cols-2 p-8 pb-4 ">

                       <div className=" flex items-center justify-center ">
                            <img src= { months.ImgUrl } alt="" className=" w-80 h-30 border border-secondary " />
                       </div>

                       <div className=" space-y-4 ">

                           <p className=' text-secondary font-bold text-lg '> { months.MonthMm } ( { months.MonthEn } ) </p>
                           <p className=' text-secondary font-bold text-lg '> { months.FestivalMm } ( { months.FestivalEn } ) </p>
                           <p className=' text-secondary leading-7'> { months.Description } </p>

                       </div>

                   </div>

                   <div className=" flex flex-col items-end px-8 ">

                       <p className=' text-secondary leading-7 '> { months.Detail } </p>

                       <button onClick={ () => { navigate('/') } } className=' my-4 p-2 px-4 rounded-md text-sm bg-bg text-secondary hover:tracking-widest '> နောက်သို့ </button>

                   </div>

               </div>

             }

         </div>
  )
}
