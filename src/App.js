
import './App.css';
import React from 'react';
import Button from './components/Button';
import style from './assets/css/style.css';
import { useState } from 'react';

function App() {
const [count, setCount] = useState(0);

let incrementCount = () => {
  setCount(count + 1);
} ;

let decrementCount = () => {
  setCount(count - 1);
}

  return (
    <div className='app'>
      <div>
        <div className='count'>
        <h3>Count:</h3>
        <h1>{count}</h1>
        </div>
        <div className='buttons'>
        <Button title={"-"} action={decrementCount}></Button>
        <Button title={"+"} action={incrementCount}></Button>
        </div>
      </div>


    </div>
  );
}

export default App;





// <div>
// {users.map((user) => {
//   return (
//     <div
//       key={user.id}
//       className="item"
//       // onClick={() => onClickUser(user)}
//     >
//       {user.name}
//     </div>
//   );
// })}
// </div>