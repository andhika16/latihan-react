import UseFetch from './UseFetch'
import {Link} from 'react-router-dom'
const Home = ( ) => {
    const {data:blogs, isPending, isError } = UseFetch('http://localhost:8000/data')
    
    return (
        <div className="blog">
            {isPending && <h1>Loading...</h1>}
            { isError && <h1>{ isError }</h1> }
            {blogs.map(blog =>
            <div className="card">
                <Link to={"/blog-page/" + blog.id} key={blog.id}>
                        {isPending && <h1>Loading..</h1>}
                        {isError && <h1>{isError}</h1>}
                        <div className="title">
                            <h1>{blog.title}</h1>
                        </div>
                        <div className="story">
                            <h4>{blog.blog}</h4>
                        </div>
                    </Link>

            </div>
                )}
            </div>
     );
}
 
export default Home;