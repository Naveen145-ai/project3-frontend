import { Link } from 'react-router-dom';

export default function ProductCard({disease}) {

     return  <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                <div className="card p-3 rounded">
                    <img
                        className="card-img-top mx-auto"
                        src={disease.images[0].image}
                    />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">
                        <Link to={"/disease/"+disease._id}>{disease.name}</Link>
                        </h5>
                        


                        
                        <Link to={`/disease/${disease._id}`} id="view_btn" className="btn btn-block">View Details</Link>
                    </div>
                </div>
            </div>

            
           }
