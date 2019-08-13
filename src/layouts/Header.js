import React from "react";
import { Route, Switch } from "react-router-dom";

import "../styles/Header.css";
// import { Img1, Img2, Img3, Img4 } from "../images";
import Img1 from "../images/tank1.jpg";
import Img2 from "../images/tank2.jpg";
import Img3 from "../images/tank3.jpg";
import Img4 from "../images/tank4.jpg";
// import img5 from "../images/tank5.jpg";
// import img7 from "../images/tank7.png";

const Header = () => {
  return (
    <header>
      <Switch>
        <Route path="/" exact render={() => <img src={Img4} alt="miasto" />} />
        <Route path="/list" render={() => <img src={Img1} alt="miasto" />} />
        <Route path="/tank" render={() => <img src={Img2} alt="miasto" />} />
        <Route path="/admin" render={() => <img src={Img3} alt="miasto" />} />
        <Route render={() => <img src={Img3} alt="miasto" />} />
      </Switch>
    </header>
  );
};

export default Header;
