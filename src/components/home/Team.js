import React from 'react'

import styled from 'styled-components'
import { Heading, Subheading, Description } from 'components/Text'

import { theme } from 'theme'
import Button from 'components/Button'
import Icon from '@hackclub/icons'

import { team as data } from 'data'

class Team extends React.Component {
  render () {
    return (
      <div>
        <Heading>Our Team:</Heading>
        <PartnerGroup
          logoSize={"15rem"}
          mLogoSize={"15rem"}
          data={data.members} />
      </div>
    );
  }
}

/**********************/
/***extra components***/
/**********************/
const naming = styled.p`
  font-size: 14px;
`

const Profile = styled.div`
  width: 100%;
  margin: 5px 0;
  padding 10px;
  text-align: center;
`

const PartnerWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem 2rem 0;
`
const SponsorWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem 2rem 0;
`
const StyledAnchor = styled.span`
  margin: auto;
  display: block;
  padding: 1rem;
  width: ${props => props.mSize || props.size || "initial"};
  height: ${props => props.mSize || props.size || "initial"};
  img {
    width: 100%;
  }
  ${theme.mediaQueries.lg} {
    width: ${props => props.size || "initial"};
    height: ${props => props.size || "initial"};
  }
`
const PartnerLink = (props) =>
  (<StyledAnchor size={props.size} mSize={props.mSize}>
    <img src={props.src} alt={props.alt} />
  </StyledAnchor>);


class PartnerGroup extends React.Component {
  constructor () {
    super();
    this.state = {
      partners: []
    };
  }
  componentDidMount () {
    for (let i in this.props.data) {
      import (`images/team/${this.props.data[i].img}`)
        .then(img => {
          let partners = this.props.data;
          partners[i].imgURL = img.default;
          this.setState({partners});
        });
    }
  }
  render () {
    return (
      <>
        {this.state.partners.map(p =>
          <Profile>
            <PartnerLink
              key={p.name}
              src={p.imgURL}
              alt={p.name}
              size={this.props.logoSize}
              mSize={this.props.mLogoSize} />
            <Description style={{ color: theme.colors.black }}>{p.name}</Description>
            <naming>{p.description}</naming>
          </Profile>
        )}
      </>
    );
  }
}

export default Team;