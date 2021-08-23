import Blog from "./Blog"
import UseFetch from './UseFetch'
import {useHistory} from 'react-router-dom'
const Home = ( ) => {
    const {data:blogs, isPending, isError } = UseFetch('http://localhost:8000/data')
    const history = useHistory()
    const handleClick = (id) => {
        fetch(`http://localhost:8000/data/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
            history.push('/')
        })
    }

    return (
            <div className="blog">
                {isPending && <h1>Loading...</h1>}
                    {blogs && <Blog blogs={blogs} handleDelete={ handleClick }/>}
                { isError && <h1>{ isError }</h1> }
            </div>
     );
}
 
export default Home;