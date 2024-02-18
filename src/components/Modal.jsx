import React, { useState } from 'react'
import Close from '../assets/close.png'
import Bitcoin from '../assets/bitcoin.png'
import Verified from '../assets/Vector.png'
import ArrowUp from '../assets/ar-up.png'
import ArrowDown from '../assets/ar-dw.png'
import { useModal } from '../contexts/ModalContext'
import GreenIcon from '../assets/green-check.png'

function Modal() {
    const [showAdvanced, setShowAdvanced] = useState(false)
    const [showBuyModal, setShowBuyModal] = useState(true)
    const [showPaymentModal, setShowPaymentModal] = useState(false)
    const {setShowModal} = useModal()
  return (
    <div className='fixed top-0 left-0 w-full h-screen bg-[#0000004D] z-10'>
        <div className='fixed top-[50%] left-[50%] w-3/4 md:w-1/2 translate-x-[-50%] translate-y-[-50%] bg-white rounded-lg p-3'>
        {showBuyModal && 
        <div className='px-2 md:px-5 h-[500px] overflow-y-scroll'>
        <img src={Close} onClick={() => setShowModal(false)} alt="close-btn" className='fixed right-3 top-3 w-[15px] md:w-[25px]'/>
        <div className='text-center text-[#100033] p-5'>Buy Bitcoin's RepT</div>
        
        <div className='grid grid-cols-[10%_1fr]  gap-3'>
            <img src={Bitcoin} alt="bitcoin icon" />
            <div className='space-y-1'>
               <div className='flex gap-1 items-center'>
               <p className='text-[#100033] text-[18px] font-bold'>Bitcoin</p>
                  <img src={Verified} alt="verified icon" className='w-[15px] h-[15px]' />
               </div>
               <button className='btn rounded-lg bg-[#CCFFD1] font-bold text-[#00990F] text'>RepT Price: $4,343</button>
               <p className='text-[9px] text-[#808080]'>Project royalty: 10%</p> 
            </div>
        </div>

        <div className='flex gap-1 my-3 items-center text-[9px] text'>
            <p>Amount in:</p>
            <ul className='flex gap-2 text-[#4D4D4D] text-[9px] text'>
                <li className='hover:font-bold hover:underline hover:underline-offset-8'>BNB</li>
                <li className='hover:font-bold hover:underline hover:underline-offset-8'>USD</li>
            </ul>
        </div>

        <div className='bg-stone-200 p-3 flex gap-5 text text-[#4D4D4D]'>
            <p>BNB</p>
            <div className='border-r-2 border-white'></div>
            <p>0</p>
        </div>

        <div className='rounded text bg-[#E5FFE8] p-3 space-y-3 my-3'>
            <div className='flex justify-between'>
                <p className='text-[#4D4D4D]'>You're exchanging</p>
                <p className='font-bold text-[#00990F]'>4 BNB | =$1,200 USD</p>
            </div>

            <div className='flex justify-between'>
                <p className='text-[#4D4D4D]'>You receive</p>
                <p className='text-[#00990F] font-bold'>2.11 Bitcoin RepT</p>
            </div>
        </div>

        <div className='rounded text bg-[#E5FFE8] p-3 my-3'>
            <p><strong>Bitcoin Project</strong> will receive 10% of your purchase as Project royalty</p>
        </div>

        
        {showAdvanced && 
        <div className='bg-[#EEE5FF] text text-[#4D4D4D] font-bold p-3 space-y-5'>
        <div className='flex items-center gap-5'>
            <p>Slippage tolerance</p>
            <div className='bg-white py-1 px-2'>0.5%</div>
        </div>

        <div className='flex items-center gap-5'>
            <p>Tx deadline (mins)</p>
            <div className='bg-white py-1 px-3'>30</div>
        </div>
    </div>
        }
        

        <div className='text-center space-y-[-14px]'>

        <button className='btn text text-[#EEE5FF] px-4 md:px-8 bg-[#5404FF] my-5' onClick={() => {
            setShowPaymentModal(true)
            setShowBuyModal(false)
        }}>Confirm Purchase</button>
        <div className='text text-[#4D4D4D] flex items-center justify-center gap-2' onClick={() => setShowAdvanced(show => !show)}>
            <p>Advanced settings</p>
            {showAdvanced ? 
            <img src={ArrowUp}  alt="arrow-up" className='w-[10px]'/> :
            <img src={ArrowDown} alt="arrow-down" className='w-[10px]' />  
            }
        </div>
        
        </div>

        </div>
        }

        {showPaymentModal && <div className='flex flex-col items-center gap-5'>
        <img src={Close} onClick={() => setShowModal(false)} alt="close-btn" className='fixed right-3 top-3 w-[15px] md:w-[25px]'/>
        <div className='text-[#100033] p-5'>Transfer successful</div>
        <img src={GreenIcon} alt="green-icon" />
        <button className='btn text text-[#EEE5FF] px-4 md:px-8 bg-[#5404FF] my-5'>View on BSC scan</button>
            </div>}
        </div>
    </div>
  )
}


export default Modal