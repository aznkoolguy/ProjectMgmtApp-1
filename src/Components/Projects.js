import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProjectItem from './ProjectItem';


class Projects extends Component {
    deleteProject(id){
        this.props.onDelete(id);
    }
    
    render() {

        let projectItems;
        if (this.props.projects) {
            projectItems = this.props.projects.map(project => {
                // console.log(project);
                return (
                    <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
                );
            });
        }




        // console.log(this.props);
        // Q1) how does it know that "props" refers to this.state.projects?
        return (
            <div className="Projects">
            <h3>Projects:</h3>
                {projectItems}
                {/* {this.props.test} */}
                {/* The above passes information that is set in other .js files */}
      </div>
        );
    }
}

Projects.propTypes = {
    projects: PropTypes.object,
    onDelete: PropTypes.func
}
// this acts as a validation i.e. if input is string, inspect will throw errors. Will not stop submission though


export default Projects;
