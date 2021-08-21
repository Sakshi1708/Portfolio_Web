import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p style={{color: "#ff4d94"}}>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h5 style={{marginTop:'0px'}}>{this.props.schoolName}</h5>
          <h4>{this.props.schoolDescription}</h4>
          <h8 style={{color: "#ffad33"}}>Score: {this.props.score}</h8>
        </Cell>
      </Grid>
    )
  }
}

export default Education;