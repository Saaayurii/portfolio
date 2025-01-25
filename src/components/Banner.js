import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/teacher.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const {0:loopNum, 1:setLoopNum} = useState(0);
  const {0:isDeleting, 1:setIsDeleting} = useState(false);
  const {0:text, 1:setText} = useState('');
  const {0:delta, 1:setDelta} = useState(300 - Math.random() * 100);
  const {0:index, 1:setIndex} = useState(1);
  const toRotate = [ "Учитель", "Репетитор", "Друг" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Cайт учителя по математике</span>
                <h1>{`Привет! Я Джуди`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Учитель", "Репетитор", "Друг" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Добро пожаловать на мою персональную страницу! Я, Джуди, являюсь преподавателем с многолетним опытом работы в области образования. Этот сайт создан для того, чтобы мои ученики, их родители и коллеги могли легко узнавать актуальную информацию, вдохновляться и сотрудничать.</p>
                  <button onClick={() => console.log('connect')}>Связаться <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
