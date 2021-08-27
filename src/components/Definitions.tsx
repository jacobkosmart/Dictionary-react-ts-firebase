import "styles/Definitions.scss";
import { DefinitionsProps } from "./interfaces";

const Definitions: React.FC<DefinitionsProps> = ({
  word,
  category,
  fetchmeanings,
  lightMode,
}) => {
  return (
    <>
      <div className="meanings">
        {/* audio link only en */}

        {fetchmeanings[0] && word && category === "en" && (
          <audio
            src={
              fetchmeanings[0].phonetics[0] &&
              fetchmeanings[0].phonetics[0].audio
            }
            className="audio"
            controls
          >
            당신의 디바이스에서는 오디오 파일을 지원하지 않습니다.
          </audio>
        )}

        {/* Searched words */}
        {word === "" ? (
          <span className="subTitle">단어를 입력하면 검색이 시작 됩니다.</span>
        ) : (
          fetchmeanings.map((mean) =>
            mean.meanings.map((item) =>
              item.definitions.map((def) => (
                <div
                  className="singleMean"
                  style={{
                    backgroundColor: lightMode ? "#3b5360" : "#fff",
                    color: lightMode ? "#fff" : "#000",
                  }}
                >
                  <b> 의미 : {def.definition}</b>
                  <hr className="hrStyle" />
                  {def.example && (
                    <span>
                      <b>예시 : </b>
                      {def.example}
                    </span>
                  )}
                  {def.synonyms && (
                    <span>
                      <b>동의어 : </b>
                      {def.synonyms.map((s) => `${s}, `)}
                    </span>
                  )}
                </div>
              ))
            )
          )
        )}
      </div>
    </>
  );
};

export default Definitions;
