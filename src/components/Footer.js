import './Section.css'

const Footer = () => {
    return (
        <>
            <footer id='footer'>
                <div className="row text-light">
                    <div className="col-sm-6 col-md-5 col-lg-3">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium dolore consectetur dicta ducimus sed Esse debitis illum nesciunt, architecto repudiandae ipsum quaerat autem rem optio dignissimos distinctio dolores labore temporibus perspiciatis.</p>
                    </div>
                    <div className="col-sm-6 col-md-5 col-lg-3">
                        <ul>
                            <h5 className="fw-bold">Menu</h5>
                            <li>Our Work</li>
                            <li>About</li>
                            <li>Blogs</li>
                            <li>Services</li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-5 col-lg-3">
                        <ul>
                        <h5 className="fw-bold">Services</h5>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-5 col-lg-3">
                        <ul>
                        <h5 className="fw-bold">Contact</h5>
                            <li>+1204343</li>
                            <li>@magicom</li>
                        </ul>
                    </div>
                    

                    </div>
            </footer>
        </>
     );
}
 
export default Footer;