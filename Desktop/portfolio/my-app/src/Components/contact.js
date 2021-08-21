import React,{Component}  from 'react';
import {Grid,Cell, List, ListItem, ListItemContent} from 'react-mdl';

class contact extends Component {
    render(){
    return (
        <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>Sakshi Dhawan</h2>
                    <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGg0jEBLO1rNZEyPNrWuFMXYoJsC80m7u6Cg&usqp=CAU"
                    alt="avatar"
                    style={{height: '250px'}}
                    />
                    <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Looking for opportunities to incorporate my skills and training to help the company grow</p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr/>
                    <div className="contact-list">
                    <List>
                        <ListItem>
                        <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                            <i className="fa fa-phone-square" aria-hidden="true"/>
                            (+91) 7009734327
                        </ListItemContent>
                        </ListItem>

                        <ListItem>
                        <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                            <i className="fa fa-fax" aria-hidden="true"/>
                            (123) 456-7890
                        </ListItemContent>
                        </ListItem>

                        <ListItem>
                        <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                            <i className="fa fa-envelope" aria-hidden="true"/>
                            ssakshi_be18@thapar.edu
                        </ListItemContent>
                        </ListItem>

                        <ListItem>
                        <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                            <i className="fa fa-skype" aria-hidden="true"/>
                            MySkypeID
                        </ListItemContent>
                        </ListItem>
                    </List>
                    </div>
                </Cell>
            </Grid>
        </div>
    );
}
}

export default contact;
