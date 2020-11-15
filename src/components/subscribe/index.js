import React from 'react';
import './styles.scss';
import bacha from '../../assets/bacha.png';

const Subcribe = () => {
    return (
        <section className="subscribe">
            <div className="container">
                <div className="row">
                    <div className="col-6 subscribe__item">
                        <h2 className="subscribe__title title">Subscribe to our newsletter</h2>
                        <h3 className="subscribe__subtitle subtitle">Send me your email address</h3>
                        <p className="subscribe__descrtiption description">Lorem ipsum dolor sit amet, consectetur <br/> adipisicing elit, sed do eiusmod</p>
                        <label for="subscribe__input" className="subscribe__label">
                            <input className="subscribe__input" placeholder="Your email" id="subscribe__input" />
                        </label>
                    </div>
                    <div className="col-6 subscribe__item">
                        <img src={bacha} className="subscribe__img"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subcribe;
