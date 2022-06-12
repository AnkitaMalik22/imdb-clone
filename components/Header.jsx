import React from 'react'
import Image from 'next/image'
import HeaderIcon from './HeaderIcon'
import { HomeIcon,UserIcon,PhoneIcon,InformationCircleIcon } from '@heroicons/react/solid'
function Header() {
  return (
    <div className='bg-gray-700 text-gray-200 flex flex-col items-center  p-6 select-none sm:flex-row justify-between'>
<div className="flex mb-2 ">
    <HeaderIcon Icon={HomeIcon} title="HOME"/>
    <HeaderIcon Icon={UserIcon} title="ACCOUNT"/>
    <HeaderIcon Icon={PhoneIcon} title="CONTACT"/>
    <HeaderIcon Icon={InformationCircleIcon} title="ABOUT"/>
</div>
<Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/575px-IMDB_Logo_2016.svg.png' width={150} height={90}className='cursor-pointer active:brightness-110 '/>
    </div>
  )
}

export default Header