import React from 'react';
import { Component } from 'react';
import ReactPlayer from 'react-player';
import '../../style.css';
import myVideo from '../../videos/1623953939349.mov'

class ResponsivePlayer extends Component {
  render() {
		return (
      <div className="player-wrapper">
				<ReactPlayer
          className="react-player"
          url={myVideo}
          width="90%"
          height="90%"
          controls={true}
				/>
      </div>
    );
	}
}

export default ResponsivePlayer;
