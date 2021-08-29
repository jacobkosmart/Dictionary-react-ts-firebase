import { AiFillGithub, AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import "styles/Footer.scss";

interface Props {
  lightMode: boolean;
}

const Footer: React.FC<Props> = (lightMode) => {
  return (
    <div className="footer">
      <footer className="footer__text">
        &copy; {new Date().getFullYear()} Jacob Ko
      </footer>
      <div className="footer__logo">
        <a
          href="https://jacobko.info/"
          target="_blank"
          rel="noreferrer"
          style={{ color: lightMode ? "#fff" : "#000" }}
        >
          <AiOutlineHome />
        </a>
        <a
          href="https://github.com/jacobkosmart"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
          <a href="mailto: jacobkosmart@gmail.com">
            <AiOutlineMail />
          </a>
        </a>
      </div>
    </div>
  );
};

export default Footer;
