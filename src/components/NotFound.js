import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div class="not-found">
            <h1>Sorry</h1>
            <p>Page Not Found</p>
            <Link to="/">Back to home page</Link>
        </div>
     );
}
 
export default NotFound;