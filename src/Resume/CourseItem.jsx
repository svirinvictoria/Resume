import right_arrow from '../images/common/arrow.png'; 
function CourseItem(props){

    return(
        <div className='exp-text'>
            <img className='arrow_icon' src={right_arrow} alt="arrow" />
            <span >{props.courseName}</span>
        </div>
    )
}

export default CourseItem;