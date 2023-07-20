import { useContext } from "react";
import { AppContext } from "../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function PersonalLinks() {
  const { allColors } = useContext(AppContext) || {};

  return (
    <div className="personal-links">
      <a
        href="https://www.linkedin.com/in/jose-david-molina-sosa-webdev/?locale=en_US"
        target="_blank"
        rel="samecreator"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          style={{ color: allColors?.mainTitleColor }}
        />
      </a>
      <a href="https://cheoworkshop.info/" target="_blank" rel="samecreator">
        <FontAwesomeIcon
          icon={faGlobe}
          style={{ color: allColors?.mainTitleColor }}
        />
      </a>
      <a href="https://github.com/Aredros" target="_blank" rel="samecreator">
        <FontAwesomeIcon
          icon={faGithub}
          style={{ color: allColors?.mainTitleColor }}
        />
      </a>
    </div>
  );
}

export default PersonalLinks;
