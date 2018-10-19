import React, {Component} from "react";
import "./MusicPlayer.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import song1 from "../../music/music.mp3";
import Controls from "../Controls/Controls";

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

// class Controls extends Component {
//     constructor (props) {
//         super(props) 
//     }

//     render () {
//         let playpause;

//         if(this.props.playing === false) {
//             playpause = <i className="fas fa-play" id="play"></i>
//             this.props.stopTimer();
//         } else {
//             playpause = <i className="fas fa-pause" id="pause"></i>
//             this.props.startTimer();
//             this.playSong();
//         }


//         return (
//             <button className="play-button button-hover-action" onClick={this.props.handleClick}>{playpause}</button>
//         )
//     }
// }

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
        } else {
            this.setState({playing: false})
        }
    }

    startTimer = () => {
        setInterval(() =>  this.setState({
            time: this.state.time + 1
        })
        , 1000)

        // this.playSong();
    }

    stopTimer = () => {
        clearInterval(this.startTimer);
        console.log(this.startTimer)
    }

    playSong = () => {
        this.song1.play();
    }

    stopSong = () => {
        this.song1.pause();
    }

    

    


    render () {
        return (
            <div className="music-player">
                <div className="album-cover">
                </div>
                <div className="music-controls">
                    <h1>Cool Boy</h1>
                    <h2>D.J. Cool Boy</h2>
                    <div className="progress-div">
                        <div className="music-time">
                            <p>{this.state.time}</p>
                            <p>{data.tracks[0].duration}</p>
                        </div>
                        <ProgressBar
                            percentage={this.state.time}
                        />
                        <div className="progress-buttons-div">
                            <button className="replay-button button-hover-action"><i className="fas fa-retweet"></i></button>
                            <button className="random-button button-hover-action"><i className="fas fa-random"></i></button>
                        </div>
                    </div>
                    <div className="play-buttons-div">
                        <button className="left-button button-hover-action" onClick={this.startTimer}><i className="fas fa-angle-double-left"></i></button>
                        <Controls 
                            playing={this.state.playing} 
                            handleClick={this.handleClick}
                            stopTimer={this.stopTimer}
                            startTimer={this.startTimer}
                            playSong={this.playSong}
                        />
                        <button className="right-button button-hover-action" onClick={this.stopTimer}><i className="fas fa-angle-double-right"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MusicPlayer;