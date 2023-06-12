

function PersonalItem(props){

  return(
    <div className='rating_home'>  
      <div className= {'give_width'}>
        <img className="flag_location" src={props.flag}/>
        <span className='after_icon'>{props.lang}</span>
      </div>
      <div> 
        <img className='rating_star' src={props.rating} alt="rating" />
      </div>
    </div>

  )
}

export default PersonalItem;


