import {useLocation,Link} from 'react-router-dom';
const BlogPage = () => {

    const { state} = useLocation()

    return (
        <div className="BlogPage">
            <div className="page-title">
                <h1>{state.blogs.title}</h1>
            </div>

            <div className="page-blog">
                <h3>{state.blogs.blog}</h3>
            </div>
            <Link  className="back" to="/">Kembali</Link>
        </div>
     );
}
 
export default BlogPage;