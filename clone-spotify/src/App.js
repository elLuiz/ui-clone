import Nav from "./components/Nav/Nav";
import Container from "./components/Container/Container";
import Col from "./components/Container/Col";
import Wrapper from "./components/Container/Wrapper";

function App() {
  return (
    <div className="App">
        <Nav />
        <Wrapper>
          <Container className="explore-wrapped">
              <Col 
                sectionTitle="2020 WRAPPED"
                className="col-left"
              >
                <div className="gradient-graphic">
                    <div className="graphic-title">
                      <h4>2020 Wrapped</h4>
                    </div>
                </div>

              </Col>
              <Col 
                className="col-right"
                sectionTitle="2020 WRAPPED"
              >
                <h4>See how you listened</h4>
                <p className="description">Find out the artists, songs, and podcasts that got you through the longest year ever.</p>
                <a href="/">EXPLORE YOUR WRAPPED</a>
              </Col>
          </Container>
          <Container className="spotify-free">
              <Col
                sectionTitle="SPOTIFY FREE"
                className="col-left"
              >
                <h4>Listening is everything</h4>
                <p className="description">Millions of songs and podcasts. No credit card needed.</p>
                <a href="/">GET SPOTIFY FREE</a>
              </Col>
          </Container>
        </Wrapper>

    </div>
  );
}

export default App;
