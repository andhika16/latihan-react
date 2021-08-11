import {useLocation,Link} from 'react-router-dom';
const BlogPage = () => {

    const { state} = useLocation()

    return (
        <div class="BlogPage">
            <div class="page-title">
                <p>id : {state.blogs.id}</p>
                <h1>{state.blogs.title}</h1>
            </div>
            <div class="page-blog">
                <h1>{state.blogs.blog}</h1>
            </div>
            <Link to="/" ><h2>Kembali</h2></Link>
        </div>
     );
}
 
export default BlogPage;