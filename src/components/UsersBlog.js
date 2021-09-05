import UseFetch from './UseFetch';
import { Link } from 'react-router-dom';
const UsersBlog = () => {

    const { data: users, isPending, isError } = UseFetch(`http://localhost:8000/users`)
    return (
        <div className="row">
            {users.map(user => 
                <Link to={`/user/${user.id}`} className="col" key={user.id}>
                    <h1>{user.name}</h1>
                    <h3>{user.username}</h3>
                     
                </Link>
            )}
        </div>
     );
}
 
export default UsersBlog;