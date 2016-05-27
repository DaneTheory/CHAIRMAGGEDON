import baseTheme  from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme  from 'material-ui/styles/getMuiTheme'
import React, { PropTypes, Component } from 'react'
import MenuContainer  from '../containers/MenuContainer'


class Header extends Component {
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  render() {
    return (
      <MenuContainer />
    );
  }
}


Header.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default Header;
