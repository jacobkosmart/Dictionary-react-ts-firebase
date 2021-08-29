# 🔎 Jacob Dictonary App

<a href="https://dic.jacobko.info/" target="_blank">Live Demo</a>

## 💻 1.프로젝트 소개

### 📝 사용기술 및 언어

- Create React App with TypeScript

- Material UI

- Free Dictionary AIP

- Sass

- axios

- PWA

### ⏰ 개발 기간

2021-08-23 ~ 2021-08-29

## 📃 2.프로젝트 내용

### 📌 주요 기능

### 🎁 설치 패키지

```bash
# CRA
npx create-react-app PROJECT --template typescript

# node-sass
yarn add node-sass@4.14.1


# material-ui
yarn add @material-ui/core @material-ui/icons
yarn add @material-ui/icons

# axios
yarn add axios

# CRACO
yarn add @craco/craco
yarn add craco-alias -D

# react-icons
yarn react-icons

# netlify
yarn add netlify-cli -g
```

## 🔎 3.주요 코드

1. 절대경로 및 index.ts 설정

- 프로젝트의 component 가 길어질 경우에 상대경로로 하게 되면 경로 설정이 복잡하게 되는데 index.ts 파일을 만들어 default도 경로로 만들어 주로 src 폴더를 절대경로로 설정합니다

> [절대 경로 설정 자세히 보기(Jacob's DevLog)](https://jacobko.info/react/react_14/)

```ts
// index.ts

// 이런식으로 index.ts 에서 관리해주게 되면
export { default as Header } from "./Header";
export { default as Definitions } from "./Definitions";

// import 할때 용의하게 관리 할 수 있습니다.
import { Definitions, Header } from "components/index";
```

2.  interface.ts 파일을 통해 State, props, fetch 된 API 데이터 등의 type 을 관리하여 사용하기

- TypeScript 파일로 type 관리는 필수 입니다. interface.ts 라는 파일에서 프로젝트에서 사용되는 type 들을 관리해서 export 한 다음에 각 component 에서 import 해서 사용하면 보다 용의 하게 type 설정을 할 수 있습니다.

```ts
// in interface.ts

export interface HeaderProps {
  word: string;
  setWord: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  lightMode: boolean;
}

export interface DefinitionsProps {
  word: string;
  category: string;
  fetchmeanings: InitApi[];
  phonetics?: Phonetics[];
  lightMode: boolean;
}

// Fetch Data interface

export interface InitApi {
  phonetics: Phonetics[];
  meanings: Meanings[];
  word: string;
}

export interface FetchData {
  word: string;
  meanings: Meanings;
  phonetics: Phonetics[];
}

export interface Phonetics {
  text: string;
  audio: string;
}

export interface Meanings {
  partOfSpeech: string;
  definitions: Definitions[];
}

export interface Definitions {
  definition: string;
  example: string;
  synonyms: string[];
}
```

```tsx
//  in Header.tsx component

import { HeaderProps } from "./interfaces";

const Header: React.FC<HeaderProps> = ({
  word,
  setWord,
  category,
  setCategory,
  lightMode,
}) => { ....
```

3. Dark Mode

- Material UI 에서 제공하는 dark mode 설정을 통해 웹 페이지의 dark mode 배경 및 글자 색을 쉽게 만들 수 있습니다.

```tsx
//  in Header.tsx

import {
  createTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from "@material-ui/core";

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


// ThemProvider component 를 사용하여 drakThem 적용하기

<ThemeProvider theme={darkTheme}>
  <TextField
    className="search"
    id="standard-basic"
    label="단어 찾기"
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
```

## 💡 4. Reference

RoadsideCoder - [https://www.youtube.com/watch?v=Nz6Q21ypzT4&t=310s](https://www.youtube.com/watch?v=Nz6Q21ypzT4&t=310s)

Material UI - [https://material-ui.com/](https://material-ui.com/)

Free Dictionary API - [https://github.com/meetDeveloper/freeDictionaryAPI](https://github.com/meetDeveloper/freeDictionaryAPI)
