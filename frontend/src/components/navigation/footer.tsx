import React from "react";
const Fotter = () => (
  <React.Fragment>
    <div className="footer">
      <div className="footer-row">
        <button className="button language">Language: English(UK)</button>
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Press</a>
          <a href="#">Copyright</a>
          <a href="#">Creators</a>
          <a href="#">Advertise</a>
          <a href="#">Developers</a>
        </div>
        <button className="button language">History</button>
      </div>
      <div className="footer-row">
        <button className="button language">Location: England</button>
        <div className="footer-links link-footer">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Policy&Safety</a>
          <a href="#">Send Feedback</a>
        </div>
        <button className="button language">Help</button>
      </div>
    </div>
    <div className="footer-last">
      <div className="footer-year">2020. Video App</div>
      <div className="social-media">
        <a href="#">twitter</a>
        <a href="#">instagram</a>
        <a href="#">facebook</a>
      </div>
      <div className="policy">
        <a href="#">Terms of Use</a>
      </div>
    </div>
  </React.Fragment>
);

export default Fotter;
