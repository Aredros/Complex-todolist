import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function PersonalLinks() {
  const { allColors } = useContext(AppContext) || {};

  return (
    <div className="personal-links">
      <Link to="https://www.linkedin.com/in/jose-david-molina-sosa-webdev/?locale=en_US">
        <FontAwesomeIcon
          icon={faLinkedin}
          style={{ color: allColors?.mainTitleColor }}
        />
      </Link>
      <Link to="https://cheoworkshop.info/">
        <FontAwesomeIcon
          icon={faGlobe}
          style={{ color: allColors?.mainTitleColor }}
        />
      </Link>
      <Link to="https://github.com/Aredros">
        <FontAwesomeIcon
          icon={faGithub}
          style={{ color: allColors?.mainTitleColor }}
        />
      </Link>
    </div>
  );
}

export default PersonalLinks;
