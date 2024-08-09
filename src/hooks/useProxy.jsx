export function useProxy() {
  function renderPage(currentPage) {
    if (currentPage === "/en") {
      const englishVersion = englishText();
      return englishVersion;
    } else if (currentPage === "/de") {
      const germanVersion = germanText();
      return germanVersion;
    }
  }
  return { renderPage: renderPage };
}

const germanText = () => {
  return {
    name: "Victoria Svirin",
    personalTitel: "Persönlich",
    linkedin: "https://www.linkedin.com/in/victoria-svirin-3406546b/",
    linkedinTitle: "Mein Profil",
    portfolioTitle: "Portfolio",
    portfolio: [
      { title: "Vikiport", link: "https://vikiport-client.onrender.com/" },
      { title: "Vikiphoto", link: "https://viki-photo-client.onrender.com/" },
      { title: "Worldwise", link: "https://vika-worldwise-site.onrender.com/" },
      { title: "Popcorn", link: "https://vika-popcorn-site.onrender.com/" },
      { title: "Trillo", link: "https://vika-trillo-booking.onrender.com/" },
      { title: "Natours", link: "https://vika-natour-site.onrender.com/" },
    ],
    progLanguages: "Technologien",
    technology: [
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "SCSS", icon: "scss" },
      { name: "JavaScript", icon: "javascript" },
      { name: "React", icon: "reactjs" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "Node.js", icon: "node" },
      { name: "Mongo DB", icon: "mongoDb" },
    ],
    personalSkills: "Fähigkeiten",
    skillsCommunication: "Kommunikationsfähigkeit",
    skillsAnalytical: "Analytische Fähigkeiten",
    skillsResponsibility: "Verantwortung",
    skillsPurpose: "Zielstrebigkeit",
    languages: "Sprachen",
    langGerm: "Deutsch",
    langEng: "Englisch",
    langRus: "Russisch",
    langHeb: "Hebräisch",
    motivationTitle: "Motivation",
    motivationText: `Ich habe entscheidet, meinen Beruf zum Softwareentwickler zu wechseln, da ich in 2020 mit
            meiner Familie aus Israel nach Deutschland gezogen bin. Während der Corona-Lockdowns habe ich
            die Möglichkeit zum Online-Lernen genutzt. Ich fing an, Softwareentwicklung zu lernen, basierend auf
            Web-Frontend-Technologien, mit den Kursen von Udemy.com. Ich habe bereits einige Projekte im
            Rahmen meines Bildungsprozesses entwickelt und kann ich gerne sie während des Interviews
            vorstellen. Als inspirierte Person möchte ich immer mehr lernen und meine beruflichen Fähigkeiten
            verbessern, also setze ich mein Studium fort.`,
    BiProfOrg: "Bar-Ilan Universität, Ramat-Gan, Israel  ||  2013-2020",
    BiProfTitle: "Stellvertretender Vorsitzender - Musikabteilung",
    BiProfDesc: ` Als stellvertretender Vorsitzender der Abteilung, zu meinen Aufgaben gehörte es,
            jederzeit das Gesamtbild der Abteilung zu sehen, sich um die Mitarbeiter zu kümmern
            sowie die laufenden Bedürfnisse der Studenten. Ich organisierte auch den
            akademischen Zeitplan unter Berücksichtigung der Bedürfnisse und Einschränkungen
            aller Mitarbeiter. Während meiner Arbeitszeit hat die Abteilung das Certificate of
            Excellence 3 mal erreicht.
            Im Rahmen meiner Arbeit wurde ich ausgewählt, ein Entwicklungsteam beim Aufbau
            und der Anwendung eines neuen Hauptrahmensystems für die gesamte Organisation
            zu unterstützen. Als Teammitglied bereitete ich Merkmale des neuen Systems vor,
            testete die ersten Versionen und war seit dem ersten Release für die Unterstützung
            anderer Benutzer verantwortlich.
            Darüber hinaus war ich für die Dokumentation der Abteilung verantwortlich und
            arbeitete mit ERP, MF, verschiedenen akademischen und finanziellen Programmen und
            Systemen.
            Darüber hinaus war ich für das laufende Funktionieren des Büros und seiner Mitarbeiter
            (insgesamt 6 Mitarbeiter) verantwortlich. Ich kümmerte mich auch um alle finanziellen
            Angelegenheiten in der Abteilung und manchmal mit sehr herausfordernden Zeitplänen
            und engen organisatorischen Einschränkungen.
            Darüber hinaus war ich verantwortlich für die Website der Abteilung, die Aktualisierung
            des Inhalts und die Überprüfung auf Urheberrechtsfragen.`,
    GenProfOrg: "GENESIS PHILANTHROPY GROUP, TEL-AVIV, ISRAEL || 2009-2013",
    GenProfTitle: "Senior Projektmanagerin",
    GenProfDesc: `Als Projektmanagerin in einer internationalen Stiftung war ich vor allem für die
            finanzielle und administrative Abwicklung der von der Stiftung geförderten Projekte
            verantwortlich. Im Rahmen meiner Tätigkeit führte ich die laufende Überwachung und
            Analyse der Projektumsetzung der Projekte in Israel und im Ausland durch,
            einschließlich der Erstellung von Umsetzungs- und Prüfungsberichten. Als Senior
            Managerin war ich Teil des Evaluierungsteams, das neue Projekte untersuchte und
            dem CEO empfahl, sie zu unterstützen.
            Im Rahmen des Projektmanagements kümmerte ich mich um alle rechtlichen Fragen
            der Projektbegleitung, wie Budgeterstellung und Projektdokumentation. Ich habe auch
            eng mit dem Anwalt der Stiftung zusammengearbeitet, um die
            Finanzhilfevereinbarungen vorzubereiten.
            Darüber hinaus war ich für die Datenbankadministration verantwortlich, verwaltete die
            gesamte Projektdokumentation in einem System und stellte sie den Mitarbeitern der
            Stiftung im Ausland zur Verfügung.`,
    JafiProfOrg:
      "The Jewish Agency for Israel, Jerusalem, Israel  ||  2005-2009",
    JafiProfTitle: "Coordinator and Program Manager",
    JafiProfDesc: `Als Programmmanagerin war ich für die Organisation und Koordination von
            Kurzzeitprogrammen der Jewish Agency in Israel verantwortlich. Dazu gehörten vor
            allem Programme für Freiwilligenarbeit in IDF-Stützpunkten und professionelle
            Seminare für nicht-israelische Bürger. Gleichzeitig koordinierte und organisierte ich
           Informationstage und Informationsforen für verschiedene Zielgruppen.
            Eine organisatorische Arbeit umfasste logistische Aufträge, inhaltliche Vorbereitung,
            Partnerschaft mit Reiseleitern und Gruppenberatern sowie die Zusammenarbeit mit der
            IDF, israelischen Behörden und zahlreichen Niederlassungen der Jewish Agency in
            Israel und im Ausland.
            Ich war auch für die Dokumentationsvorbereitung auf Basis verschiedener Programme
            und Systeme verantwortlich, darunter ERP-, CMS-, MS- und Office-Programme.`,
    professionalCourses: "Professionelle Kurse und Fähigkeiten ",
    courses: "Kurse und Zertifikate",
    courseReact: "React- The Complete Guide",
    courseWeb: "The Complete 2023 Web Development Bootcamp",
    courseJS: "Accelerated ES6 JavaScript Training",
    courseES6: "The Complete JavaScript Course 2022: From Zero to Expert!",
    courseCss: " CSS - The Complete Guide 2022 (incl. Flexbox, Grid & Sass)",
    courseAdvancedCss:
      "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
    courseHtml: "HTML & CSS Course for the beginners",
    educationTitle: "Ausbildung",
    universityTitle1: " The Hebrew University, Jerusalem, Israel ||  2002-2005",
    MaDegree: "Master of Arts (M.A.)",
    MaDesc: `Studienrichtung: Friedensforschung und Konfliktlösung
            MA thesis: Ein Mediator in einem langwierigen Konflikt. Die USA als Vermittler im
            israelisch-ägyptischen Friedensprozess.
            Im Rahmen meines Studiums lernte ich verschiedene Arten von Konflikten, ihre
            Ursachen und Hintergründe, Arten des Konfliktmanagements und der
            Konfliktverarbeitung kennen. Ich habe mich auf internationale langwierige Konflikte
            spezialisiert.`,
    universityTitle2: " The Hebrew University, Jerusalem, Israel ||  1999-2002",
    BaDegree: "Bachelor of Arts (B.A.)",
    BaDesc: `Studienrichtung: Internationale Beziehungen und Naher Osten
        Abschluss mit Auszeichnung in Internationalen Beziehungen. Minored im Islam und im
        Nahen Osten.`,
  };
};

