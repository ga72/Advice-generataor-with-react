import './card.css';

const Card=(props)=>{
  

    return(
       
   <div className="container">
    <div className="row">
    <div className='col-md-3 m-auto my-5 '>
    <div className='product-card'>
   <h1>{props.image} </h1>
    <p>{props.tittle }</p>
    <p>{props.description}</p>
    <button className="btn btn-light">Learn More</button>
   </div>

    </div>

   </div>
    </div>
    )
}


export default Card;