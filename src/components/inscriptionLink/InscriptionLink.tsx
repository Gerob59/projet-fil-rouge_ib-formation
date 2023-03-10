import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./InscriptionLink.scss";

const ConnexionLink: React.FC = () => {
  return (
    <div className="connexion">
      <BsFillPersonFill className="person" />
      <Link to="/inscription/client">
        <span className="menuHeader bold">S'inscrire</span>
      </Link>
    </div>
  );
};
export default ConnexionLink;
