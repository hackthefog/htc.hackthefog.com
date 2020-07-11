import React from 'react'

import styled from 'styled-components'
import { Heading } from 'components/Text'

import { team as data } from 'data'

class Team extends React.Component {
  render () {
    return (
      <div>
        <Heading>Team:</Heading>
        <TeamGroup
          logoSize={"20rem"}
          mLogoSize={"15rem"}
          data={data.members} />
      </div>
    );
  }
}

/**********************/
/***extra components***/
/**********************/
const TeamWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem 2rem 0;
`
const TeamImg = (props) =>
  (<img src={props.src} alt={props.alt} />);


class TeamGroup extends React.Component {
  constructor () {
    super();
    this.state = {
      teams: []
    };
  }
  componentDidMount () {
    for (let i in this.props.data) {
      import (`images/team/${this.props.data[i].img}`)
        .then(img => {
          let teams = this.props.data;
          teams[i].imgURL = img.default;
          this.setState({teams});
        });
    }
  }
  render () {
    return (
      <TeamWrapper>
        {this.state.teams.map(p =>
          <TeamImg
            key={p.name}
            alt={p.name}
            size={this.props.logoSize}
            mSize={this.props.mLogoSize} />
        )}
      </TeamWrapper>
    );
  }
}

export default Team;
