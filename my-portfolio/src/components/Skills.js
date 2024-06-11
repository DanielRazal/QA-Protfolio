import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import colorSharp2 from "../assets/img/color-sharp2.png"
import SqlServer from "../assets/img/Sql.svg"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 500 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 499, min: 0 }, 
      items: 1,
    },
  };
  

  const skills = [
    { src: 'https://seeklogo.com/images/J/jira-logo-FD39F795A7-seeklogo.com.png', label: 'Jira' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Selenium_logo.svg', label: 'Selenium WebDriver' },
    { src: SqlServer, label: 'SQL Server' },
    { src: 'https://www.svgrepo.com/show/331488/mongodb.svg', label: 'MongoDB' },
    { src: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png', label: 'Postman' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg', label: 'Git' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Python_logo_51.svg', label: 'Python' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg', label: 'NodeJs' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg', label: 'C#' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', label: 'React' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg', label: 'Angular' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg', label: 'JavaScript' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg', label: 'Visual Studio Code' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Visual_Studio_2017_Logo.svg', label: 'Visual Studio' }
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <br /><br />
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
                arrows={true}
              >
                {skills.map((skill, index) => (
                  <div key={index} className="item d-flex flex-column align-items-center justify-content-center">
                    <img className='skillsImg'
                      src={skill.src}
                      alt={skill.label}
                    />
                    <h5 className="mt-2">{skill.label}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="ColorSharp" />
      <img className="background-image-right" src={colorSharp2} alt="ColorSharp2" />
    </section>
  )
}
