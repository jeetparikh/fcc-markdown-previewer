import React, { Component } from 'react';
import marked from 'marked';
import Editor  from './Editor';
import Preview from './Preview';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.parseInput = this.parseInput.bind(this);
    this.state = {
      compiled: ''
    };
  }

  parseInput(userInput) {
    const compiled = marked(userInput, {sanitize: true});
    this.setState({
      compiled: compiled
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="well well-sm">
              <h2 className="text-center">
                MARKDOWN PREVIEWER USING REACTJS
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 editor-container">
            <Editor parseInput={this.parseInput}/>
          </div>
          <div className="col-md-6 previewer-container">
            <Preview compiled={this.state.compiled} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
