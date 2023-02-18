
import React, { useState } from 'react';





export const Input = () =>{
    const addTask = () => {
        console.log(InputValue);
        setInputValue("");
    };
  

    const [InputValue, setInputValue] = useState("");
    return (
      
            <div className="w-full h-10 bg-white rounded-2xl flex focus-within:outline ">
              <input
                type="text"
                placeholder="Add task"
                value={InputValue   }
                onChange={(e) => setInputValue(e.target.value)}
                className=" h-full rounded-2xl px-3 grow focus:outline-none "/>
              <button  className="h-full bg-primary rounded-2xl text-white capitalize px-6"
              onClick={addTask}
              >
                Click me
              </button>
            </div>
            );
    
    
}