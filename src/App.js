import styled from "@emotion/styled";
import {
  IoHome,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";


const Page = styled.div`
  .maintop {
    display: grid;
    grid-template-columns: 2fr, 1fr;
  }

  img {
    border-radius: 100%;
    height: 128px;
    width: 128px;
  }

  .profile h1 {
    margin-top: 5px;
  }

  .link {
    text-align: center;
    margin-bottom: 100px;
    margin-top: 50px;
  }

  .profile {
    text-align: center;
  }

  .link a {
    text-decoration: none;
    display: flex;
    justify-content: center;
  }

  .link button {
    background-color: #30e6e0;
    gap: 4px;
    width: 30%;
    height: 80px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
  }

  .link button:hover {
    transform: translateY(-5px);
    transition-duration: 0.5s  
  }

  footer {
    text-align: center;
    margin-top: 30px;
    opacity: 0;
  }

  @media screen and (max-width: 748px) {
    .link button {
      width: 40%;
    }
  }

  @media screen and (max-width: 650px) {
    .main {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }

    .link {
      text-align: center;
      margin-bottom: 20px;
      margin-top: 20px;
    }
  }
`;

function App() {
  return (
    <Page>
      <div className="main">
        <div className="maintop">
        <div className="link">
          <a href="https://www.sbek22.xyz">
            <button><IoHome />Homepage</button>
          </a>
        </div>
        <div className="link">
          <a href="https://github.com/MugiD">
            <button><IoLogoGithub />GitHub</button>
          </a>
        </div>
        </div>
        <div className="profile">
          <img src="./luffu.jpeg" alt="profile" />
          <h1>@sbek22</h1>
        </div>
        <div className="link">
          <a href="https://www.linkedin.com/in/sbek22">
            <button><IoLogoLinkedin />LinkedIn</button>
          </a>
        </div>
        <div className="link">
          <a href="https://twitter.com/sbek22_">
            <button><IoLogoTwitter />Twitter</button>
          </a>
        </div>
      </div>
      <footer>
        <div className="footer">Bek Slambek 2022</div>
      </footer>
    </Page>
  );
}

export default App;
