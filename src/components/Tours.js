import Card from "./Card";
import ThemeToggle from "./ThemeToggle";

function Tours({tours , removeTour}){
    return (
       
    

   <div className="container">
     <div className="main">
            <div className="title">
                <h2>A Little Part of Sawan</h2>  
            </div>
            <ThemeToggle/>
  </div>

            
            <div className="cards">
                    {
                        tours.map( (tour) => {
                            return (<Card key={tour.id} {...tour} removeTour={removeTour}></Card>);
                        })
                    }
             </div>
        </div>
        
    );
}

export default Tours;