import React, {Component} from 'react';
import profile from '../../Pictures/default-profile-picture.png';
//import profile from '../../Pictures/profile.jpg';

export default class AboutMe extends Component{
    render() {
        const styles = {
            backgroundImage: `url(${profile})`
        }
        return(
            <div className="container intro-container">
                <h3>About Me</h3>
                <div className="row clearfix">
                    <div className="col-xs-12 col-sm-4 col-md-3 no-print">
                        <span style={styles} className="profile-img"></span>
                    </div>
                    <div className="col-xs-12 col-sm-8 col-md-9 col-print-12">
                        <p>Hi, my name’s Marco and im a student at the Hogeschool Zuyd. As well as making software such as mobile apps and web apps I'm also not affraid to tinker with a server config. I'm a teamplayer and not affraid to learn a new language or framework!</p>

                        <p>I am most skilled in: <mark>ASP.NET Core</mark> and <mark>Eating Pizza</mark></p>
                    </div>
                </div>
            </div>
        );

    }
}