import React from 'react';
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'

import 'bootstrap/dist/css/bootstrap.css';
import './Styles/styles.scss'


function App() {
  return (
    <main className="page-content">
        <div className="wrapper">
            <AboutMe/>
            <Projects projects={projects} github={github}/>
        </div>
    </main>
  );
}

const projects = [
    {
        title: 'Super awesome project',
        quote: 'This is the best project ever made',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.',
        github: {
            url: 'https://github.com/mwillems1994/SmartMobileProftaak',
            displayText: 'Super awesome project'
        }
    },
    {
        title: 'Super awesome project 2',
        quote: 'This is the second best project ever made',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.',
        github: {
            url: 'https://github.com/mwillems1994/SmartMobileProftaak',
            displayText: 'Super awesome project 2'
        }
    }
];
const github = {
    url: 'https://github.com/mwillems1994/',
    displayText: 'mwillems1994'
}

export default App;
