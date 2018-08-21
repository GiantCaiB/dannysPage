import "../css/InfoBoard.css";
import React, { Component } from "react";

class SelfIntro extends Component {
  render() {
    return (
      <div className="z-depth-5 hoverable grey lighten-4">
        <div className="Intro">
          <h5>About Me</h5>
          Danny (Wenfei) is a graduate programmer with a master of IT from RMIT University.<br /> 
          He has strong knowledge of object-oriented languages, e.g. Java and C#, and server-side scripting language, e.g. ECMAScript 6. <br /> 
          He also has practical experience about Amazon Web Services, Alexa skill, Google Cloud APP Engine development. <br /> 
          He is looking forward to getting a developer role in Melbourne.<br />
          <a href="tel://61433700518">Mobile: +61 (0)433 700 518</a><br />
          <a href="mailto:danny.wf.yu@gmail.com">Email: danny.wf.yu@gmail.com</a><br />
          <a href="https://github.com/GiantCaiB">GitHub: GiantCaiB</a><br />
          <a href="https://www.linkedin.com/in/danny-yu-0b1a2194/">LinkedIn: Danny Yu</a><br />
          <br />
          <h5>About This Site</h5>
          This website backend is built from <a href="https://expressjs.com/">Node.js(Express)</a> and the frontend is created by <a href="https://reactjs.org/">React.js</a>. <br />
          This website uses a <a href="https://www.mongodb.com/">MongoDB</a> database with <a href= "https://www.npmjs.com/package/mongoose">Mongoose</a>.<br />
          <a href="https://developers.google.com/identity/protocols/OAuth2">Google OAuth 2.0 API</a> is used for user login. <br />
          The project is deployed on <a href="https://www.heroku.com/">Heroku</a>.
        </div>
      </div>
    );
  }
}

export default SelfIntro;
