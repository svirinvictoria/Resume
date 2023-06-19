
function Topic(props){

    return(<div>
        <p className='heading_prof heading_org'>
        {props.organization}
        </p>
        <div className="exp-text">
          <p className="title-text">{props.title}</p>
            {props.description}
        </div>
    </div>
    )
}

export default Topic;