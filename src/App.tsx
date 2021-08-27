import { Container, Switch, withStyles } from "@material-ui/core";
import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { AuthForm, Definitions, Header } from "components/index";
import "styles/App.scss";
import { InitApi } from "components/interfaces";
import { grey } from "@material-ui/core/colors";

const App: React.FC = () => {
  // State
  const [word, setWord] = useState<string>("");
  const [fetchmeanings, setFetchMeanings] = useState<InitApi[]>([]);
  const [category, setCategory] = useState<string>("en");
  const [lightMode, setLightMode] = useState<boolean>(false);

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
  console.log(fetchmeanings);

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
          backgroundColor: lightMode ? "#fff" : "#282c34",
          color: lightMode ? "#000" : "#fff",
          transition: "all 0.5s linear",
        }}
      >
        <Container className="container" maxWidth="md">
          <div className="darkMode">
            <DarkMode
              checked={lightMode}
              onChange={() => setLightMode(!lightMode)}
            />
            <span>{lightMode ? "Dark" : "Light"} Mode</span>
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
        </Container>
      </div>
    </>
  );
};

export default App;
