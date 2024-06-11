import { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Me from '../assets/img/Me.png';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = useMemo(() => ["Software Tester", "Software Developer", "Full Stack Developer"], []);
  const period = 1500;

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [loopNum, toRotate, isDeleting, text, period]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, tick]);



  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1 className="banner-title">{`Hi! I'm Daniel`}
                    <div className="txt-rotate" data-rotate={toRotate}><span className="wrap">{text}</span>
                    </div>
                  </h1>
                  <p>Software tester graduate from John Bryce and Software development graduate from Sela College.
                    I am an enthusiastic and driven professional, eager to embrace a dynamic and multifaceted role in the field of QA within an innovative technology company. With a solid foundation in programming,
                    I bring both technical expertise and a passion for quality assurance to every project.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={4} xl={4}>
            <img src={Me} alt="Me" className="img-fluid rounded-circle bg-white" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}