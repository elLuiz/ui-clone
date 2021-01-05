import Nav from "./components/Nav/Nav";
import Container from "./components/Container/Container";
import Col from "./components/Container/Col";
import Wrapper from "./components/Container/Wrapper";
import Footer from "./components/Footer/Footer";
import logo from './assets/spotify-logo.svg';
import FooterColumn from "./components/Footer/FooterColumn";
import SocialMedia from "./components/Footer/SocialMedia";
import instagram from './assets/instagram.svg';
import facebook from './assets/facebook.svg';
import twitter from './assets/twitter.svg';
import LanguageFooter from "./components/Footer/LanguageFooter";

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
        <Footer>
            <div className="logo-wrapper">
                <a href="/">
                  <img src={logo} alt="Spotify" />
                </a>
            </div>
            <FooterColumn columnTitle="Company"  links={[
              {"label": "About", "url": "https://www.spotify.com/us/about-us/contact/"},
              {"label": "Jobs", "url": "https://www.spotifyjobs.com/?_ga=2.159642045.1255414698.1609760985-1508976841.1602156782"},
              {"label": "For the Record", "url": "https://newsroom.spotify.com/?_ga=2.163640767.1255414698.1609760985-1508976841.1602156782"}
            ]}/>

            <FooterColumn columnTitle="Communities"  links={[
              {"label": "For Artists", "url": "https://artists.spotify.com/?_ga=2.222417307.1255414698.1609760985-1508976841.1602156782"},
              {"label": "Developers", "url": "https://developer.spotify.com/?_ga=2.222417307.1255414698.1609760985-1508976841.1602156782"},
              {"label": "Advertising", "url": "https://ads.spotify.com/?_ga=2.222417307.1255414698.1609760985-1508976841.1602156782"},
              {"label": "Investors", "url": "https://investors.spotify.com/?_ga=2.159428669.1255414698.1609760985-1508976841.1602156782"},
              {"label": "Vendors", "url": "https://spotifyforvendors.com/"}
            ]}/>
            
            <FooterColumn columnTitle="Useful Links" links={[
              {"label": "Support", "url": "https://support.spotify.com/?_ga=2.236509569.1255414698.1609760985-1508976841.1602156782"},
              {"label": "Web Player", "url": "https://open.spotify.com/?_ga=2.236509569.1255414698.1609760985-1508976841.1602156782"},
              {"label": "Free Mobiles App", "url": "https://www.spotify.com/us/free/"},
              {"label": "2020 Wrapped", "url": "https://www.spotify.com/us/wrapped/"}
            ]}/>
            
            <SocialMedia socialMedias={[
              {"social": "Instagram", "logo": instagram ,"link": "https://instagram.com/spotify"},
              {"social": "Twitter", "logo": twitter,"link": "https://twitter.com/spotify"},  
              {"social": "Facebook", "logo": facebook,"link": "https://www.facebook.com/Spotify"}
            ]}/>
            <LanguageFooter />
            <FooterColumn className="flex-row" columnTitle="" links={[
              {"label": "Legal", "url": "https://www.spotify.com/us/legal/"},
              {"label": "Privacy Center", "url": "https://www.spotify.com/us/privacy/"},
              {"label": "Privacy Policy", "url": "https://www.spotify.com/us/legal/privacy-policy/"},
              {"label": "Cookies", "url": "https://www.spotify.com/us/legal/cookies-policy/"},
              {"label": "About Ads", "url": "https://www.spotify.com/us/legal/privacy-policy/#s3"},
              {"label": "Additional CA Privacy Disclosures", "url": "https://www.spotify.com/us/legal/California-privacy-disclosure/"}
            ]} >
              <div className="spotify-copyright">
                  <p>&#169; Spotify AB</p>
              </div>
            </FooterColumn>
            </Footer>
    </div>
  );
}

export default App;
