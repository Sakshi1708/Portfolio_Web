import React,{Component} from'react';
import {Grid,Cell} from 'react-mdl';
class landingPage extends Component {
    render(){
    return (
        <div style ={{width:'100%',margin:'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGg0jEBLO1rNZEyPNrWuFMXYoJsC80m7u6Cg&usqp=CAU"
                        alt="avatar"
                        className="avatar-img"
                    />
                    <div className="banner-text">
                        <h1> FULL STACK WEB DEVELOPER</h1>
                        <hr/>
                        <p>HTML / CSS  |  Bootstrap  |  Javascript  |  React  |  Express  |  NodeJs  |  MongoDB </p>

                        <div className="social-links">

                            {/* linkedin*/ }
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                            </a>

                            {/* Github*/ }
                            
                            <a href="https://github.com/Sakshi1708" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"></i>
                            </a>

                            {/* You-tube*/ }
                            
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square" aria-hidden="true"></i>
                            </a>

                            
                        </div>
                    </div>
                </Cell>
            </Grid>
        </div>
    );
}
}

export default landingPage;
