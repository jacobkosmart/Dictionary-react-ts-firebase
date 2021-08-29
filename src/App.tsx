import { Container, Switch, withStyles } from "@material-ui/core";
import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { Definitions, Header } from "components/index";
import "styles/App.scss";
import { InitApi } from "components/interfaces";
import { grey } from "@material-ui/core/colors";
import { AiFillGithub, AiOutlineHome, AiOutlineMail } from "react-icons/ai";

const App: React.FC = () => {
  // State
  const [word, setWord] = useState<string>("");
  const [fetchmeanings, setFetchMeanings] = useState<InitApi[]>([]);
  const [category, setCategory] = useState<string>("en");
  const [lightMode, setLightMode] = useState<boolean>(false);
  const [savedDef, setSavedDef] = useState<string[]>([]);

  // fetch from free dic API
  const dictonaryApi = async () => {
    try {
      const data: AxiosResponse = await axios.get<InitApi[]>(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setFetchMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // darkMode switch
  const DarkMode = withStyles({
    switchBase: {
      color: grey[300],
      "&$checked": {
        color: grey[500],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  // useEffect
  useEffect(() => {
    dictonaryApi();
  }, [word, category]);

  return (
    <>
      <div
        className="App"
        style={{
          backgroundColor: lightMode ? "#b8c6db" : "#000000",
          backgroundImage: lightMode
            ? "linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)"
            : "linear-gradient(147deg, #000000 0%, #434343 74%)",
          color: lightMode ? "#000" : "#fff",
          transition: "all 0.7s linear",
        }}
      >
        <Container className="container" maxWidth="md">
          <div className="darkMode">
            <DarkMode
              checked={lightMode}
              onChange={() => setLightMode(!lightMode)}
            />
            <span className="span">{lightMode ? "Dark" : "Light"} Mode</span>
          </div>
          <Header
            category={category}
            setCategory={setCategory}
            word={word}
            setWord={setWord}
            lightMode={lightMode}
          />
          {fetchmeanings && (
            <Definitions
              word={word}
              category={category}
              fetchmeanings={fetchmeanings}
              lightMode={lightMode}
            />
          )}
          <div className="footer">
            <footer className="footer__text">
              &copy; {new Date().getFullYear()} Jacob Ko
            </footer>
            <div className="footer__logo">
              <a
                href="https://jacobko.info/"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: lightMode ? "#000" : "#fff",
                  transition: "all 0.7s linear",
                }}
              >
                <AiOutlineHome />
              </a>
              <a
                href="https://github.com/jacobkosmart"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: lightMode ? "#000" : "#fff",
                  transition: "all 0.7s linear",
                }}
              >
                <AiFillGithub />
                <a
                  href="mailto: jacobkosmart@gmail.com"
                  style={{
                    color: lightMode ? "#000" : "#fff",
                    transition: "all 0.7s linear",
                  }}
                >
                  <AiOutlineMail />
                </a>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default App;