const englishText = () => {
  return {
    name: "Victoria Svirin",
    personalTitel: "Personal",
    linkedin: "https://www.linkedin.com/in/victoria-svirin-3406546b/",
    linkedinTitle: "My Profile",
    portfolioTitle: "Portfolio",
    portfolio: [
      { title: "Vikiport", link: "https://vikiport-client.onrender.com/" },
      { title: "Vikiphoto", link: "https://viki-photo-client.onrender.com/" },
      { title: "Worldwise", link: "https://vika-worldwise-site.onrender.com/" },
      { title: "Popcorn", link: "https://vika-popcorn-site.onrender.com/" },
      { title: "Trillo", link: "https://vika-trillo-booking.onrender.com/" },
      { title: "Natours", link: "https://vika-natour-site.onrender.com/" },
    ],
    progLanguages: "Technologies",
    technology: [
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "SCSS", icon: "scss" },
      { name: "JavaScript", icon: "javascript" },
      { name: "React", icon: "reactjs" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "Node.js", icon: "node" },
      { name: "Mongo DB", icon: "mongoDb" },
    ],
    personalSkills: "Personal Skills",
    skillsCommunication: "Communication Skills",
    skillsAnalytical: "Analytical skills",
    skillsResponsibility: "Responsibility",
    skillsPurpose: "Purposefulness",
    languages: "Languages",
    langGerm: "German",
    langEng: "English",
    langRus: "Russian",
    langHeb: "Hebrew",
    motivationTitle: "Motivation",
    motivationText: `I decided to change my profession to a software developer since I have relocated to Germany from
            Israel with my family at 2020. During the Corona lockdowns, I have used the opportunity for
            online learning. I started to learn software development, based on web front-end technologies, using
            the courses of Udemy.com. I have already developed a couple of projects as part of my educational
            process and I would like to present them during the interview. I am a self-starter, organized and
            motivated person with high attention to detail and good communication skills. I am eager to learn
            more and improve my professional skills and am open to studying and learning on the job.`,
    BiProfOrg: "Bar-Ilan University, Ramat-Gan, Israel  ||  2013-2020",
    BiProfTitle: "Vice Chair - Department of Music",
    BiProfDesc: ` As vice-chair of the department, my responsibilities included seeing the big picture of
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
              for copyright issues.`,
    GenProfOrg: "GENESIS PHILANTHROPY GROUP, TEL-AVIV, ISRAEL || 2009-2013",
    GenProfTitle: "Senior Project Manager",
    GenProfDesc: `As a project manager in an international foundation, I was responsible mostly for the
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
            foundation platform.`,
    JafiProfOrg:
      "The Jewish Agency for Israel, Jerusalem, Israel  ||  2005-2009",
    JafiProfTitle: "Coordinator and Program Manager",
    JafiProfDesc: `As a program manager, I was responsible for the organization and coordination of short-
            term programs of the Jewish Agency in Israel. That included mostly programs for
            volunteering in IDF bases and professional seminars for non-Israeli citizens. At the
            same time, I coordinated and organized "Information days" and "Information forums" for
            different kinds of the target audience.
            An organizational work included logistic orders, content preparation, partnership with
            tour guides and group counselors, and also cooperation with IDF, Israeli authorities, and
            numerous Jewish Agency branches in Israel and abroad.
            I was also in charge of documentation preparation based on different programs and
            systems including ERP, CMS, MS and Office programs.`,
    professionalCourses: "Professional Courses and skills ",
    courses: "Courses and certificates",
    courseReact: "React- The Complete Guide",
    courseWeb: "The Complete 2023 Web Development Bootcamp",
    courseJS: "Accelerated ES6 JavaScript Training",
    courseES6: "The Complete JavaScript Course 2022: From Zero to Expert!",
    courseCss: " CSS - The Complete Guide 2022 (incl. Flexbox, Grid & Sass)",
    courseAdvancedCss:
      "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
    courseHtml: "HTML & CSS Course for the beginners",
    educationTitle: "Education",
    universityTitle1: " The Hebrew University, Jerusalem, Israel ||  2002-2005",
    MaDegree: "Master of Arts (M.A.)",
    MaDesc: `Field Of Study: Peace studies and conflict resolution
            MA thesis: A mediator in a protracted conflict. The USA as a mediator in the IsraeliEgyptian peace process.
            As part of my studies, I learned about different kinds of conflicts, their reasons, and
            background, types of conflict management, and conflict processing. I specialized in
            international protracted conflicts. `,
    universityTitle2: " The Hebrew University, Jerusalem, Israel ||  1999-2002",
    BaDegree: "Bachelor of Arts (B.A.)",
    BaDesc: `Field Of Study: International Relations and the Middle East
        Graduated with Honors in International Relations. Minored in Islam and the Middle East `,
  };
};
