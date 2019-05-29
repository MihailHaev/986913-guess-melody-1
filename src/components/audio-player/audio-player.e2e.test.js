import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AudioPlayer from "./audio-player";

configure({adapter: new Adapter()});


it(`button play in audio player not currently works`, () => {
  const onPlayButtonClick = jest.fn();

  const audioPlayer = mount(<AudioPlayer
    isPlaying={false}
    src={`test.mp3`}
    onPlayButtonClick={onPlayButtonClick}
  />);

  expect(audioPlayer.state(`isPlaying`)).toEqual(false);

  const button = audioPlayer.find(`.track__button`);
  button.simulate(`click`, {
    preventDefault: audioPlayer.setState({isPlaying: !audioPlayer.state(`isPlaying`)}),
  });
  audioPlayer.update();

  expect(audioPlayer.state(`isPlaying`)).toEqual(true);
});

it(`button stop in audio player not currently works`, () => {
  const onPlayButtonClick = jest.fn();

  const audioPlayer = mount(<AudioPlayer
    isPlaying={true}
    src={`test.mp3`}
    onPlayButtonClick={onPlayButtonClick}
  />);

  expect(audioPlayer.state(`isPlaying`)).toEqual(true);
  const button = audioPlayer.find(`.track__button`);
  button.simulate(`click`, {
    preventDefault: audioPlayer.setState({isPlaying: !audioPlayer.state(`isPlaying`)}),
  });
  audioPlayer.update();

  expect(audioPlayer.state(`isPlaying`)).toEqual(false);
});
