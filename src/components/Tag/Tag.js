import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getDesiredTagBy } from 'src/utils/tags';
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
        desiredTagData: getDesiredTagBy(tagId),
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

  /**
   *
   * @param types  i.e. Page Types
   * @returns {[String]}
   */
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

  /**
   *
   * @param mentions
   * @returns {*|number}
   */
  countMentions = mentions => (mentions || 0);

  render() {
    const { desiredTagData } = this.state;
    const { countMentions } = this;
    return (
      <Container>
        <Header screen={'tag'}/>
        {
          desiredTagData &&
          <ItemsContainer>
            <InfoItem>{`Label: ${desiredTagData.label}`}</InfoItem>
            <InfoItem>{`Total Mentions: ${countMentions(desiredTagData.totalMentions)}`}</InfoItem>
            <InfoItem>{`Negative Mentions: ${countMentions(desiredTagData.negativeMentions)}`}</InfoItem>
            <InfoItem>{`Positive Mentions: ${countMentions(desiredTagData.positiveMentions)}`}</InfoItem>
            <InfoItem>{`Neutral Mentions: ${countMentions(desiredTagData.neutralMentions)}`}</InfoItem>
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
