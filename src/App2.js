import React, {useState} from 'react';
import './App.css'
import Todo from './components/todo'

/*function App(){
    let [counter, setCounter] =useState(0)
    const increaseCount =() => setCounter((counter)=>counter+1)
    const getBigger= (e)=> console.log(e.target.value)
    return (
        <main>
            <span onMouseEnter={()=>getBigger()}>{counter}</span>
            <br></br>
            <button onClick={increaseCount}>Increase Counter</button>
        </main>
    );
}*/
function App(){
    return(
        <div className='App'>
            <Todo></Todo>
        </div>
    )
}

export default App;
