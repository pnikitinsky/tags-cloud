import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import styled, { withTheme } from 'styled-components';

const Section = styled.div`
  background-color: ${props => props.theme.colors.primary};
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

class RootLayout extends React.Component {

  static propTypes = {
    children: PropTypes.node,
    /**
     * Themes functionality provided by styled components, can be used for the white label functionality
     * Or to provide custom styling for different customers on the same platform
     */
    theme: PropTypes.object,
  };

  render() {
    return (
      <Section theme={this.props.theme}>
        {this.props.children}
      </Section>
    );
  }
}

export default compose(withRouter, withTheme)(RootLayout);
