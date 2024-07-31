import { useState } from 'react'
import { motion } from 'framer-motion'

const DSwitch = () => {
  const [selected, setSelected] = useState(true);

  return (
    <div className='flex flex-row items-center text-7xl font-cd font-extrabold gap-2'>
      <div 
        onClick={() => setSelected(!selected)}
        className='relative flex w-fit rounded-full bg-700 cursor-pointer hover:bg-700/75 transition-all'
        style={{ width: '10rem', height: '5rem' }}
      >
        <div
          className={`absolute inset-0 z-0 flex items-center p-2 ${
            selected ? 'justify-start' : 'justify-end'
          }`}
        >
          <motion.span
            layout
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            animate={{ backgroundColor: selected ? '#3b82f6' : '#8b5cf6' }}
            initial={{ backgroundColor: '#3b82f6' }}
            className='w-16 h-16 rounded-full flex items-center justify-center text-5xl text-white'
          >
            <span className='text-5xl text-white'>D</span>
          </motion.span>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: selected ? 5 : -5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        key={selected ? 'ESIGNER' : 'EVELOPER'}
        style={{ width: '25rem' }}
        className='overflow-hidden'
      >
        <motion.p 
          className={selected ? 'text-blue-500' : 'text-violet-500'}
        >
          {selected ? 'ESIGNER' : 'EVELOPER'}
        </motion.p>
      </motion.div>
    </div>
  )
}

export default DSwitch
