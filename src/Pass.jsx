import React, { useCallback, useEffect } from 'react'
import { useState } from 'react'

export default function Pass() {

  const [length,setLength] = useState(8);
  const [numbers, chooseNumbers] = useState(true);
  const [chars, chooseChars] = useState(false);
  const [password,setPassword] = useState("PassWord");

  const generateRandomString = useCallback(() => {
    let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomString = '';
    numbers ? characters+='0123456789' : null;
    chars ? characters+='&*@$:,${}!#-."?;' : null;

    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters[randomIndex];
    }
    
    setPassword(randomString);
  }, [length,numbers,chars]
)

 useEffect(()=>generateRandomString(),[length,numbers,chars]) 



  return (
    <div className='w-[60%] mx-auto bg-gray-700 rounded-xl mt-20 p-5 flex flex-col'>
        <div className='flex justify-center h-12'>
            <input type="text" className='w-[80%] bg-white rounded-l-lg px-2 text-xl font-normal text-orange-500' value={password} disabled />
            <button className='bg-blue-700 w-[20%] rounded-r-lg text-white text-2xl'> Copy </button>
        </div>
        <div className=' mt-8 flex gap-1'>
            <input type="range" min="6" max="28" value={length} onChange={(e)=>(
              setLength(e.target.value)
               
              )} />
            <h1 className='ml-1 text-orange-600 text-xl'>Length</h1>
            <input className='ml-2' type="checkbox" id='number' name='number' defaultChecked={numbers} onClick={()=>chooseNumbers(prev=>!prev)} />
            <label htmlFor="number" name="numbers" className=' text-orange-600 text-xl'>Numbers</label>
            <input className='ml-2' type="checkbox" id='chars' name='chars' defaultChecked={chars} onClick={()=>chooseChars(prev=>!prev)} />
            <label htmlFor="chars" name="numbers" className=' text-orange-600 text-xl'>Characters</label>
        </div>
    </div>
  )
}


