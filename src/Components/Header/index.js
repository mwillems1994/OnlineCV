import React, {Component} from 'react';

export default class Header extends Component{
    render() {
        return(
            <div className="container header-contianer">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-8 header-left">
                        <h1>Marco Willems</h1>
                        <h2>Student</h2>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 header-right">
                        <ul className="icons no-print">
                            <li>
                                <a target="_blank" href="https://github.com/"
                                   className="button button--sacnite button--round-l">
                                    <i className="fa fa-github" title="Github link"></i>
                                </a>
                            </li>
                        </ul>
                        <p>
                            Email: <a href="mailto:sollicitatie@marcowillems.nl" target="_blank">sollicitatie@marcowillems.nl</a>
                        </p>
                        <p>
                            Web: <a href="https://www.marcowillems.nl"
                                target="_blank">https://marcowillems.nl
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}