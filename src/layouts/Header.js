import React from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/Header.css";
import img1 from "../images/tank1.jpg";
import img2 from "../images/tank2.jpg";
import img3 from "../images/tank3.jpg";
import img4 from "../images/tank4.jpg";
// import img5 from "../images/tank5.jpg";
// import img7 from "../images/tank7.png";

const Header = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <img src={img4} alt="miasto" />} />
        <Route path="/list" render={() => <img src={img1} alt="miasto" />} />
        <Route path="/tank" render={() => <img src={img2} alt="miasto" />} />
        <Route path="/admin" render={() => <img src={img3} alt="miasto" />} />
        <Route render={() => <img src={img3} alt="miasto" />} />
      </Switch>
    </>
  );
};

export default Header;
