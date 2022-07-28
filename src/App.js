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
    opacity: 70%;
    background-color: #30e6e0;
    gap: 4px;
    width: 30%;
    height: 80px;
    border: none;
    box-shadow: 0 0 5px #30e6e0;
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
    animation-name: bounce;
    -moz-animation-name: bounce;
  }

  @keyframes bounce {
    0%, 100%, 20%, 50%, 80% {
      -webkit-transform: translateY(0);
      -ms-transform:     translateY(0);
      transform:         translateY(0)
    }
    40% {
      -webkit-transform: translateY(-30px);
      -ms-transform:     translateY(-30px);
      transform:         translateY(-30px)
    }
    60% {
      -webkit-transform: translateY(-15px);
      -ms-transform:     translateY(-15px);
      transform:         translateY(-15px)
    }
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
          <a href="https://homepage-mugid.vercel.app">
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
