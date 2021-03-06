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
  align-items: center;
  color: white;
  margin-top: 50px;
  list-style: none;
`;

const logoStyles = css`
  margin-left: 100px;
  justify-self: center;
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
  background-color: #ff3665;
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
  background-color: #ff3665;
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
  background-color: #ff3665;
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

const sectionFiveStyle = css``;

const sectionFiveHeaderStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  font-size: 48px;
  color: white;
`;

const sectionFiveGrid = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: white;
  margin-left: 320px;
  margin-right: 320px;
  column-gap: 130px;

  li {
    display: flex;
    margin-top: 30px;

    header {
      font-size: 24px;
      margin-left: 10px;
    }

    p {
      font-size: 18px;
      margin-left: 10px;
    }
  }
`;

const viewProductsStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  height: 4vh;
  border-radius: 15px;
  color: white;
  background-color: #ff3665;
  margin-left: 840px;
  margin-right: 840px;
`;

const sectionSixStyle = css`
  background-color: white;
`;

const sectionSixHeaderStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  padding-top: 50px;
  font-size: 62px;
  color: #666666;
`;

const eachReportWasCreated = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: 20px;
`;

const sectionSixTextStyle = css`
  display: flex;
  justify-content: space-around;
  margin-top: 150px;
  margin-left: 280px;
  margin-right: 280px;

  header {
    font-size: 20px;
    color: #666666;
  }

  p {
    font-size: 16px;
    color: #666666;
    margin-right: 50px;
  }
`;

const viewAllResearchReports = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  height: 4vh;
  border-radius: 15px;
  color: white;
  background-color: #ff3665;
  margin-left: 790px;
  margin-right: 790px;
`;

const sectionSevenStyle = css`
  margin-top: 50px;
  color: white;
  height: 35vh;
`;

const sectionSevenHeaderStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
`;

const sectionSevenTextStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-left: 250px;
  margin-right: 250px;
  margin-top: 35px;
`;

const sectionEightStlye = css`
  display: flex;
  justify-content: space-around;
  background-color: white;
  background-image: url(https://cdn2.hubspot.net/hubfs/5852888/Ironpaper/molecular-background@3x.png);
  background-position: bottom right;
  background-size: 65% auto;
  background-repeat: no-repeat;
  height: 25vh;
  align-items: center;
`;

const sectionEightTextStyle = css`
  display: flex;
  flex-direction: column;
`;

const connectWithAnExpert = css`
  font-size: 16px;
  color: #ff3665;
  margin-left: -150px;
`;

const seeHowResoluteAI = css`
  font-size: 24px;
  margin-left: -150px;
`;

const connectWithUs = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  height: 4vh;
  border-radius: 15px;
  color: white;
  background-color: #ff3665;
  padding-left: 10px;
  padding-right: 10px;
