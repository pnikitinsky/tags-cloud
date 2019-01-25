import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Component as Header } from 'src/components/Header';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
`;

export default class TagsScreen extends React.Component {

  static propTypes = {
    tags: PropTypes.array,
  };

  render() {
    const { tags } = this.props;
    return (
      <Container>
        <Header screen={'home'}/>
        { tags.map(
            (tagInfo, key) => (
              <Link key={key} to={`/tag/${tagInfo.id}/`}>
                { tagInfo.label }
              </Link>
            )
          )
        }
      </Container>
    );
  }
}
