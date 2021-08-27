import {
  createTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import "styles/Header.scss";
import categories from "data/category";
import { HeaderProps } from "./interfaces";

const Header: React.FC<HeaderProps> = ({
  word,
  setWord,
  category,
  setCategory,
  lightMode,
}) => {
  // Dark mode
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: lightMode ? "#000" : "#fff",
      },
      type: lightMode ? "light" : "dark",
    },
  });

  const handleChange = (language: string) => {
    setCategory(language);
    setWord("");
  };

  return (
    <>
      <div className="header">
        <span className="title">{word ? word : "Jacob's Dictonary"}</span>
        <div className="inputs">
          <ThemeProvider theme={darkTheme}>
            <TextField
              className="search"
              id="standard-basic"
              label="찾는 단어를 입력하세요"
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
            <TextField
              select
              className="select"
              label="언어 선택"
              value={category}
              onChange={(e) => handleChange(e.target.value)}
            >
              {categories.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </ThemeProvider>
        </div>
      </div>
    </>
  );
};

export default Header;
