import React, {Component} from 'react';

export default class Projects extends Component{
    render() {
        return(
            <div className="container projects-container">
                <h3>Projects</h3>
                {
                    this.props.projects.map((project, key) => {
                        return renderProject(key, project, this.props.github);
                    })
                }
            </div>
        );
    };
}

const renderProject = (key, project, github) => {
    return (
        <div className="row clearfix project" key={key}>
            <div className="col-xs-12 col-sm-4 col-md-3 col-print-12 left-column">
                <h4>{project.title}</h4><a href={github.url} target="_blank" rel="noopener noreferrer" className="project-link">{github.displayText}</a><p className="no-print">
                <a href={project.github.url} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github" title={project.github.displayText}></i>
                </a>
            </p>
            </div>
            <div className="col-xs-12 col-sm-8 col-md-9 col-print-12"><p className="quote">{project.quote}</p>
                <p>{project.description}</p>

            </div>
        </div>
    );
};