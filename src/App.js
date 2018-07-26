import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';

import './App.css';

class App extends Component {
  
  constructor(){
    super();
    // when using constructor, must first pass in a super();
    this.state = {
      projects : [],
      todos:[]
    }
  }
  
  getTodos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({todos:data}, function(){
          console.log(this.state);
        });
      }.bind(this), 
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  getProjects(){
    this.setState({
      projects: [{

        id: uuid.v4(),
        title: 'Portfolio',
        category: 'Web Dev'
      },
      {
        id: uuid.v4(),
        title: 'Consulting Website',
        category: 'Web Dev'
      },
      {
        id: uuid.v4(),
        title: 'Client Site',
        category: 'Web Dev'
      }]

    })

  // when using AJAX to fetch external data from an API, you'll want to use this (OR componentDidMount)Life Cycle Method.
  }

  componentWillMount(){
      this.getProjects();
      this.getTodos();
  }

  componentDidMount(){
    this.getTodos();
  }
  
  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>

        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
        {/* A1) whatever comes after Projects component is a prop? */}

        <hr />

        <Todos todos={this.state.todos} />

        {/* <Projects test="Hello World" /> */}
        {/* The line above lets you pass whatever 'test' variable is into other components */}


      </div>
    );
  }
}

export default App;


// 23:10 explains the process flow