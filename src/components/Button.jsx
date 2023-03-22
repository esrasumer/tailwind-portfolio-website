import { useState } from 'react';
import './style.css';

const handleClick = () => {
  console.log('hello','ninjas')
}

function Button() {
  const[name,setName] = useState('mario')

  return (
    <div>
      {name}
      <button className='btn' onClick={() => setName('esra')}>click me</button>
      <button className='btn' onClick={handleClick}>click me1</button>
    </div>
  )
}

export default Button;