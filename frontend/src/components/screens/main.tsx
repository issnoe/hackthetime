import React from "react";
import { IconLoadMore, IconUser } from "../../assets";

const MainScreen = () => (
  <React.Fragment>
    <div className="profile">
      <img
        src="https://images.unsplash.com/photo-1559543434-3e99643d333d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt=""
        className="profile-cover"
      />
      <div className="profile-contact-info">
        <div className="profile-contact">
          <IconUser></IconUser>
        </div>
        <div className="profile-contact">
          <IconUser></IconUser>
        </div>
        <div className="profile-contact">
          <IconUser></IconUser>
        </div>
      </div>
      <div className="profile-info">
        <div className="profile-item">1,702</div>
        <div className="profile-item"></div>
        <div className="profile-item">Sep 21</div>
        <div className="profile-item">234</div>
      </div>
      <div className="profile-menu">
        <div className="profile-avatar">
          <img
            className="profile-img"
            src="https://images.unsplash.com/photo-1503275951620-83f8a32f7884?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
            alt=""
          />
          <div className="profile-name">Phoebe Allison</div>
        </div>
        <div className="menu-items">
          <a className="profile-menu-link ">Main</a>
          <a className="profile-menu-link active">Videos</a>
          <a className="profile-menu-link">Playlists</a>
          <a className="profile-menu-link">About</a>
        </div>
        <div className="follow-buttons">
          <button className="follow">645,321</button>
          <button className="follow follow-option">Follow</button>
        </div>
      </div>
    </div>
    <div className="trends">
      <a href="#">See what's trending</a>
      <div className="follow-buttons">
        <button className="follow">Date Added</button>
        <button className="follow follow-option active">Most Popular</button>
      </div>
      <div className="play-all">Play All</div>
    </div>
    <div className="videos">
      <div className="video">
        <div className="video-time">15.13</div>
        <video muted>
          <source
            src="https://player.vimeo.com/external/368244254.sd.mp4?s=2dc98d46cc5c55913b309928d1d14769f76bc6f9&profile_id=139&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        <div className="video-content">Planning Helps Make</div>
        <div className="view">15.4k views</div>
      </div>
      <div className="video">
        <div className="video-time">13.10</div>
        <video muted>
          <source
            src="https://player.vimeo.com/external/356200184.sd.mp4?s=f528556cafba1d369984dc341104e7eef8bb71bb&profile_id=139&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        <div className="video-content">This Is Cloaud Break</div>
        <div className="view">13.2k views</div>
      </div>
      <div className="video">
        <div className="video-time">15.30</div>
        <video muted>
          <source
            src="https://player.vimeo.com/external/364324653.sd.mp4?s=7ded2b451ac7f5dfaf1375277aa0308cdf5d011c&profile_id=139&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        <div className="video-content">Lost Your Mind</div>
        <div className="view">11.7k views</div>
      </div>
      <div className="video">
        <div className="video-time">11.30</div>
        <video muted>
          <source
            src="https://player.vimeo.com/external/399004885.sd.mp4?s=1d39443bef9856dacc4d3ba2c6be0881e38b7e66&profile_id=139&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        <div className="video-content">Planning Helps Make</div>
        <div className="view">9.2k views</div>
      </div>
      <div className="video">
        <div className="video-time">6.35</div>
        <video muted>
          <source
            src="https://player.vimeo.com/external/353556576.sd.mp4?s=8e942d8680fe908418143e63e04b8798982d5bea&profile_id=139&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        <div className="video-content">Research In Advertising</div>
        <div className="view">18.4k views</div>
      </div>
      <div className="video">
        <div className="video-time">2.21</div>
        <video muted>
          <source
            src="https://player.vimeo.com/external/368556609.sd.mp4?s=3fa896a1d6d8c04382a9b8f33053d2eaabe4342b&profile_id=139&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        <div className="video-content">See The Unmatched</div>
        <div className="view">3.4k views</div>
      </div>
      <div className="video">
        <div className="video-time">12.10</div>
        <video muted>
          <source
            src="https://player.vimeo.com/external/285489976.sd.mp4?s=4fa6461f93f18e0d6cfc30461fffb05311d60a28&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        <div className="video-content">Dance In The Air</div>
        <div className="view">17.4k views</div>
      </div>
      <div className="video">
        <div className="video-time">7.50</div>
        <video muted>
          <source
            src="https://player.vimeo.com/external/325725646.sd.mp4?s=763c0f293299052689f8344b3a155ea2b4a1c92b&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        <div className="video-content">Sadness Will Last Forever</div>
        <div className="view">12.6k views</div>
      </div>
    </div>
    <div className="load-more">
      <IconLoadMore />
      Load More
    </div>
  </React.Fragment>
);

export default MainScreen;
