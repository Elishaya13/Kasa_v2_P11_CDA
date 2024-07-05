import { Link } from "react-router-dom";
import "./notFoundBody.scss";

const NotFoundBody = () => {
  return (
    <div className="error_container__body">
      <p className="error_container__body__message_number">404</p>
      <p className="error_container__body__message_oups">
        Oups! la page que
        <br /> vous demandez n'existe pas.
      </p>
      <p className="error_container__body__message_back">
        <Link to="/home">Retourner sur la page d'accueil</Link>
      </p>
    </div>
  );
};

export default NotFoundBody;