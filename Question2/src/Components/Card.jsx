import Basic from '../assets/Basic.jpg'
function Card({title,price,rating,discount,availability})
{
    return(
        <>
            
             <div className="w-[340px] h-[400px] p-4 rounded-xl shadow-xl bg-slate-300 " >
                        <img src={Basic} className='rounded-2xl shadow-xl'  alt="" />

                   <div className='p-2' >
                   <h1 className='font-bold text-2xl mx-4' >{title}</h1>
                   <h2 className='font-bold text-xl mx-4' > Rs:{price}</h2>

                   <h1 className='bg-blue-600 font-bold rounded-xl text-white shadow-sm w-[100px] py-2 text-center m-3 ' >Offer:{discount}</h1>
                   </div>

                
                        


             </div>
        </>
    )
}
export default Card