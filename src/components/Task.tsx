
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Task = () => {
    return(
        <li className='w-full h-14 flex items-center pl-4 border-b-2 border-gray-500  justify-between'>Task 1
        <div>
        <FontAwesomeIcon
          icon={faPenToSquare}     
        />
        <FontAwesomeIcon
          icon={faTrash}
        />
        </div>
        </li>
    )
}