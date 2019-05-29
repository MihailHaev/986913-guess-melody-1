import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";
import questions from "./mocks/questions";
import settings from "./mocks/settings";

const init = (gameQuestions) => {
  ReactDOM.render(
      <App
        errorCount={settings.errorCount}
        gameTime={settings.gameTime}
        questions={gameQuestions}
      />,
      document.querySelector(`.main`)
  );
};

init(questions);
