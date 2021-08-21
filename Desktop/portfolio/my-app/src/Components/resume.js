import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './Experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGg0jEBLO1rNZEyPNrWuFMXYoJsC80m7u6Cg&usqp=CAU"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Sakshi Dhawan</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I'm an analystic person with good problem solving skill 
                seeking in the domain of computer, particularly coding.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>House No.102,Fatehgarh Churian</p>
            <h5>Phone</h5>
            <p>70097 34327</p>
            <h5>Email</h5>
            <p>ssakshi_be18@thapar.edu</p>
            <h5>Github</h5>
            <p>https://github.com/Sakshi1708</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
                 startYear={2018}
                 endYear="Present"
                 schoolName="B.E. Electronics & Computer Engineering"
                 schoolDescription="Thapar Institute Of Engineering & Technology"
                 score= {8.67}
                  />

            <Education
                 startYear={2017}
                 endYear={2018}
                 schoolName="Higher Secondary"
                 schoolDescription="Golden View Sen. Sec. School, Punjab"
                 score= {83.3}
                  />

            <Education
              startYear={2015}
              endYear={2016}
              schoolName="Senior Secondary"
              schoolDescription="St. Francis Convent School, Punjab"
              score= {88}
               />

               
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Projects</h2>

            <Experience
              startYear={2019}
              endYear={2020}
              jobName="ShareWala"
              jobDescription="It's Implemented with all the best practices like payment integration, Google authentication."
              />

              <Experience
                startYear={2020}
                endYear={2020}
                jobName="Dev-Connector"
                jobDescription="It's a full stack social network platform using mongo-DB, React, Node JS, Express and Redux along with ES6."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="React"
                progress={90}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={70}
                    />
                    <Skills
                      skill="javascript"
                      progress={60}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;