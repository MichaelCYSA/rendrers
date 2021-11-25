import './index.css';
import RenderCounter from './RenderCounter'
import { useState } from 'react';

function App() {
  
  const [count , setCount] = useState(0)

  return (
     <RenderCounter>
         <div className='container'>
              <h1>Score:  {count}</h1>
              <button 
                className={'button'} 
                onClick={() => setCount(prev => prev+1)}
              >
                ++++++++++
              </button>
              <button 
                className={'button'} 
                onClick={() => setCount(prev => prev-1)}
              >
                -------------
              </button>
         </div>
     </RenderCounter>
  );
}

export default App;
