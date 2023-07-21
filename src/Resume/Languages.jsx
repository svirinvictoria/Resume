
import starfull from "../images/common/star-full.png";
import starempty from "../images/common/star-empty.png";

function Languages(props){

  const getRaiting = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<img key={i} className='rating_star' 
      src={
        (i < props.rating) ? starfull : starempty
      } alt="rating" />); 

    }
    return stars;
  }

  return(
    <div className='rating_home'>  
      <div className= {'give_width'}>
        <img className="flag_location" src={props.flag} alt="Flag"/>
        <span className='after_icon'>{props.lang}</span>
      </div>
      <div className="ratingBox"> 
        {getRaiting()}
      </div>
    </div>

  )
}

export default Languages;


