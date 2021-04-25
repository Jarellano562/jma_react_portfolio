
import React from 'react';
import ProjectCards from '../../components/Project'
import portfolio from '../../portfolio.json'
import 'bootstrap/dist/css/bootstrap.min.css';

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Portfolio() {

    return (
        <section>
            <div className="project">
                <img src="https://img.icons8.com/dusk/64/000000/development-skill.png" />
                
                <img src="https://img.icons8.com/dusk/64/000000/computer.png" />
                
                <img src="https://img.icons8.com/dusk/64/000000/development-skill.png" />

                <h1 className="title">Development Portfolio</h1>
                
                <hr></hr>
            </div>

            <Wrapper id="card-data">
                {portfolio.map((project) => (
                    <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} topics={project.topics} />
                ))}
            </Wrapper>
        </section>

    );
}

export default Portfolio;