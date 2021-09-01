import {Link,useParams,useHistory} from 'react-router-dom';
import UseFetch from './UseFetch'
const BlogPage = () => {
    const { id }  = useParams()
    const url = `http://localhost:8000/data/${id}`
    const { data:blogs, isPending, isError } = UseFetch(url)
    const history = useHistory()
    const handleDelete = () => {
          fetch(url, {
              method: 'DELETE'
          })
              .then(() => {
              history.push('/')
          })
      }
  
   
    return (
        
        <div className="BlogPage">
            <div className="row">
            {isPending && <h1>Loading..</h1>}
            {isError && <h1>{isError}</h1>}
                <div className="col">
                    <h1>{blogs.title}</h1>
                </div>
                <div className="col">
                    <h3>{blogs.blog}</h3>
                </div>
                <div className="option">
                    <Link className="button" to="/">Kembali</Link>
                    <div className="icon">
                        <Link to={"/edit-blog/" + blogs.id} >
                        <img src="/icofont/myIcon/9256664211560147103-128.png" alt=""/>
                        </Link>
                        <span>
                        <img src="/icofont/myIcon/7460847501536572528-128.png" alt="" onClick={ () => handleDelete(blogs.id)}/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default BlogPage;