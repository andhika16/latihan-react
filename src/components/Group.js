import './Group.css'
import { options }from './Page/Data';

const Group = () => {
    
    const {location, type, range} = options
    return (
        <div className="row row-cols group text-dark ">
                <div className="col-md ">
                    <p>Location : </p>
                    <span>{location}</span>
                </div>
                <div className="col-md  ">
                    <p>Properties Type :</p>
                    <span>{type}</span>
                </div>
                <div className="col-md">
                    <p>Range : </p>
                <span className="me-5">{range}</span>
                <span className="align-item-center"><i className="icofont-search icofont-2x "></i></span>
                    
                </div>
                  
        </div>
    );
}
 
export default Group;