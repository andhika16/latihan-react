import Blog from "./Blog"
import UseFetch from './UseFetch'
const Home = ( ) => {
    const {data:blogs, isPending, isError } = UseFetch('http://localhost:8000/data')


    return (
            <div className="blog">
                {isPending && <h1>Loading...</h1>}
                   { blogs && <Blog blogs={blogs}  />} 
                { isError && <h1>{ isError }</h1> }
            </div>
     );
}
 
export default Home;