import { header } from './Page/Data';
import Navbar from './Navbar'
import './Heading.css';
import Group from './Group'
const Heading = () => {

    const {textTitle, textBig, img} = header

    return (
        <div className="headers">
            <div className="container">
            <Navbar />
            <div className="row text-white mt-5">
                <div className="col-sm-5 col-md-5 col-lg-5 mt-5">
                    <h1>{ textTitle }</h1>
                    <p>{textBig}</p>
                    <Group  />
                </div>
                <div className="col-sm-6 col-md-7 col-lg-6 col-lg-block justify-content-center">
                         <img className="img-fluid" src={img} alt="" /> 
                </div>
            </div>
        </div>
        </div>
    
     );
}
 





export default Heading;
