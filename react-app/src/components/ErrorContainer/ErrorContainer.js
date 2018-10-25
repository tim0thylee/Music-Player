import React, {Component} from "react";
import "./ErrorContainer.css"

class ErrorContainer extends Component {
    render () {
        return (
            <div className="error-container">
                <div className="nav-row">
                    <div className="icon-div">
                        <i class="fas fa-headphones-alt"></i> MusicFy
                    </div>
                    <div className="nav-buttons-div">
                        <ul>
                            <li><a href="player">Musicfy Player</a></li>
                            <li><a href="articles">Articles</a></li>
                            <li><a href="about">About</a></li>
                            <li><a href="contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="error-body">
                    <div className="error-body-left">
                        <h1>WHOOPS!</h1>
                        <p>We couldn't find the page
                            <br/>
                            you are looking for
                        </p>
                        <button>GO BACK</button>
                    </div>
                    <div className="error-body-right">
                    </div>
                </div>
                <div className="error-footer">
                    <div className="error-footer-left">
                        <div className="error-footer-copyright">
                            <p>Copyright © 2018 Musicfy, Inc. All rights resered.</p>
                        </div>
                        <div className="error-footer-nav-row">
                            <ul>
                                <li><a href="player">Privacy Policy</a></li>
                                <li><a href="articles">Terms of Use</a></li>
                                <li><a href="about">Sales and Refunds</a></li>
                                <li><a href="contact">Site Map</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="error-footer-right">
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-instagram"></i>
                    </div>
                </div>
            </div>
        )
    }
}


export default ErrorContainer;
