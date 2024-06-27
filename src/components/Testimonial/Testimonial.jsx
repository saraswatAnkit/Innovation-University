import React, { useState, useRef } from 'react';
import './Testimonial.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user1 (1).jpg';
import user_2 from '../../assets/user2.jpg';
import user_3 from '../../assets/user3.jpg';
import user_4 from '../../assets/user4.jpg';

const Testimonial = () => {

    const [translateValue, setTranslateValue] = useState(0);
    const slider = useRef();

    const slideForward = () => {
        if (translateValue > -50) {
            setTranslateValue(prevValue => {
                const newValue = prevValue - 25;
                slider.current.style.transform = `translateX(${newValue}%)`;
                return newValue;
            });
        }
    };

    const slideBackward = () => {
        if (translateValue < 0) {
            setTranslateValue(prevValue => {
                const newValue = prevValue + 25;
                slider.current.style.transform = `translateX(${newValue}%)`;
                return newValue;
            });
        }
    };

    return (
        <div className='testimonials'>
            <img 
                src={next_icon} 
                alt="" 
                className={translateValue === -50 ? 'next-btn hide' : 'next-btn'} 
                onClick={slideForward} 
            />
            <img 
                src={back_icon} 
                alt="" 
                className={translateValue === 0 ? 'back-btn hide' : 'back-btn'} 
                onClick={slideBackward}
            />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Harry Sharma</h3>
                                    <span>Innovation, INDIA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectation</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Sidharth Mishra</h3>
                                    <span>Innovation, INDIA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectation</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Ramesh Pearson</h3>
                                    <span>Innovation, INDIA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectation</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Poonam Ross</h3>
                                    <span>Innovation, INDIA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectation</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Testimonial;
