import './Resume.css';
import rating_4 from '../images/rating_4.png';
import rating_5 from '../images/rating_5.png';
import right_arrow from '../images/right_arrow.png';
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { useProxy } from "../hooks/useProxy";
import foto from "../images/foto.jpg"
import Topic from './Topic';



function Resume() {

  const [info, setInfo]= useState({});
  const location = useLocation();
  const proxy = useProxy();
  const navigate = useNavigate();

  useEffect(()=>{
    console.log(location.pathname);
    const personalInfo = proxy.renderPage(location.pathname);
    setInfo(personalInfo)
  }, [location.pathname]);

  function goToEnglishHandler(){
    navigate("/")
  }

  function goToGermanHandler(){
    navigate("/german")
  } 

  return (
    <div className='container'>

        <div className="personal_data">
          
          <p className="name">{info.name}</p>
          <div >
            <img className='photo_img' alt="" src={foto} />
          </div>
          <div>

          </div>
         
          <div className="info">
              <p className="heading">{info.personalTitel}</p>
            
              <p className='house'>
              <span className='after_icon'>{info.address}</span></p>
              <p className='mobile'>
                <span className='after_icon'>{info.mobile}</span></p>
              <p className='email'>
                <span className='after_icon'>{info.email}</span>
                </p>
          </div>
          <hr className='line_left'></hr>

          <div className="info">
              <p className="heading">{info.progLanguages}</p>
              <div>{info.html}</div>
              <div>{info.css}</div>
              <div>{info.js} </div>
              <div>{info.react}</div>
          </div>
          <hr className='line_left'></hr>

          <div className="info">
              <p className="heading">{info.personalSkills}</p>
              <div>{info.skillsCommunication}</div>
              <div>{info.skillsAnalytical}</div>
              <div>{info.skillsResponsibility}</div>
              <div>{info.skillsPurpose}</div>
          </div>
          <hr className='line_left'></hr>

          <div className="info">
              <p className="heading">{info.languages}</p>
              <div className='rating_home'>  
                <div className='ger give_width'>
                  <span className='after_icon'>{info.langGerm}</span>
                  </div>
                <div> 
                  <img className='rating_star' src={rating_4} alt="4 stars" />
                </div>
              </div>
              <div className='rating_home'>  
                <div className='eng give_width'>
                <span className='after_icon'>{info.langEng}</span></div>
                <div> 
                  <img className='rating_star' src={rating_4} alt="4 stars" />
                </div>
              </div>

              <div className='rating_home'>  
                <div className='rus give_width'>
                <span className='after_icon'>{info.langRus}</span></div>
                <div> 
                  <img className='rating_star' src={rating_5} alt="5 stars" />
                </div>
              </div>
              <div className='rating_home'>  
                <div className='heb give_width'>
                <span className='after_icon'>{info.langHeb}</span>
                  </div>
                <div> 
                  <img className='rating_star' src={rating_5} alt="5 stars" />
                </div>
              </div>

          </div>
          <hr className='line_left'></hr>
      </div>

    <div className='description'> 
    <button className='btn btn-ger' onClick={goToGermanHandler}> </button>
    <button className='btn btn-eng' onClick={goToEnglishHandler}></button>
      <div className="experience">
        <p className='heading heading_prof'>
           {info.motivationTitle}
        </p>
         
          <hr className='line'></hr>
          <Topic description={info.motivationText}/>
          
        <div className='experience'> 
          <p className='heading heading_prof'>Professional Experience </p></div>
          <hr className='line'></hr>
          <Topic organization={info.BiProfOrg} title = {info.BiProfTitle} description ={info.BiProfDesc}/>
          <Topic organization={info.GenProfOrg} title = {info.GenProfTitle} description ={info.GenProfDesc}/>
          <Topic organization={info.JafiProfOrg} title = {info.JafiProfTitle} description ={info.JafiProfDesc}/>
         
          <div className='experience'> 
          <p className='heading heading_prof'>{info.professionalCourses}</p></div>
          <hr className='line'></hr>
          
          <p className='heading_prof heading_org'>{info.courses}</p>
            <div className='exp-text'>
              <img className='arrow_icon' src={right_arrow} alt="arrow" />
              <span >{info.courseReact}</span></div>
            <div className='exp-text'> 
              <img className='arrow_icon' src={right_arrow} alt="arrow" />
              <span>{info.courseWeb}</span></div>
            <div className=' exp-text'>
              <img className='arrow_icon' src={right_arrow} alt="arrow" /> 
              <span>{info.courseJS}</span>
            </div>
            <div className=' exp-text'>
              <img className='arrow_icon' src={right_arrow} alt="arrow" /> 
              <span>{info.courseES6}</span>
            </div>
            <div className=' exp-text'>
              <img className='arrow_icon' src={right_arrow} alt="arrow" />
              <span>{info.courseCss}</span></div>
            <div className=' exp-text'>
              <img className='arrow_icon' src={right_arrow} alt="arrow" />
              <span>{info.courseAdvancedCss}</span></div>
            <div className=' exp-text'>
            <img className='arrow_icon' src={right_arrow} alt="arrow" />
            <span>{info.courseHtml}</span></div>
      </div>

      <div className='experience'> 
          <p className='heading heading_prof'>{info.educationTitle} </p>
          <hr className='line'></hr>
          <Topic organization={info.universityTitle1} title={info.MaDegree} description={info.MaDesc}/>
          <Topic organization={info.universityTitle2} title={info.BaDegree} description={info.BaDesc}/>
        
          
       </div>    
        <footer>
        Svirin Victoria 2023
        <div> <a href='https://favicon.io/'> Icons are taken from favicon</a>
         </div>
        <div><a href="https://www.flaticon.com/free-icons/rate" title="rate icons">Rate icons created by dmitri13 - Flaticon</a></div>
        <div><a href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">Arrow icons created by Freepik - Flaticon</a></div>
       </footer>
       </div>
      
    </div>
  );
}

export default Resume;
