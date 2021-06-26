import { SectionOne, SecondSection, ThirdSection } from './Page/Data';
import './Section.css'
const Sections = () => {
    return ( 
        <>
                <div id="section" className="container text-center">
                    <h1>How It Works</h1>
                    <div className="row">       
                        {
                            SectionOne.map(card =>    
                            <div key={card.id} className="col-md-4">                    
                                <i className={card.icons}></i>
                                <h3 className="text-bold">{ card.textsTitle }</h3>
                                <p>{ card.texts }</p>
                            </div>
                    )
                        }
                    </div>
                </div>
                <div id="section2" className="container">
                    <h1 className="text-center">Top Properties</h1>
                    <div className="row">
                        <p className='wrap-text text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae est eveniet dolorem. Nihil reprehenderit exercitationem inventore autem et incidunt cumque.</p>
                        {
                            SecondSection.map(e =>
                                <div key={e.id} className="col-sm-3 col-md-4 col-lg-4 mt-5">
                                   <div className="card shadow-sm"  >
                                        <img src={e.image} className="card-img-top"  alt=""/>
                                    </div>
                                    <div className="card-body shadow-lg" style={{width : '18rem'}}>
                                        <h5 className="card-title">{e.textsTitle}</h5>
                                        <p className="card-text text-muted">{e.texts}</p>
                                        <p className="card-text">{e.price}</p>
                                        <a href="/#" className="btn btn-success" >Buy Now</a>
                                       
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div id="section3" className="container">
                    <h1 className="text-center">Meet Our Agent</h1>
                    <div className="row ">
                        <p className='wrap-text text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae est eveniet dolorem. Nihil reprehenderit exercitationem inventore autem et incidunt cumque.</p>
                        {
                            ThirdSection.map(e =>
                                <div key={e.id} className="col-sm-7 col-md-4 col-lg-4 mt-5">
                                <div className="card" >
                                        <div className="image">
                                            <img src={e.image} className="card-img-top" alt="..." />
                                        </div>
                                    <div className="card-body text-center m-5">
                                        <h5 className="card-title ">{e.Name}</h5>
                                            <p className="card-text ">{e.Position}</p>
                                            <i className="m-1 icofont-2x icofont-ui-message"></i>
                                            <i className="m-1 icofont-2x icofont-facebook"></i>
                                            <i className="m-1 icofont-2x icofont-instagram"></i>
                                            <i className="m-1 icofont-2x icofont-twitter"></i>
                                    </div>
                                </div>
                                </div>
                            )
                        }
                    </div>
                </div>
        </>
     );
}
 
export default Sections;



  