export interface HomeProps {
  word: string;
  setWord: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  lightMode: boolean;
  fetchmeanings: InitApi[];
  phonetics?: Phonetics[];
}

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
