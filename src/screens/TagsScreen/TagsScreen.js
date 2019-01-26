import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Component as Header } from 'src/components/Header';
import { fetchTags } from 'src/utils/tags';

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  max-width: 1150px;
  align-self: stretch;
  justify-self: stretch;
  font: 300 16px sans-serif;
  padding: 10%;
  margin: 0 auto;
`;

const ListContainer = styled.div`
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;
`;

const Item = styled.div`
  -webkit-flex: 1 auto;
  flex: 1 auto;
  padding: 0.5rem;
  text-align: center;
  opacity: ${props => props.opacityAmount};
  font-size: ${props => props.sentimentScore};

`;

const TagLink = styled(Link)`
  display: block;
  background-color: #88D498;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 3px;
  color: #fff;
`;

class TagsScreen extends React.Component {

  static propTypes = {
    tags: PropTypes.array,
    fetchTags: PropTypes.func,
  };

  componentDidMount() {
    this.props.fetchTags(fetchTags());
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  randomOpacityAndFont = ({ minFont, maxFont }) => {
    const opacityAmount = Math.random();
    const fontSize = Math.random() * (maxFont-minFont) + minFont;

    return { opacityAmount, sentimentScore: `${fontSize}px` };
  };

  render() {
    const { tags } = this.props;
    const { randomOpacityAndFont } = this;
    return (
      <MainContent>
        <Header screen={'home'}/>
        <ListContainer>
          { tags.map(
            (tagInfo, key) => (
              <Item
                {...randomOpacityAndFont({ minFont: 14, maxFont: 20 })}
                key={key}
              >
                <TagLink to={`/tag/${tagInfo.id}/`}>
                  { tagInfo.label }
                </TagLink>
              </Item>
            )
          )
          }
        </ListContainer>
      </MainContent>
    );
  }
}

export default TagsScreen
