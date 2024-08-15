import React, { } from 'react';
import { useState } from 'react';
import BottomBar from '../../Components/Bottombar';
import BackwardButton from "../../Components/BackwardButton";
import { Link, useNavigate } from 'react-router-dom';
import ImageCommentLink from '../../Components/ImageCommentLink';
import avatarImg from '../../assets/avatar.jpg'
import facebookIcon from '../../assets/facebook-icon.png';
import gmailIcon from '../../assets/gmail-icon.png';
import tiktokIcon from '../../assets/tiktok-icon.png';
import twitterIcon from '../../assets/twitter-icon.png';
import telegramIcon from '../../assets/telegram-icon.png';
import instagramIcon from '../../assets/instagram-icon.png';

const Profile = () => {
    return (
        <>
            <div className="profile-sidebar">
                <div className='toppart'>
                    <Link to="/launcher">
                        <BackwardButton />
                    </Link>
                    <span className="profile-text">Profile</span>
                </div>
                <div>
                    <div className="profile-avatar-container">
                        <img
                            src={avatarImg}
                            alt="Avatar"
                            className="profile-avatar"
                        />
                        <div className="profile-username">Ali Pyar</div>
                    </div>
                    <div>
                        <ImageCommentLink
                            imageSrc={gmailIcon}
                            comment=" Gamil address"
                            link="/destination-page"
                        />
                        <ImageCommentLink
                            imageSrc={telegramIcon}
                            comment="Telegram username"
                            link="/destination-page"
                        />
                        <ImageCommentLink
                            imageSrc={twitterIcon}
                            comment="Twitter username"
                            link="/destination-page"
                        />
                        <ImageCommentLink
                            imageSrc={tiktokIcon}
                            comment="Tiktok username"
                            link="/destination-page"
                        />
                        <ImageCommentLink
                            imageSrc={facebookIcon}
                            comment="Facebook username"
                            link="/destination-page"
                        />
                        <ImageCommentLink
                            imageSrc={instagramIcon}
                            comment="Instagram username"
                            link="/destination-page"
                        />
                    </div>
                </div>
            </div>
            <BottomBar />
        </>

    );
};

export default Profile;