import {Link,useParams} from 'react-router-dom';
import UseFetch from './UseFetch'
const BlogPage = () => {
    
    const { id }  = useParams()
    const { data:blogs,isPending,isError } = UseFetch(`http://localhost:8000/data/${id}`)
    return (
        <div className="BlogPage">
                {isPending && <h1>Loading..</h1>}
                    {isError && <h1>{isError}</h1>}
            <div className="page-title">
                <h1>{blogs.title}</h1>
            </div>

            <div className="page-blog">
                <h3>{blogs.blog}</h3>
            </div>
            <Link  className="back" to="/">Kembali</Link>
        </div>
     );
}
 
export default BlogPage;