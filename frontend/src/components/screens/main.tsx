import React from "react";

const Main = () => (
  <React.Fragment>
    <div className="profile">
      <img
        src="https://images.unsplash.com/photo-1559543434-3e99643d333d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt=""
        className="profile-cover"
      />
      <div className="profile-contact-info">
        <div className="profile-contact">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 512 512"
          >
            <path d="M10.69 95.16C80.96 154.66 204.26 259.36 240.5 292c4.87 4.4 10.08 6.65 15.5 6.65 5.4 0 10.62-2.22 15.47-6.6 36.27-32.68 159.57-137.4 229.84-196.9a10.66 10.66 0 001.5-14.72A42.36 42.36 0 00469.33 64H42.67A42.36 42.36 0 009.19 80.44a10.66 10.66 0 001.5 14.72z" />
            <path d="M505.81 127.4a10.62 10.62 0 00-11.37 1.55C416.5 195 317.05 279.69 285.76 307.89c-17.56 15.85-41.94 15.85-59.54-.03-33.36-30.05-145.04-125-208.66-178.91A10.67 10.67 0 000 137.08v268.25A42.7 42.7 0 0042.67 448h426.66A42.7 42.7 0 00512 405.33V137.08c0-4.15-2.42-7.93-6.19-9.67z" />
          </svg>
        </div>
        <div className="profile-contact">
          <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M453.3 85.3a69.3 69.3 0 11-138.6 0 69.3 69.3 0 01138.6 0zm0 0" />
            <path d="M384 170.7a85.4 85.4 0 11.2-170.9 85.4 85.4 0 01-.2 170.9zM384 32a53.4 53.4 0 10.1 106.8A53.4 53.4 0 00384 32zm0 0M453.3 426.7a69.3 69.3 0 11-138.6 0 69.3 69.3 0 01138.6 0zm0 0" />
            <path d="M384 512a85.4 85.4 0 11.2-170.8A85.4 85.4 0 01384 512zm0-138.7a53.4 53.4 0 10.1 106.8 53.4 53.4 0 00-.1-106.8zm0 0M154.7 256A69.3 69.3 0 1116 256a69.3 69.3 0 01138.7 0zm0 0" />
            <path d="M85.3 341.3a85.4 85.4 0 11.2-170.8 85.4 85.4 0 01-.2 170.8zm0-138.6a53.4 53.4 0 10.2 106.8 53.4 53.4 0 00-.2-106.8zm0 0" />
            <path d="M135.7 245.8a21.3 21.3 0 01-10.6-40L323.1 93a21.3 21.3 0 1121 37.1L146.3 243c-3.3 1.9-7 2.8-10.5 2.8zm0 0M333.6 421.8c-3.6 0-7.2-1-10.5-2.8L125 306a21.4 21.4 0 0121.2-37l198 112.8a21.4 21.4 0 01-10.7 39.9zm0 0" />
          </svg>
        </div>
        <div className="profile-contact">
          <svg
            viewBox="0 0 515.6 515.6"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M496.7 212.2a64.4 64.4 0 11-91.2 91.1 64.4 64.4 0 0191.2-91M303.3 212.2a64.4 64.4 0 11-91 91.1 64.4 64.4 0 0191-91M110 212.2A64.4 64.4 0 1119 303.3a64.4 64.4 0 0191.1-91" />
          </svg>
        </div>
      </div>
      <div className="profile-info">
        <div className="profile-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 469.33 469.33"
            fill="currentColor"
          >
            <path d="M320 213.33c35.3 0 63.79-28.69 63.79-64 0-35.3-28.48-64-63.79-64-35.3 0-64 28.7-64 64 0 35.31 28.7 64 64 64zM149.33 213.33c35.31 0 63.79-28.69 63.79-64 0-35.3-28.48-64-63.79-64-35.3 0-64 28.7-64 64 0 35.31 28.7 64 64 64zM149.33 256C99.52 256 0 280.96 0 330.67V384h298.67v-53.33c0-49.71-99.52-74.67-149.34-74.67zM320 256c-6.19 0-13.12.43-20.59 1.17 24.75 17.82 41.92 41.82 41.92 73.5V384h128v-53.33c0-49.71-99.52-74.67-149.33-74.67z" />
          </svg>
          1,702
        </div>
        <div className="profile-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 469.33 469.33"
          >
            <path d="M234.67 170.67c-35.31 0-64 28.69-64 64s28.69 64 64 64 64-28.7 64-64-28.7-64-64-64z" />
            <path d="M234.67 74.67C128 74.67 36.9 141 0 234.67c36.9 93.65 128 160 234.67 160 106.77 0 197.76-66.35 234.66-160-36.9-93.66-127.89-160-234.66-160zm0 266.66c-58.88 0-106.67-47.78-106.67-106.66S175.79 128 234.67 128s106.66 47.79 106.66 106.67-47.78 106.66-106.66 106.66z" />
          </svg>
          1,503
        </div>
        <div className="profile-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 475.43 475.43"
          >
            <path d="M306.9 164.57l78.9-86.2a7.83 7.83 0 001.56-8.36 8.36 8.36 0 00-7.3-4.7h-253.4s-3.13 0-3.13.52v-9.4a26.12 26.12 0 0021.94-27.7A28.73 28.73 0 00117.26 0a29.78 29.78 0 00-29.78 28.73 30.82 30.82 0 0020.37 27.7v411.16a7.84 7.84 0 0015.68 0V263.84h256.52c3.2.2 6.17-1.7 7.31-4.7a8.36 8.36 0 00-1.56-8.36l-78.9-86.2z" />
          </svg>
          Sep 21
        </div>
        <div className="profile-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 411.14 411.14"
          >
            <path d="M350.2 54.53H61.45C27.64 54.53 0 82.18 0 115.97v179.2c0 33.8 27.65 61.44 61.44 61.44H349.7c33.79 0 61.44-27.65 61.44-61.44v-179.2c.5-33.8-27.14-61.44-60.93-61.44zM287.75 210.7a11.96 11.96 0 01-3.58 3.59l-119.3 70.65a9.93 9.93 0 01-13.82-3.58 8.65 8.65 0 01-1.54-5.12V134.92c0-5.64 4.61-10.24 10.24-10.24 1.54 0 3.59.5 5.12 1.53l119.3 70.66c4.6 3.07 6.66 9.21 3.58 13.82z" />
          </svg>
          234
        </div>
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
      <a href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 56 50"
          fill="currentColor"
        >
          <path
            d="M5.03 12h-5v38h56V12h-5zm31.999 20.262l-12.951 7.521a2.02 2.02 0 01-2.04.004 1.984 1.984 0 01-1.008-1.735V23.01c0-.724.377-1.372 1.008-1.735a2.047 2.047 0 012.04.003L37.029 28.8a1.983 1.983 0 011.001 1.731c0 .719-.374 1.366-1.001 1.731z"
            data-original="#000000"
            className="active-path"
          />
          <path
            d="M23.03 38.051v.004l12.994-7.524-12.951-7.525zM12.03 0h32v4h-32zM50.03 6h-44v4h44z"
            data-original="#000000"
            className="active-path"
          />
        </svg>
        See what's trending
      </a>
      <div className="follow-buttons">
        <button className="follow">Date Added</button>
        <button className="follow follow-option active">Most Popular</button>
      </div>
      <div className="play-all">
        <svg
          viewBox="0 0 494.942 494.942"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M35.353 0l424.236 247.471L35.353 494.942z" />
        </svg>
        Play All
      </div>
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
      <svg
        id="me"
        xmlns="http://w3.org/2000/svg"
        viewBox="0 0 341.333 341.333"
        fill="currentColor"
      >
        <path d="M341.227 149.333V0l-50.133 50.133C260.267 19.2 217.707 0 170.56 0 76.267 0 .107 76.373.107 170.667s76.16 170.667 170.453 170.667c79.467 0 146.027-54.4 164.907-128h-44.373c-17.6 49.707-64.747 85.333-120.533 85.333-70.72 0-128-57.28-128-128s57.28-128 128-128c35.307 0 66.987 14.72 90.133 37.867l-68.8 68.8h149.333z" />
      </svg>
      Load More
    </div>
  </React.Fragment>
);

export default Main;
