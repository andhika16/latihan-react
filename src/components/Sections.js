import { SectionOne , SecondSection} from './Page/Data';
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
                <div id="section2" className="container text-center">
                    <h1>Top Properties</h1>
                    <div className="row">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae est eveniet dolorem. Nihil reprehenderit exercitationem inventore autem et incidunt cumque.</p>
                        {
                            SecondSection.map(e =>
                                <div key={e.id} className="col-md-4">
                                    <i className={e.image}></i>
                                    <h3 className="text-bold">{ e.textsTitle }</h3>
                                    <p>{ e.texts }</p>
                                </div>
                            )
                        }
                    </div>
                </div>
        </>
     );
}
 
export default Sections;