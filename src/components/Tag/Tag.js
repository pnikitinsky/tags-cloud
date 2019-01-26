import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getDesiredTag } from 'src/utils/tags';
import { Component as Header } from 'src/components/Header';
import { Link } from 'react-router-dom';
import { MainContent } from 'src/screens/TagsScreen'

const Container = styled(MainContent)`
  color: white;
  align-items: center;
`;

const InfoItem = styled.li``;

const ItemsContainer = styled.ul`
  display: flex;
  flex-basis: 45%;
  flex-direction: column;
  justify-self: stretch;
  list-style-type: none;
`;

const BackToHomeLink = styled(Link)`
  display: inline-block;
  border: 1px solid orange;
  padding: 10px;
  color: white;
`;

class Tag extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { match } = this.props;
    const { tagId } = match.params;
    if (tagId) {
      this.setState({
        desiredTagData: getDesiredTag(tagId),
      });
    }
  }

  state = {
    /**
     * @desiredTagData { object }, has to contain su data as:
     *   - @label { string }
     *   - @id { string }
     *   - @totalMentions { integer }
     *   - @negativeMentions { integer }
     *   - @positiveMentions { integer }
     *   - @neutralMentions { integer }
     *   - @pageTypes { object }
     */
    desiredTagData: {},
  };

  parsePageTypes = types => {
    return Object.entries(types).map(
      (type, key) => (
        <InfoItem key={key}>
          {
            type.toString()
          }
        </InfoItem>
      )
    );
  };

  render() {
    const { desiredTagData } = this.state;
    return (
      <Container>
        <Header screen={'tag'}/>
        {
          desiredTagData &&
          <ItemsContainer>
            <InfoItem>{`Label: ${desiredTagData.label}`}</InfoItem>
            <InfoItem>{`Total Mentions: ${desiredTagData.totalMentions || 0 }`}</InfoItem>
            <InfoItem>{`Negative Mentions: ${desiredTagData.negativeMentions || 0 }`}</InfoItem>
            <InfoItem>{`Positive Mentions: ${desiredTagData.positiveMentions || 0 }`}</InfoItem>
            <InfoItem>{`Neutral Mentions: ${desiredTagData.neutralMentions || 0 }`}</InfoItem>
            <ItemsContainer>
              <p>Page Types:</p>
              {
                desiredTagData.pageTypes &&
                this.parsePageTypes(desiredTagData.pageTypes)
              }
            </ItemsContainer>
          </ItemsContainer>
        }
        <BackToHomeLink to={'/tags'}>
          Back to the Home screen
        </BackToHomeLink>
      </Container>
    );
  }
}


export default Tag;
