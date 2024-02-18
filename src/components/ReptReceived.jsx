import React from 'react'
import Verified from '../assets/Vector.png'
import DownArrow from '../assets/down-arrow.png'
import { useUsers } from '../contexts/UsersContext'
import { useModal } from '../contexts/ModalContext'

const RepTReceived = () => {
  const {users} = useUsers() 
  const {setShowModal} = useModal()
  return (
    <div>
        <div className='grid grid-cols-3 gap-1 items-center text-[11px] text-[#808080]'>
            <div className=''>Project | Price</div>
            <div className='justify-self-center'>RepT held</div>
             <div className='justify-self-center'>Value</div>  
        </div>

        {users.map((user) => (
          <div key={user.id} className=' md:text-lg grid grid-cols-3 gap-5 items-center p-1 border-b border-stone-300 cursor-pointer'>
            <div className='flex gap-1'>
              <div className='text-[#4D4D4D] text-[11px] flex gap-1 items-center'>
              <p>
                {user.name.split(' ')[1]} 
              </p> 
              {user.address.zipcode.length <= 5 && <p> <img src={Verified} alt="verified icon" className='w-[10px]' /> </p>}
              </div>
              <div className='border-r-2 border-stone-300'></div>
              <p className='text-[#CC9200] text-[11px]'>${user.address.zipcode.split('-')[0]}</p>
            </div>
            <div className='justify-self-center text-[#4D4D4D] text-[11px]'>{user.address.zipcode.split('-')[0].slice(3)}</div>
            <div className='justify-self-end flex flex-col md:flex-row md:gap-5 items-center text-[#00990F] text-[11px] font-bold'>
              <p>~${user.address.zipcode.split('-')[0]}K</p>
              <div onClick={() => setShowModal(show => !show)} className='btn font-normal rounded-lg text-[9px] md:text-[11px] text-[#EEE5FF] px-4 md:px-8 bg-[#5404FF] flex items-center gap-1'>
                <p>Actions</p>
                <img src={DownArrow} alt="down arrow" className='w-[10px]' />
              </div>
            </div>
        </div>
        ))}
        
    </div>
  )
}

export default RepTReceived