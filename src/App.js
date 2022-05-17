/** @jsxImportSource @emotion/react */

import './App.css';
import { css } from '@emotion/react';

const introduction = css`
  display: flex;
  flex-direction: row;
  color: white;
  max-width: 80%;
  justify-content: space-around;
  margin: auto;
  margin-top: 200px;

  h1 {
    font-size: 72px;
    margin-bottom: -10px;
    font-weight: 700;
  }

  h2 {
    font-size: 30px;
    margin-top: 0px;
  }

  p {
    font-size: 20px;
    margin-right: 30px;
  }
`;

const introductionSpacing = css`
  display: flex;
  flex-direction: column;
  margin-top: -100px;
`;

const videoPlayer = css`
  align-items: center;
  display: inline-block;
  width: 130em;
  height: 24em;
`;

const navigationMenuListStyles = css`
  display: flex;
  justify-content: space-around;
  color: white;
  margin-top: 50px;
`;

const logoStyles = css`
  margin-left: 100px;
`;

const signInButtonStyles = css`
  margin-left: 150px;
`;

const requestADemoStyles = css`
  margin-right: 100px;
`;

const requestAProductTourStyle = css`
  display: flex;
  font-size: 24px;
  margin-top: 50px;
  margin-bottom: 130px;
  padding: 10px;
  background-color: pink;
  border-radius: 15px;
  width: 230px;
  justify-content: space-around;
`;

const secondSectionStyle = css`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    display: flex;
    align-items: center;
    text-align: center;
    height: 15vh;
    font-size: 55.2px;
    font-weight: 700;
    color: #666666;
  }
`;

const secondSectionBottomPartStyle = css`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const galleryStlye = css`
  display: flex;
  height: 50vh;
  width: 40%;
  font-size: 100px;
  align-items: center;
  justify-content: center;
`;

const galleryTextStyle = css`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const nebulaTextStyle = css`
  font-size: 24px;
  margin-top: 120px;
  margin-right: 200px;
  color: #666666;
`;

const drDollyTextStyle = css`
  font-size: 20px;
  margin: 2px;
  color: #666666;
`;

const learnMoreAboutNebulaTextStyle = css`
  display: flex;
  font-size: 24px;
  color: white;
  background-color: pink;
  margin-right: 820px;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
  height: 10%;
`;

const thirdSectionStyle = css`
  display: flex;
  justify-content: space-around;
  height: 50vh;
  margin-left: 250px;
  margin-right: 250px;
  height: auto;
`;

const thirdSectionHeaderStyle = css`
  display: flex;
  font-size: 48px;
  color: white;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 70px;
`;

const thirdSectionListStyle = css`
  color: white;
  font-size: 24px;

  li {
    margin-bottom: 5px;
  }
`;

const seeOurConnectedDatasets = css`
  display: flex;
  color: white;
  background-color: pink;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
  margin-left: 775px;
  margin-right: 775px;
  font-size: 24px;
  border-radius: 15px;
  height: 4vh;
`;

const sectionFourStyle = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: white;
  margin-top: 100px;
  justify-content: space-around;
`;

const sectionfourFirstImageStyle = css`
  display: flex;
`;

const sectionFourFirstTextStyle = css`
  margin-left: 75px;
  margin-top: 100px;
  margin-right: 200px;
`;

const sectionFourFirstHeaderStyle = css`
  font-size: 48px;
  color: #666666;
`;

const nebulaResoluteAIsStyle = css`
  margin-top: 0;
  font-size: 20px;
`;

const learbMoreAboutNebulaStyle = css`
  font-size: 20px;
  color: red;
`;

const sectionfourSecondImageStyle = css`
  display: flex;
  margin-left: 150px;
`;

const sectionFourSecondTextStyle = css`
  margin-right: 250px;
  margin-left: 50px;
`;

const sectionFourSecondHeaderStyle = css`
  font-size: 48px;
  color: #666666;
  margin-bottom: 0;
`;

const foundationIsASecureStyle = css`
  font-size: 20px;
  margin-top: 0px;
`;

const learnMoreAboutFoundationStyle = css`
  font-size: 20px;
  color: red;
