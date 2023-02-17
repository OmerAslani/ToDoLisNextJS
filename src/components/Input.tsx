


export const Input = () =>{
    return (
            <div className="w-full h-10 bg-white rounded-2xl flex focus-within:outline ">
              <input
                type="text"
                placeholder="Add task"
                className=" h-full rounded-2xl px-3 grow focus:outline-none "/>
              <button  className="h-full bg-primary rounded-2xl text-white capitalize px-6">
                Click me
              </button>
            </div>
            );
    
    
}