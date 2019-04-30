import React, {Component} from 'react';

export default class Experience extends Component{
    render() {
        return(
            <div className="container experience-container">
                <h3>Experience</h3>
                {
                    this.props.experiences.map((experience, key) => {
                        return renderExperience(key, experience);
                    })
                }
            </div>
        );
    };
}

const renderExperience = (key, experience) => {
    return (
        <div className="row clearfix experience" key={key}>
            <div className="col-xs-12 col-sm-4 col-md-3 col-print-12 left-column">
                <h4 className="name"><a href="http://boringcompany.com" target="_blank">{experience.companyName}</a></h4>
                <p><b>{experience.title}</b></p>
                <p>{experience.timespan}</p>
            </div>
            <div className="col-xs-12 col-sm-8 col-md-9 col-print-12">
                <p className="quote">{experience.quote}</p>
                <p>{experience.description}</p>
            </div>
        </div>
    );
};