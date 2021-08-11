import {Link} from 'react-router-dom';




const Heading = () => {
    return ( 
            <header>
                <nav>
                    <div className="title">
                        <h1>Yuk Cerita</h1>
                    </div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blog-page">Ceritaku</Link></li>
                        <li><Link className="button" to="/create-blog">Buat Cerita</Link></li>
                    </ul>
                </nav>
            </header>
     );
}
 
export default Heading;