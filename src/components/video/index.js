import React from "react";
import './styles.scss';
import pause from '../../assets/pause.svg';

const Video = () => {
    return (
        <section className="video">
            <div className="container">
                <div className="video__content">
                    <video controls></video>
                    <img src={pause} />
                </div>
            </div>
        </section>
    );
};

export default Video;