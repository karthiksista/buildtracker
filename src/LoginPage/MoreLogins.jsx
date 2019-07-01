import React from "react";

import GoogleLogin from "react-google-login";

class MoreLogins extends React.Component {
  constructor(props) {
    super();
    this.responseGoogle = this.responseGoogle.bind(this);
  }

  responseGoogle = response => {
    console.log(response);
  };
  render() {
    return (
      <div className="moreLogin">
        <GoogleLogin
          clientId="248371811997-m9sg2f14jglhjbgis60oi9v54on9lqes.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />
      </div>
    );
  }
}

export default MoreLogins;
