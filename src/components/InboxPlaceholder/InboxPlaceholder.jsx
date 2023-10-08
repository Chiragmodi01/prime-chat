import React from 'react'
import brandBanner from '../../../assets/brandBanner.png' 
import {LockOpenAlt} from '../../utils/styledIcons';

import './InboxPlaceholder.css';

function InboxPlaceholder() {
  return (
    <div className='InboxPlaceholder'>
        <div className='banner-top'>
            <div className="banner-image-container">
                <img width={300} src={brandBanner} alt="banner-img" className="banner-img" />
            </div>
            <div className="banner-desc-container">
                <span className="banner-desc-title">Download PrimeChat for Windows</span>
                <span className="banner-desc-text">Experience lightning-fast communication with our innovative chat app! Seamlessly connect with others and enjoy instant messaging.</span>
            </div>
            <div className="banner-button">
                <a target="_blank" href="https://chiragmodii.netlify.app">Built By Chirag</a>
            </div>
        </div>
        <div className="banner-bottom">
            <span className="banner-tnc">
                <span className='icon-lock'>
                <LockOpenAlt size="16" />
                </span>
                Your personal messages are not end-to-end encrypted lol
            </span>
        </div>
    </div>
  )
}

export {InboxPlaceholder}