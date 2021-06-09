import {FaTimes} from 'react-icons/fa';

const Task = ({ task , onDelete, onToggle}) => {
    return ( 
        <div className='task'
            onDoubleClick={() => onToggle(task.id)}
          
        >
            <h3>My task <FaTimes style={taskStyle}   onClick={() => onDelete(task.id)}/></h3>
            <p>{task.text}</p>
            <p>{task.day}</p>
        </div>
     );
}
 
const taskStyle = {
    color :  'red',
    cursor : 'pointer'
}


export default Task;
