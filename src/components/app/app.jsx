import React from "react";
import PropTypes from "prop-types";

import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const App = (props) => {
  const {gameTime, errorCount, onClickButtonStart} = props;

  return <WelcomeScreen
    time={gameTime}
    errorCount={errorCount}
    onClick={onClickButtonStart}
  />;
};

App.propTypes = {
  gameTime: PropTypes.number,
  errorCount: PropTypes.number,
  onClickButtonStart: PropTypes.func,
};

export default App;
