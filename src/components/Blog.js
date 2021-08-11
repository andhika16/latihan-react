import { Link } from 'react-router-dom';
// import BlogPage from './BlogPage';
const Blog = ({ blogs }) => {
    return ( 
        <>
            {blogs.map(blog =>
                <div className="card" key={blog.id}>  
                    <div className="title"><h2>{blog.title}</h2></div>
                    <div className="story"> <h4>{blog.blog}</h4> </div>

                    <Link className='read-more' to={{pathname:`/blog-page/${blog.id}`,state: {blogs:blog}}} > <h3>Read More</h3></Link>
                </div>
             )}
        </>
     );
}
 
export default Blog

