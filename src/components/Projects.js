import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projImg1.jpg";
import projImg2 from "../assets/img/projImg2.jpg";
import projImg3 from "../assets/img/projImg3.jpg";
import meta4 from "../assets/img/4.png";
import meta5 from "../assets/img/5.jpg";
import meta6 from "../assets/img/6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Победитель олимпиады по математике",
      description: "Призер регионального этапа олимпиады по математике, 2023 год",
      imgUrl: projImg1,
    },
    {
      title: "Победитель олимпиады по информатике",
      description: "Победитель муниципального этапа олимпиады по информатике, 2022 год",
      imgUrl: projImg2,
    },
    {
      title: "Призер олимпиады по физике",
      description: "Призер городской олимпиады по физике, 2021 год",
      imgUrl: projImg3,
    },
    {
      title: "Победитель конкурса научных проектов",
      description: "Лучший проект в номинации STEM-технологии, 2023 год",
      imgUrl: projImg1,
    },
    {
      title: "Призер олимпиады по химии",
      description: "3-е место на региональной олимпиаде по химии, 2022 год",
      imgUrl: projImg2,
    },
    {
      title: "Участник международного конкурса",
      description: "Участник международного конкурса научных работ, 2023 год",
      imgUrl: projImg3,
    },
  ];
  

  const projects2 = [
    {
      title: "Метод визуализации",
      description: "Цель методики – развитие аналитического и критического мышления.",
      imgUrl: meta4,
    },
    {
      title: "Проектный метод",
      description: "Использование графиков, диаграмм, схем и анимаций для объяснения абстрактных понятий.",
      imgUrl: meta5,
    },
    {
      title: "Метод проблемного обучения",
      description: "Обучение через реализацию практических проектов.",
      imgUrl: meta6,
    },
    
  ];
  const projects3 = [
    {
      title: "Тест по алгебре",
      description: "https://03xutofk.forms.app/test-osnovy-algebry",
      icon: "Calculator",
    },
    {
      title: "Конкурс",
      description: "https://forms.yandex.ru/u/67952e78068ff0cfe51e30ef/",
      icon: "Ruler",
    },
    {
      title: "Тест по геометрии",
      description: "https://docs.google.com/forms/d/e/1FAIpQLSf0o_lVlzxHkQlBkBZRJ5VEV9-gkpZcPDfBeebYIgNnPr4m9A/viewform?usp=dialog",
      icon: "Monitor",
    },
    {
      title: "Тест по теории вероятности",
      description: "https://forms.yandex.ru/u/679534ee90fa7b51071c1657/",
      icon: "FileText",
    },
  ];
  


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Достижения</h2>
                <p>На протяжении своей профессиональной деятельности я достигла значительных результатов в обучении и развитии учащихся. Вот некоторые из моих достижений:</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Победители олимпиад</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Методики обучения</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Тесты</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>                    </Tab.Pane>
                      <Tab.Pane eventKey="third">
  <Row>
    {
      projects3.map((project, index) => {
        return (
          <div key={index} 
          style={{
            display: "flex"
          }}>
            <a 
              href={project.description} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{
                color: 'rgba(170, 54, 124, 1)', // Основной цвет текста
                textDecoration: 'none', 
                transition: 'all 0.3s ease', // Плавный переход
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'rgba(74, 47, 189, 1)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'rgba(170, 54, 124, 1)'}
            >
              {project.title}
            </a>
          </div>
        );
      })
    }
  </Row>
</Tab.Pane>


                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
