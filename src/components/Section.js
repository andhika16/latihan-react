import './Section.css'
// import Sections from './Sections' 

const Section = ({title, img, text1, text2}) => {
    return (
        <div id="section" className="container text-center">
             <h1>{title}</h1>
            <div className="row">
                <div className="col-sm-3">                    
                    <img className="img-thumbnail" src={img} alt=""/>
                    <h6>{ text1}</h6>
                    <p>{ text2 }</p>
                </div>
                <div className="col-sm-3">
                    <img className="img-thumbnail" src={img} alt=""/>
                    <h6>{ text1}</h6>
                    <p>{ text2 }</p>
                </div>
                <div className="col-sm-3">
                    <img className="img-thumbnail" src={img} alt=""/>
                    <h6>{ text1}</h6>
                    <p>{ text2 }</p>
                </div>
            </div>
        </div>
     );
}
 
export default Section;