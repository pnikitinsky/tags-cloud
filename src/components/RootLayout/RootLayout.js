import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  min-height: 50px;
  background-color: gray;
  display: flex;
  flex-direction: column;
  justify-self: stretch;
  align-items: center;
  justify-content: flex-end;
  
`;

class RootLayout extends React.Component {

  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <Section>
        {this.props.children}
      </Section>
    );
  }
}

export default withRouter(RootLayout);
