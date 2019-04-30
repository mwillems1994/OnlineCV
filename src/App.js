import React from 'react';
import Header from "./Components/Header";
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'
import Experience from "./Components/Experience";
import Education from "./Components/Education";

import './Styles/styles.scss'

function App() {
  return (
    <main className="page-content">
        <div className="overlay no-print" onClick={hideOverlay}>
            <div className="h-100 row align-items-center">
                <h1 className="col text-center">This page is still under construction!</h1>
            </div>
        </div>
        <div className="wrapper">
            <Header/>
            <AboutMe/>
            <Projects projects={projects} github={github}/>
            <Experience experiences={experiences}/>
            <Education education={education}/>
        </div>
    </main>
  );
}

const hideOverlay = () => {
    document.getElementsByClassName("overlay")[0].style.display = "none";
}

const projects = [
    {
        title: 'Super awesome project',
        quote: 'This is the best project ever made',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.',
        github: {
            url: 'https://github.com/',
            displayText: 'Super awesome project'
        }
    },
    {
        title: 'Super awesome project 2',
        quote: 'This is the second best project ever made',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.',
        github: {
            url: 'https://github.com/',
            displayText: 'Super awesome project 2'
        }
    }
];

const experiences = [
    {
        companyName: 'Awesome company',
        title: 'Title',
        timespan: '2016 - 2017',
        quote: 'Doing awesome stuff while being awesome!',
        description: 'Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.'
    }
];

const education = [
    {
        school: 'Awesome school',
        study: 'Awesome study',
        timespan: '2014 - 2018',
        quote: 'This awesome school was founded in 19...... . ...... ..... ..... ... . ..... . ...... ...',
        description: 'Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.'

    }
];
const github = {
    url: 'https://github.com',
    displayText: 'Marco'
}

export default App;
