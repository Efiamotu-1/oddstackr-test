import React from 'react'
import ProfileCircle from '../assets/Profile-circles.png'
import Verified from '../assets/Vector.png'
import { useUsers } from '../contexts/UsersContext'
import { useNavigate } from 'react-router-dom'

function Holders() {

    const {users} = useUsers()
    const navigate = useNavigate()
  return (
    <div className='text'>
        <div className='grid grid-rows-[50%_1fr_1fr_1fr] justify-items-center h-[300px] w-[300px] p-[2rem] bg-white rounded-full m-auto my-[5rem] outline outline-offset-[20px] outline-1 outline-white outline-dashed'>
            <img src={ProfileCircle} alt="profile circle" className='w-[100px] h-[100px] m-auto' />
            <div className='flex gap-1 items-center'>
                <p className='text-[#100033] text-[28px] font-bold'>Polygon</p>
                <img src={Verified} alt="verified icon" className='w-[25px] h-[25px]' />
            </div>
            <p className='text-[#CC9200] font-bold mt-2'>$BAYC</p>
            <button className='btn bg-[#CCFFD1] font-bold text-[#00990F]'>Price: $4,343</button>
        </div>

        <div className='flex gap-2 justify-center'>
            <div className='flex flex-col items-end'>
                <p className='text-[#00990F] font-bold'>211</p>
                <p className='text text-[#808080]'>RepT Holders</p>
            </div>
            <div className='border-r-2 border-stone-300'></div>
            <div>
                <p className='text-[#00990F] font-bold'>145</p>
                <p className='text text-[#808080]'>RepT in circulation</p>
            </div>
        </div>

    <div className='my-[3rem] h-[200px] overflow-y-scroll'>

        <div className='grid grid-cols-3 gap-1 items-center p-1 font-bold'>
            <div className=''>Address</div>
            <div className='justify-self-center'>BAYC held</div>
             <div className='justify-self-end'>Market Value</div>  
        </div>
            {users ? users.map((user) => (
                <div key={user.id} onClick={() => navigate(`/user-profile/${user.id}`)} className='grid grid-cols-3 gap-5 items-center p-1 border-b border-stone-200 cursor-pointer'>
                    <div className='text-[#5404FF]'>{user.name}</div>
                    <div className='justify-self-center text-[#4D4D4D]'>{user.id}</div>
                    <div className='justify-self-end text-[#00990F] font-bold'>${user.address.zipcode.split('-')[0]}K</div>
                 </div>
            )) : <div className='text-center my-5'>Loading...</div>}
      </div>
                
            
    </div>
  )
}

export default Holders