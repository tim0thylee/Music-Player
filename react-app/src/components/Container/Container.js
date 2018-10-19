import React,{Component} from "react";
import "./Container.css";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import NextButton from "../NextButton/NextButton";

class Container extends Component {
    render () {
        return (
            <div className="container">
                <NextButton icon={<i className="fas fa-caret-left"></i>}/>
                <MusicPlayer />
                <NextButton icon={<i className="fas fa-caret-right"></i>}/>
            </div>
        )
    }
}

export default Container;
