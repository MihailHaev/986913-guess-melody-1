import React from "react";
import renderer from "react-test-renderer";
import AudioPlayer from "./audio-player";

it(`Audio Player correctly renders`, () => {
  const tree = renderer
    .create(<AudioPlayer
      isPlaying={true}
      src={`test.mp3`}
      onPlayButtonClick={jest.fn()}
    />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
