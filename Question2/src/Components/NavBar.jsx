import { Link } from "react-router-dom"

function NavBar()
{
    return(
        <>
            <nav className="w-full h-[90px] border-b shadow-xl flex items-center  " >
          
                 <div className="flex gap-10 ml-10 font-bold text-2xl" >
                    <Link>Home</Link>
                    <Link>Demo</Link>
                 </div>

            </nav>
        </>
    )
}
export default NavBar