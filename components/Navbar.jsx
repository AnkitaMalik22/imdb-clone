
import requests from "../utils/requests"
import {useRouter} from 'next/router'

function Navbar() {
const router=useRouter()
  return (
    <div className="flex justify-center bg-gray-600 text-gray-200 select-none text-xl lg:text-2xl">

      {Object.entries(requests).map(([key,{title,url}])=>(
        // console.log(key,title,url)
      <h1 onClick={()=>{router.push(`?genre=${key}`)}} key={key}className='cursor-pointer hover:text-white m-6 active:text-red-400'>{title}</h1>
      ))}
  
    </div>
  )
}

export default Navbar