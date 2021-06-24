const Sections = ({title, img, text1, text2}) => {
    return ( 
        <>
            <h1>{title}</h1>
            <div className="row">
                <div className="col-sm-3">
                    <h6>{ text1}</h6>
                    <p>{ text2 }</p>
                    <img className="img-thumbnail" src={img} alt=""/>
                </div>
                <div className="col-sm-3">
                    <h6>{ text1}</h6>
                    <p>{ text2 }</p>
                    <img className="img-thumbnail" src={img} alt=""/>
                </div>
                <div className="col-sm-3">
                    <h6>{ text1}</h6>
                    <p>{ text2 }</p>
                    <img className="img-thumbnail" src={img} alt=""/>
                </div>
            </div>
        </>
     );
}
 
export default Sections;