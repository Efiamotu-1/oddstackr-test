import React, { useReducer } from 'react'
import { useParams } from 'react-router-dom'
import { useUsers } from '../contexts/UsersContext'
import RepTOwned from './RepTOwned'
import ReptReceived from './ReptReceived'
import Project from './Project'
import Address from '../assets/address.png'

function UserProfile() {
    const {userId} = useParams()
    const {users} = useUsers()
    const user = users[userId - 1]

    const initialState = {
        reptOwned: true,
        reptReceived: false,
        project: false
    }

    function tabReducer(state, action) {
        switch(action.type) {
            case 'showOwned':
                return {...state, reptOwned: true, reptReceived: false, project: false}
            case 'showReceived':
                return {...state, reptOwned: false, reptReceived: true, project: false}
            case 'showProject':
                return {...state, reptOwned: false, reptReceived: false, project: true}
            default:
                return state    
        }
    }

    const [{reptOwned, reptReceived, project}, dispatch] = useReducer(tabReducer, initialState)

  return (
    <div className='my-5'>
        <div className='flex gap-2 justify-center items-center my-3'>
            <p className=''>{user?.email}</p>
            <img src={Address} alt="address icon" className='w-[15px] h-[15px]'/>
        </div>
         <div className='flex gap-2 justify-center'>
            <div className='flex flex-col items-end'>
                <p className='text-[#00990F] font-bold'>{user.id}</p>
                <p className='text text-[#808080]'>Number of RepT Held</p>
            </div>
            <div className='border-r-2 border-stone-300'></div>
            <div>
                <p className='text-[#00990F] font-bold'>~${user.address.zipcode.split('-')[0]}</p>
                <p className='text text-[#808080]'>Total RepT value</p>
            </div>
        </div>
        <ul className='flex gap-5 text-[10px] md:text-[14px] border-b border-stone-200 pb-1 text-[#808080] my-5 font-bold'>
            <li onClick={() => dispatch({type: 'showOwned'})}>RepT owned</li>
            <li className='hover:text-[#5404FF] hover:underline hover:underline-offset-8' onClick={() => dispatch({type: 'showReceived'})}>RepT received</li>
            <li className='hover:text-[#5404FF] hover:underline hover:underline-offset-8' onClick={() => dispatch({type: 'showProject'})}>Project owned</li>
        </ul>

        {reptOwned && <RepTOwned />}
        {reptReceived && <ReptReceived />}
        {project && <Project />}
    </div>
  )
}

export default UserProfile