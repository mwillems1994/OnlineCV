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
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>

                        <p>I am most skilled in: <mark>ASP.NET Core</mark> and <mark>Eating Pizza</mark></p>
                    </div>
                </div>
            </div>
        );

    }
}