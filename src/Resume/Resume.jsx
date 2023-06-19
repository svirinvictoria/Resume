import './Resume.css';
import rating_4 from '../images/rating_4.png';
import rating_5 from '../images/rating_5.png';
// import right_arrow from '../images/right_arrow.png';
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { useProxy } from "../hooks/useProxy";
import foto from "../images/foto.jpg"
import Topic from './Topic';
import CourseItem from "./CourseItem";
import PersonalItem from "./Languages";
import flag_ger from "../images/favicon_flag_ger/favicon-16x16.png";
import flag_eng from "../images/favicon_flag_eng/favicon-16x16.png";
import flag_rus from "../images/favicon_flag_rus/favicon-16x16.png";
import flag_isr from "../images/favicon_flag_isr/favicon-16x16.png"



function Resume() {

  const [info, setInfo]= useState({});
  const location = useLocation();
  const proxy = useProxy();
  const navigate = useNavigate();

  useEffect(()=>{
    const personalInfo = proxy.renderPage(location.pathname);
    setInfo(personalInfo)
  }, [location.pathname]);

  function goToEnglishHandler(){
    navigate("/en")
  }

  function goToGermanHandler(){
    navigate("/de")
  } 

  return (
    <div className='container'>

        <div className="personal_data">
          
          <p className="name">{info.name}</p>
        
          <div className='change_view'>
            <div className='photo_frame'>
              <img className='photo_img' alt="" src={foto} />
            </div> 
            <div className="info change_personal">
              <p className="heading change_personal_title">{info.personalTitel}</p>
            
              <p className='house'>
              <span className='after_icon'>{info.address}</span></p>
              <p className='mobile'>
                <span className='after_icon'>{info.mobile}</span></p>
              <p className='email'>
                <span className='after_icon'>{info.email}</span>
              </p>
          </div>

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
             
             <PersonalItem flag={flag_ger} lang={info.langGerm} rating = {rating_4}/>
             <PersonalItem flag={flag_eng} lang={info.langEng} rating = {rating_4}/>
             <PersonalItem flag={flag_rus} lang={info.langRus} rating = {rating_5}/>
             <PersonalItem flag = {flag_isr} lang={info.langHeb} rating = {rating_5}/>

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
            <CourseItem courseName={info.courseReact} />
            <CourseItem courseName={info.courseWeb} />
            <CourseItem courseName={info.courseJS} />
            <CourseItem courseName={info.courseES6} />
            <CourseItem courseName={info.courseCss} />
            <CourseItem courseName={info.courseAdvancedCss} />
            <CourseItem courseName={info.courseHtml} />
      </div>

      <div className='experience'> 
          <p className='heading heading_prof'>{info.educationTitle} </p>
          <hr className='line'></hr>
          <Topic organization={info.universityTitle1} title={info.MaDegree} description={info.MaDesc}/>
          <Topic organization={info.universityTitle2} title={info.BaDegree} description={info.BaDesc}/>
        
          
       </div>    
        <footer>
          <div className='footer_style'>
            <div className='copy'>
              &copy; Svirin Victoria 2023
            </div>
             
        <div> <a href='https://favicon.io/'> Icons are taken from favicon</a>
         </div>
        <div><a href="https://www.flaticon.com/free-icons/rate" title="rate icons">Rate icons created by dmitri13 - Flaticon</a></div>
        <div><a href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">Arrow icons created by Freepik - Flaticon</a></div>
          </div>
       
       </footer>
       </div>
      
    </div>
  );
}

export default Resume;
