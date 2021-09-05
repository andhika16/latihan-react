import UseFetch from './UseFetch'
import {Link} from 'react-router-dom'
const Home = ( ) => {
    const {data:blogs, isPending, isError } = UseFetch('http://localhost:8000/posts?userId=1')
    
    return (
        <div className="blog">
            {isPending && <h1>Loading...</h1>}
            { isError && <h1>{ isError }</h1> }
            {blogs.map(blog =>
                <Link className="card" to={"/blog-page/" + blog.id} key={blog.id}>
                {isPending && <h1>Loading..</h1>}
                    {isError && <h1>{isError}</h1>}
                        <div className="title">
                            <h1>{blog.title}</h1>
                        </div>
                        {/* <div className="story">
                            <h4>{blog.body}</h4>
                        </div> */}
                    </Link>

                )}
            </div>
     );
}
 
export default Home;