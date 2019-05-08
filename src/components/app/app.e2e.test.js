import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

configure({adapter: new Adapter()});

const mock = {
  questions: [
    {
      type: `genre`,
      genre: `rock`,
      answers: [
        {
          src: `path`,
          genre: `rock`,
        },
      ],
    },
    {
      type: `artist`,
      song: {
        artist: `One`,
        src: ``,
      },
      answers: [
        {
          picture: ``,
          artist: `One`,
        },
      ],
    }
  ],
};

it(`Start in game currectly works`, () => {
  const {questions} = mock;
  const app = mount(<App
    gameTime={0}
    errorCount={0}
    questions={questions}
  />);

  expect(app.state(`question`)).toEqual(-1);

  const button = app.find(`button`);
  button.simulate(`click`);
  app.update();

  expect(app.state(`question`)).toEqual(0);
});

it(`Question answer switches to another question`, () => {
  const {questions} = mock;
  const app = mount(<App
    gameTime={0}
    errorCount={0}
    questions={questions}
  />);

  app.setState({
    question: 0,
  });
  app.update();

  const form = app.find(`form`);
  form.simulate(`submit`, {
    preventDefault() {},
  });

  expect(app.state(`question`)).toEqual(1);
});

it(`last answer switches to start game`, () => {
  const {questions} = mock;
  const app = mount(<App
    gameTime={0}
    errorCount={0}
    questions={questions}
  />);
  app.setState({
    question: questions.length - 1
  });
  app.update();

  const form = app.find(`form`);
  form.simulate(`submit`, {
    preventDefault() {},
  });

  expect(app.state(`question`)).toEqual(-1);
});
