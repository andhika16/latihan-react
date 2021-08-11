import Blog from "./Blog"
const Home = ({blogs, handleBlogPage}) => {
 
    return (

        <>
            <div className="blog">
                <Blog blogs={blogs} handleBlogPage={handleBlogPage} />
            </div>
            
        </>
     );
}
 
export default Home;