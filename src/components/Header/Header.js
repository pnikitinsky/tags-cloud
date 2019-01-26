import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.h1`
  display: flex;
  flex-direction: column;
  align-self: center;
  color: white;
`;

const availableLocations = {
  home: 'Tags Cloud Home Screen',
  tag: 'Tag\'s Screen',
};

export default class Header extends React.Component {

  static propTypes = {
    screen: PropTypes.oneOf(['home', 'tag']),
  };

  render() {
    const { screen } = this.props;
    return (
      <Container>
        { availableLocations[screen] }
      </Container>
    );
  }
}
