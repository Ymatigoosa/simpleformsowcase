require('components/pages/Registration/Registration.styl');
import React from 'react';

class Registration extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <span>hehehehe</span>
  }
}

Registration.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Registration;
