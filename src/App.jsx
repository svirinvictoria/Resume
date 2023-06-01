import './App.css';
import rating_4 from './images/rating_4.png';
import rating_5 from './images/rating_5.png';
import rating_3 from './images/rating_3.png';
import right_arrow from './images/right_arrow.png';

function App() {
  return (
    <div className='container'>

        <div className="personal_data">
          
          <p className="name">Victoria Svirin</p>
          <div className="photo">
            <img className='photo_img' src="https://media.licdn.com/dms/image/C5603AQHOZmDQ74Eo6Q/profile-displayphoto-shrink_100_100/0/1517477798361?e=1691020800&v=beta&t=5PAHWdsibP6eAIwEyfI8xASmMpQUvlYaXP0MolBZMm0" alt="Photo" />
          </div>
          <div>

          </div>
         
          <div className="info">
              <p className="heading">Personal</p>
            
              <p className='house'>
              <span className='after_icon'>Jütlandring 6, Hamburg</span></p>
              <p className='mobile'>
                <span className='after_icon'>+4915906461496</span></p>
              <p className='email'>
                <span className='after_icon'>svirin.victoria@gmail.com</span>
                </p>
          </div>
          <hr className='line_left'></hr>

          <div className="info">
              <p className="heading">Programming Languages</p>
              <div>HTML</div>
              <div>CSS</div>
              <div>JavaScript </div>
              <div>React</div>
          </div>
          <hr className='line_left'></hr>

          <div className="info">
              <p className="heading">Personal Skills</p>
              <div>Communication Skills</div>
              <div>Analithical skills</div>
              <div>Responsibility</div>
              <div>Purposefulness</div>
          </div>
          <hr className='line_left'></hr>

          <div className="info">
              <p className="heading">Languages</p>
              <div className='rating_home'>  
                <div className='ger give_width'>
                  <span className='after_icon'>German</span>
                  </div>
                <div> 
                  <img className='rating_star' src={rating_4} alt="4 stars" />
                </div>
              </div>
              <div className='rating_home'>  
                <div className='eng give_width'>
                <span className='after_icon'>English</span></div>
                <div> 
                  <img className='rating_star' src={rating_4} alt="4 stars" />
                </div>
              </div>

              <div className='rating_home'>  
                <div className='rus give_width'>
                <span className='after_icon'>Russian</span></div>
                <div> 
                  <img className='rating_star' src={rating_5} alt="5 stars" />
                </div>
              </div>
              <div className='rating_home'>  
                <div className='heb give_width'>
                <span className='after_icon'>Hebrew</span>
                  </div>
                <div> 
                  <img className='rating_star' src={rating_5} alt="5 stars" />
                </div>
              </div>

          </div>
          <hr className='line_left'></hr>
      </div>

    <div className='description'> 
      <div className="experience">
        <p className='heading heading_prof'>
           Motivation
        </p>
         
          <hr className='line'></hr>
          <div className="exp-text">
            <span>
            I decided to change my profession to a software developer since I have relocated to Germany from
Israel with my family 2 years ago. During the Corona lockdowns, I have used the opportunity for
online learning. I started to learn software development, based on web front-end technologies, using
the courses of Udemy.com. I have already developed a couple of projects as part of my educational
process and I would like to present them during the interview. I am a self-starter, organized and
motivated person with high attention to detail and good communication skills. I am eager to learn
more and improve my professional skills and am open to studying and learning on the job.
            </span>
            
          </div>  
          
        <div className='experience'> 
          <p className='heading heading_prof'>Professional Experience </p></div>
          <hr className='line'></hr>
          <p className='heading_prof heading_org'>
          Bar-Ilan University, Ramat-Gan, Israel  ||  2013-2020
          </p>
          <div className="exp-text">
            <p>Vice Chair - Department of Music</p>
              As vice-chair of the department, my responsibilities included seeing the big picture of
              the department at all times, lead the staff members and take care of the students’
              ongoing needs. I also organized the academic schedule, taking into account all staff
              members’ needs and restrictions. During my time with the department, we achieved the
              certificate of excellence 3 times.
              As part of my work, I was chosen to support a development team to build and apply a
              new Main Frame system for the whole organization. As a team member, I prepared
              characteristics of the new system, tested the first versions, liaised with key stakeholders
              and was responsible to support other users since the first release.
              Furthermore, I was responsible for the department’s documentation, working with ERP,
              MF, different academic and financial programs and systems.
              Additionally, I was responsible for the ongoing functioning of the office and its workers
              (total of 6 workers). I also took care of all financial issues in the department and
              sometimes with very challenging time schedules and tight organizational restrictions.
              Moreover, I was in charge of the department’s site, updating the content and checking
              for copyright issues.
          </div>
       
          <p className='heading_prof heading_org'>
          Genesis Philanthropy Group, Tel-Aviv, Israel  || 2009-2013          </p>
          <div className="exp-text">
            <p>Senior Project Manager</p>
          
            As a project manager in an international foundation, I was responsible mostly for the
            financial and administrative management of the projects supported by the foundation.
            As part of my job I performed ongoing monitoring and analyzing of project
            implementation of the projects in Israel and abroad, including preparation of
            implementation and examination reports. As a senior manager, I took part in the
            evaluation team that examined new projects and recommended the CEO to support
            them.
            As part of project management, I took care of all the legal issues of project support,
            such as budget preparation and project documentation. I also worked closely with the
            foundation’s lawyer preparing the grant agreements.
            Moreover, I was responsible for the database administration, managing all the project
            documentation in a system, making it available for the staff abroad through the
            foundation platform.
          </div>
       
          <p className='heading_prof heading_org'>
          The Jewish Agency for Israel, Jerusalem, Israel  ||  2005-2009
          </p>
          <div className="exp-text">
            <p>Coordinator and Program Manager</p>
          
            As a program manager, I was responsible for the organization and coordination of short-
            term programs of the Jewish Agency in Israel. That included mostly programs for
            volunteering in IDF bases and professional seminars for non-Israeli citizens. At the
            same time, I coordinated and organized "Information days" and "Information forums" for
            different kinds of the target audience.
            An organizational work included logistic orders, content preparation, partnership with
            tour guides and group counselors, and also cooperation with IDF, Israeli authorities, and
            numerous Jewish Agency branches in Israel and abroad.
            I was also in charge of documentation preparation based on different programs and
            systems including ERP, CMS, MS and Office programs.
          </div>

          <div className='experience'> 
          <p className='heading heading_prof'>Professional Courses and skills </p></div>
          <hr className='line'></hr>
          <p className='heading_prof heading_org'>Courses and certificates</p>
            <div className='exp-text'>
              <img className='arrow_icon' src={right_arrow} alt="arrow" />
              <span >React- The Complete Guide</span></div>
            <div className='exp-text'> 
            <img className='arrow_icon' src={right_arrow} alt="arrow" />
            <span>The Complete 2023 Web Development Bootcamp</span></div>
            <div className=' exp-text'>
            <img className='arrow_icon' src={right_arrow} alt="arrow" /> <span>The Complete JavaScript Course 2022: From Zero to Expert!</span>
            </div>
            <div className=' exp-text'>
            <img className='arrow_icon' src={right_arrow} alt="arrow" /> 
            <span>Accelerated ES6 JavaScript Training</span>
            </div>
            <div className=' exp-text'>
            <img className='arrow_icon' src={right_arrow} alt="arrow" />
            <span>CSS - The Complete Guide 2022 (incl. Flexbox, Grid & Sass)</span></div>
            <div className=' exp-text'>
            <img className='arrow_icon' src={right_arrow} alt="arrow" />
            <span>Advanced CSS and Sass: Flexbox, Grid, Animations and More!</span></div>
            <div className=' exp-text'>
            <img className='arrow_icon' src={right_arrow} alt="arrow" />
            <span>HTML & CSS Course for the beginners</span></div>
      </div>

      <div className='experience'> 
          <p className='heading heading_prof'>Education </p>
          <hr className='line'></hr>
          <p className='heading_prof heading_org'>
          The Hebrew University, Jerusalem, Israel ||  2002-2005
          </p>
          <div className="exp-text">
            <p className=' heading_org'>Master of Arts (M.A.) </p>
            <p>
            Field Of Study: Peace studies and conflict resolution
              MA thesis: A mediator in a protracted conflict. The USA as a mediator in the IsraeliEgyptian peace process.
              As part of my studies, I learned about different kinds of conflicts, their reasons, and
              background, types of conflict management, and conflict processing. I specialized in
              international protracted conflicts. 
            </p>
          </div>
          
          <p className='heading_prof heading_org'>
          The Hebrew University, Jerusalem, Israel ||  1999-2002
          </p>
          <div className="exp-text">
            <p className=' heading_org'>Bachelor of Arts (B.A.) </p>
            <p>
            Field Of Study: International Relations and the Middle East
            Graduated with Honors in International Relations. Minored in Islam and the Middle East 
            </p>
          </div>
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

export default App;
