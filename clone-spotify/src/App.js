import Nav from "./components/Nav/Nav";
import Container from "./components/Container/Container";

function App() {
  return (
    <div className="App">
        <Nav />
        <Container className="explore-wrapped">
          <div className="content">
            <div className="col-left">
              <h2 className="section-title">2020 WRAPPED</h2>
                <div className="gradient-graphic">
                    <div className="graphic-title">
                      <h4>2020 WRAPPED</h4>
                    </div>
                </div>
              </div>
              <div className="col-right">
                <h4>See how you listened</h4>
                <p className="description">Find out the artists, songs, and podcasts that got you through the longest year ever.</p>
                <a href="/">EXPLORE YOUR WRAPPED</a>
              </div>
          </div>
        </Container>
    </div>
  );
}

export default App;
