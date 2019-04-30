import React, {Component} from 'react';

export default class Education extends Component{
    render() {
        return(
            <div className="container education-container">
                <h3>Education</h3>
                {
                    this.props.education.map((education, key) => {
                        return renderProject(key, education, this.props.github);
                    })
                }
            </div>
        );
    };
}

const renderProject = (key, education) => {
    return (
        <div className="row clearfix education">
            <div className="col-xs-12 col-sm-4 col-md-3 col-print-12 left-column">
                <h4>{education.school}</h4>
                <p><b>{education.study}</b></p>
                <p>{education.timespan}</p>
            </div>
            <div className="col-xs-12 col-sm-8 col-md-9 col-print-12">
                <p className="quote">{education.quote}</p>
                <p>{education.description}</p>
            </div>
        </div>
    );
};