`;

function App() {
  return (
    <div>
      <main>
        <nav>
          <ul css={navigationMenuListStyles}>
            <li css={logoStyles}>
              <img src="./images/resoluteAI_Logo.PNG" alt="logo" />
            </li>
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
                to find ??? or at least it was.
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
            sandbox=""
            src="https://play.vidyard.com/fdhmZJCt8CG5zcSQ2B2vPz?disable_popouts=1&v=4.2.30&viral_sharing=0&embed_button=0&hide_playlist=1&color=FFFFFF&playlist_color=FFFFFF&play_button_color=ff3665&gdpr_enabled=1&type=inline&autoplay=0&loop=0&muted=0&hidden_controls=0&pomo=2&vydata%5Butk%5D=d8863996af5c6312ffd8384fd8278c6d&vydata%5Bportal_id%5D=5852888&vydata%5Bhs_original_external_id%5D=&vydata%5Bhs_original_external_uuid%5D=&vydata%5Bcontent_type%5D=standard-page&vydata%5Bcanonical_url%5D=https%3A%2F%2Fwww.resolute.ai&vydata%5Bpage_id%5D=11949428936&vydata%5Bcontent_page_id%5D=11949428936&vydata%5Blegacy_page_id%5D=11949428936&vydata%5Bcontent_folder_id%5D=null&vydata%5Bcontent_group_id%5D=null&vydata%5Bab_test_id%5D=null&vydata%5Blanguage_code%5D=null"
          />
        </section>
        <section css={secondSectionStyle}>
          <header>Who innovates with ResoluteAI's research platform?</header>
          <div css={secondSectionBottomPartStyle}>
            <div css={galleryStlye}>Gallery</div>
            <div css={galleryTextStyle}>
              <p css={nebulaTextStyle}>
                "Nebula connected me in a very strategic way??? What took me a
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
            />
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
            />
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
            <img src="./images/Nebula_RD_2.png" alt="thingy" height="300px" />
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
        <section css={sectionFiveStyle}>
          <header css={sectionFiveHeaderStyle}>
            ResoluteAI's research and analysis features
          </header>
          <ul css={sectionFiveGrid}>
            <li>
              <img src="./images/icon_1.svg" alt="icon" height="50px" />
              <div>
                <header>Natural language processing</header>
                <p>
                  Structured metadata created from unstructured text, semantic
                  expansion, conceptual search, and document similarity search
                </p>
              </div>
            </li>
            <li>
              <img src="./images/icon_2.svg" alt="icon" height="50px" />
              <div>
                <header>Faceted search</header>
                <p>
                  Filter results based on structured metadata created by NLP or
                  contained in the source database
                </p>
              </div>
            </li>
            <li>
              <img src="./images/icon_3.svg" alt="icon" height="50px" />
              <div>
                <header>Multiple ontologies and taxonomies</header>
                <p>
                  ResoluteAI???s proprietary science-focused ontology plus
                  PubChem, MeSH, and more.
                </p>
              </div>
            </li>
            <li>
              <img src="./images/icon_4.svg" alt="icon" height="50px" />
              <div>
                <header>Alerts</header>
                <p>
                  Save searches and have results delivered directly to your
                  inbox
                </p>
              </div>
            </li>
            <li>
              <img src="./images/icon_5.svg" alt="icon" height="50px" />
              <div>
                <header>Search results export</header>
                <p>
                  Export your search results for analysis outside the ResoluteAI
                  platform
                </p>
              </div>
            </li>
            <li>
              <img src="./images/icon_6.svg" alt="icon" height="50px" />
              <div>
                <header>Optical character recognition</header>
                <p>
                  Index and understand text that appears in handwritten
                  documents, images, and video
                </p>
              </div>
            </li>
            <li>
              <img src="./images/icon_7.svg" alt="icon" height="50px" />
              <div>
                <header>Document cracking</header>
                <p>
                  Open documents embedded in other documents for complete
                  indexing and discovery
                </p>
              </div>
            </li>
            <li>
              <img src="./images/icon_8.svg" alt="icon" height="50px" />
              <div>
                <header>Image recognition</header>
                <p>
                  Identifies images, graphs, charts, and logos in documents and
                  video
                </p>
              </div>
            </li>
            <li>
              <img src="./images/icon_9.svg" alt="icon" height="50px" />
              <div>
                <header>Audio transcription</header>
                <p>
                  Transcribes and indexes talk tracks from webinars, videos, and
                  other presentations
                </p>
              </div>
            </li>
            <li>
              <img src="./images/icon_10.svg" alt="icon" height="50px" />
              <div>
                <header>Format agnostic</header>
                <p>
                  Ingestion and indexing works on dozens of formats including
                  Microsoft Office documents, PDFs, .msg, audio, and video
                </p>
              </div>
            </li>
            <li>
              <img src="./images/icon_11.svg" alt="icon" height="50px" />
              <div>
                <header>Source agnostic</header>
                <p>
                  SharePoint, Azure Blob, Box, DropBox, GDrive, and many other
                  data storage solutions are supported
                </p>
              </div>
            </li>
          </ul>
          <p css={viewProductsStyle}>View products</p>
        </section>
        <section css={sectionSixStyle}>
          <header css={sectionSixHeaderStyle}>
            Check out ResoluteAI's research reports
          </header>
          <p css={eachReportWasCreated}>
            Each report was created by our information retrieval specialists
            using data discovered from our scientific research platform.
          </p>
          <div css={sectionSixTextStyle}>
            <div>
              <img
                src="./images/img_1.jpeg"
                alt="hand holding glowy thing"
                height="279px"
              />
              <header>Targeted protein degradation</header>
              <p>
                Market landscape: Research and investment trends, technologies
                available for licensing, PROTACs and emerging TPD strategies,
                along with leading companies, universities, inventors, and
                researchers.
              </p>
            </div>
            <div>
              <img
                src="./images/img_2.jpeg"
                alt="hand holding book"
                height="279px"
              />
              <header>Into the metaverse</header>
              <p>
                High-level market landscape: News, patents, academic
                publications, clinical trials, companies, and the rise of this
                concept - it's been around far longer than you'd expect.
              </p>
            </div>
            <div>
              <img
                src="./images/img_3.jpeg"
                alt="hand holding glowy thing"
                height="279px"
              />
              <header>Micelle nanoparticle applications</header>
              <p>
                This report assesses the current state of micelle nanoparticle
                development and the recent growth within the field. At the end
                of 2021, there was nearly a three-fold increase in news
                publications related to micelle nanoparticles.
              </p>
            </div>
          </div>
          <p css={viewAllResearchReports}>View all research reports</p>
        </section>
        <section css={sectionSevenStyle}>
          <header css={sectionSevenHeaderStyle}>
            Who needs a scientific research platform?
          </header>
          <p css={sectionSevenTextStyle}>
            If you spend more than a couple of hours a week looking for academic
            research, or scanning through patents, or exploring tech transfer
            opportunities, a research platform that brings all these databases
            together, and more, might be helpful. Maybe you have a research
            organization tool, or use desktop software to organize research for
            yourself or for your colleagues. A research platform that brings all
            your results together might save you a tremendous amount of time.
            And money. Information platforms exist for all domains, ResoluteAI???s
            online research platform is focused on scientific research and is
            used by professionals in pharma, biotech, chemical, diagnostics,
            consumer products, and many other industries around the world.
          </p>
        </section>
        <section css={sectionEightStlye}>
          <div css={sectionEightTextStyle}>
            <p css={connectWithAnExpert}>Connect with an expert</p>
            <p css={seeHowResoluteAI}>
              See how ResoluteAI's research platform can help you
            </p>
          </div>
          <p css={connectWithUs}>CONNECT WITH US</p>
        </section>
      </main>
    </div>
  );
}

export default App;
