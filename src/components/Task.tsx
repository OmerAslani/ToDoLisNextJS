
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Task = () => {
    return(
        <li className='w-full h-14 flex items-center pl-4 border-b-2 border-gray-500  justify-between'>Task 1
        <div className="">
        <FontAwesomeIcon className="pr-2 text-xl hover:text-2xl"
          icon={faPenToSquare}     
        />
        <FontAwesomeIcon className="pr-2 text-xl hover:text-2xl"
          icon={faTrash}
        />
        </div>
        </li>
    )
}