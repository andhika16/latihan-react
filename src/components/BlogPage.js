import {Link,useParams} from 'react-router-dom';
import UseFetch from './UseFetch'
const BlogPage = ({handleDelete}) => {
    
    const { id }  = useParams()
    const { data:blogs,isPending,isError } = UseFetch(`http://localhost:8000/data/${id}`)
    return (
        <div className="BlogPage">
            {isPending && <h1>Loading..</h1>}
            {isError && <h1>{isError}</h1>}
            <div class="row">
                <div class="col">
                    <h1>{blogs.title}</h1>
                    <div class="option-button">
                <button className="button" onClick={() => handleDelete(blogs.id)}>delete</button>
                <button className="button">edit</button>
                    </div>
                </div>
                <div class="col">
                <h3>{blogs.blog}</h3>
                </div>
                <Link  className="button" to="/">Kembali</Link>
            </div>
        </div>
     );
}
 
export default BlogPage;