`;

function App() {
  return (
    <div>
      <main>
        <nav>
          <ul css={navigationMenuListStyles}>
            <li css={logoStyles}>Logo</li>
            <li>
              <strong>Scientific Research Platform</strong>
            </li>
            <li>
              <strong>Products</strong>
            </li>
            <li>
              <strong>How it works</strong>
            </li>
            <li>
              <strong>Company</strong>
            </li>
            <li>
              <strong>News</strong>
            </li>
            <li>
              <strong>Resources</strong>
            </li>
            <li css={signInButtonStyles}>
              <strong>Sign in</strong>
            </li>
            <li css={requestADemoStyles}>REQUEST A DEMO</li>
          </ul>
        </nav>
        <section css={introduction}>
          <div css={introductionSpacing}>
            <h1>
              <strong>ResoluteAI</strong>
            </h1>
            <h2>
              <strong>The scientific research platform</strong>
            </h2>
            <p>
              <strong>
                The information you need to make meaningful discoveries is hard
                to find – or at least it was.
              </strong>
            </p>
            <p>
              <strong>
                ResoluteAI's secure research platform lets you search aggregated
                scientific, regulatory, and business databases simultaneously.
                Combined with our interactive analytics and downloadable
                visualizations, you can make connections that lead to
                breakthrough discoveries.
              </strong>
            </p>
            <p>
              <span>Connect to discover.</span>
            </p>
            <p css={requestAProductTourStyle}>Request a product tour</p>
          </div>
          <iframe
            css={videoPlayer}
            title="vidyard-video-player"
            src="https://play.vidyard.com/fdhmZJCt8CG5zcSQ2B2vPz?disable_popouts=1&v=4.2.30&viral_sharing=0&embed_button=0&hide_playlist=1&color=FFFFFF&playlist_color=FFFFFF&play_button_color=ff3665&gdpr_enabled=1&type=inline&autoplay=0&loop=0&muted=0&hidden_controls=0&pomo=2&vydata%5Butk%5D=d8863996af5c6312ffd8384fd8278c6d&vydata%5Bportal_id%5D=5852888&vydata%5Bhs_original_external_id%5D=&vydata%5Bhs_original_external_uuid%5D=&vydata%5Bcontent_type%5D=standard-page&vydata%5Bcanonical_url%5D=https%3A%2F%2Fwww.resolute.ai&vydata%5Bpage_id%5D=11949428936&vydata%5Bcontent_page_id%5D=11949428936&vydata%5Blegacy_page_id%5D=11949428936&vydata%5Bcontent_folder_id%5D=null&vydata%5Bcontent_group_id%5D=null&vydata%5Bab_test_id%5D=null&vydata%5Blanguage_code%5D=null"
          ></iframe>
        </section>
        <section css={secondSectionStyle}>
          <header>Who innovates with ResoluteAI's research platform?</header>
          <div css={secondSectionBottomPartStyle}>
            <div css={galleryStlye}>Gallery</div>
            <div css={galleryTextStyle}>
              <p css={nebulaTextStyle}>
                "Nebula connected me in a very strategic way… What took me a
                week just to put in subfolders would come out in less than a
                couple seconds on the platform.{' '}
                <strong>It was phenomenal, incredible."</strong>
              </p>
              <p css={drDollyTextStyle}>
                - Dr. Dolly Tyan, Aditx Therapeutics Inc.
              </p>
              <p css={learnMoreAboutNebulaTextStyle}>Learn more about Nebula</p>
            </div>
          </div>
        </section>
        <section>
          <header css={thirdSectionHeaderStyle}>
            ResoluteAI accelerates research and streamlines:
          </header>
          <div css={thirdSectionStyle}>
            <img
              src="./images/ResoluteAI_PC_Image.png"
              alt="a PC"
              height="280px"
            ></img>
            <ul css={thirdSectionListStyle}>
              <li>Competitive intelligence</li>
              <li>Drug repurposing</li>
              <li>Institutional knowledge retrieval</li>
              <li>Key Opinion Leader identification</li>
              <li>Market research</li>
              <li>Pharmacovigilance</li>
            </ul>
            <ul css={thirdSectionListStyle}>
              <li>Post market surveillance</li>
              <li>Regulatory risk reduction</li>
              <li>Repurposing of past research</li>
              <li>Technology landscaping</li>
              <li>Technology transfer</li>
              <li>White space analysis</li>
            </ul>
          </div>
          <p css={seeOurConnectedDatasets}>See our connected datasets</p>
        </section>
        <section css={sectionFourStyle}>
          <div css={sectionfourFirstImageStyle}>
            <img
              src="./images/Nebula_RD with effects.png"
              alt="thing"
              height="500px"
            ></img>
            <div css={sectionFourFirstTextStyle}>
              <header css={sectionFourFirstHeaderStyle}>
                Unlock hidden value in your research
              </header>
              <p css={nebulaResoluteAIsStyle}>
                Nebula, ResoluteAI's enterprise search product for science,
                makes your proprietary information easily findable and
                accessible.
              </p>
              <p css={learbMoreAboutNebulaStyle}>Learn more about Nebula</p>
            </div>
          </div>
          <div css={sectionfourSecondImageStyle}>
            <img
              src="./images/Nebula_RD_2.png"
              alt="thingy"
              height="300px"
            ></img>
            <div css={sectionFourSecondTextStyle}>
              <header css={sectionFourSecondHeaderStyle}>
                Revolutionize your research and analysis
              </header>
              <p css={foundationIsASecureStyle}>
                Foundation is a secure research platform that provides
                exploration, search, analytics, and alerts on over a dozen
                science-focused databases.
              </p>
              <p css={learnMoreAboutFoundationStyle}>
                Learn more about Foundation
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
