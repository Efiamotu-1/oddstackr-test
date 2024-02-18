import React from 'react'
import { useUsers } from '../contexts/UsersContext'
import Verified from '../assets/Vector.png'


function Project() {

    const {users} = useUsers()
  return (
    <div>
        <div className='grid grid-cols-3 gap-1 items-center text text-[#808080]'>
            <div className=''>Project | Price</div>
            <div className='justify-self-start'>RepT Price</div>
             <div className='justify-self-center'></div>  
        </div>

        {users.slice(7).map((user) => (
            <div key={user.id} className=' md:text-lg grid grid-cols-3 gap-5 items-center p-1 border-b border-stone-300 cursor-pointer'>
            <div className='flex gap-1'>
              <div className='text-[#4D4D4D] text flex gap-1 items-center'>
              <p>
                {user.username} 
              </p> 
              {user.address.zipcode.length > 5 && <p> <img src={Verified} alt="verified icon" className='w-[10px]' /> </p>}
              </div>
            </div>
            <div className='justify-self-start text-[#00990F] text'>~${user.address.zipcode.split('-')[0]}K</div>
            
            <div className='justify-self-end flex flex-col md:flex-row md:gap-5 items-center text-[#00990F] text font-bold'>
              <div className='btn font-normal rounded-full text text-[#EEE5FF] px-4 md:px-8 bg-[#5404FF] flex items-center gap-1'>
                <p>Edit</p>
              </div>
            </div>
        </div>
        ))}

        <button className='btn text text-[#EEE5FF] px-4 md:px-8 bg-[#5404FF] my-5'>Create Project</button>
    </div>
  )
}

export default Project