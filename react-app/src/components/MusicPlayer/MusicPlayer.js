import React, {Component} from "react";
import "./MusicPlayer.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import song1 from "../../music/music.mp3";

var data = {
    title:'Hello',
    artist: 'Goodbye',
    artwork: '../../images/dj.png',
    tracks: [{
        id: 1,
        title: "Track 1",
        duration: "0:17"
    }]
}


class MusicPlayer extends Component {

    constructor (props) {
        super(props);

        this.state = {
            percentage: 1,
            playing: false,
            currentTrack: [{
                id: 0,
                title: '',
                duration: '0:00',
            }],
            time: 0
        }
        this.song1 = new Audio (song1); 
        this.playSong = this.playSong.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    }

    handleClick = (event) => {
        if(event.target.id === 'play'){
            this.setState({playing: true});
            this.startTimer();
            this.playSong();
        } else {
            this.setState({playing: false});
            this.stopTimer();
            this.stopSong();
        }
    }

    startTimer = () => {
        this.timer = setInterval(() =>  {
            if(this.state.time < 17){
                this.setState({time: this.state.time + 1})
            }
            if(this.state.time === 17){
                clearInterval(this.timer);
                this.setState({time: 0})
            }
        }
        , 1000);
        
    }

    stopTimer = () => {
        clearInterval(this.timer);
    }

    playSong = () => {
        this.song1.play();
    }

    stopSong = () => {
        this.song1.pause();
    }

    formatTime = (data) => {
        if(data < 10){
            return `0:0${data}`;
        }
        else {
            return `0:${data}`
        }
    }


    render () {
        let playpause;

        if(this.state.playing === false) {
            playpause = <i className="fas fa-play" id="play"></i>
        } else {
            playpause = <i className="fas fa-pause" id="pause"></i>
        }
        return (
            <div className="music-player">
                <div className="album-cover">
                </div>
                <div className="music-controls">
                    <h1>Cool Boy</h1>
                    <h2>D.J. Cool Boy</h2>
                    <div className="progress-div">
                        <div className="music-time">
                            <p>{this.formatTime(this.state.time)}</p>
                            <p>{data.tracks[0].duration}</p>
                        </div>
                        <ProgressBar
                            percentage={(this.state.time/17)*100}
                        />
                        <div className="progress-buttons-div">
                            <button className="replay-button button-hover-action"><i className="fas fa-retweet"></i></button>
                            <button className="random-button button-hover-action"><i className="fas fa-random"></i></button>
                        </div>
                    </div>
                    <div className="play-buttons-div">
                        <button className="left-button button-hover-action"><i className="fas fa-angle-double-left"></i></button>
                        <button className="play-button button-hover-action" onClick={this.handleClick}>{playpause}</button>
                        <button className="right-button button-hover-action"><i className="fas fa-angle-double-right"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MusicPlayer;