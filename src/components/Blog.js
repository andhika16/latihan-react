import { Link } from 'react-router-dom';
const Blog = ({blogs,isPending, isError}) => {
    return ( 
        <>
            {blogs.map(blog =>
                <div className="card" key={blog.id}>           
                    {isPending && <h1>Loading..</h1>}
                    {isError && <h1>{isError}</h1>}
                    <div className="title"><h2>{blog.title}</h2>
                        <Link to="#">
                            <img src="icofont/myIcon/7460847501536572528-128.png" alt="" style={{maxWidth:'20px'}}/>
                        </Link>
                    </div>
                    <div className="story"> <h4>{blog.blog}</h4> </div>
                    <div className="link">
                        <span>
                            <Link className='read-more' to={`/blog-page/${blog.id}`}> <h3>Read More</h3></Link>
                        </span>
                        <span>
                            <Link to="#"><img src="icofont/myIcon/9256664211560147103-128.png" alt="" style={{maxWidth:'20px'}}/></Link>
                        </span>
                    </div>
                </div>
             )}
        </>
     );
}
 
export default Blog

