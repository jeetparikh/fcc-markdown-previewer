import React from 'react';
import './Editor.css';

// http://davidwalsh.name/javascript-debounce-function
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.delay = debounce((e) => {
      this.props.parseInput(this.userInput.value)
    }, 0); //pass a higher value in milliseconds to have a delay when user is typing if there are performance issues
  }

  handleChange(e) {
    this.delay(e);
  }

  componentWillMount() {
    let initialText = `### Some Basic Markdown to get you started \n\n`;
    initialText += `Emphasis, aka italics, with *asterisks* or _underscores_  \n`;
    initialText += `Strong emphasis, aka bold, with **asterisks** or __underscores__.  \n`;
    initialText += `Combined emphasis with **asterisks and _underscores_**.  \n`;
    initialText += `Strikethrough uses two tildes. ~~Scratch this.~~  \n`;
    initialText += `Use double space at the end of line for newline  \n`;
    initialText += `        \n\n`;
    initialText += `**Links**  \n`;
    initialText += `[I'm an inline-style link](https://www.google.com)  \n`;
    initialText += `        \n\n`;
    initialText += `**Code**  \n`;
    initialText += `Inline \`code\` has \`back-ticks around\` it.  \n`;
    initialText += `        \n\n`;
    initialText += `**Lists**  \n`;
    initialText += `1. First ordered list item  \n`;
    initialText += `2. Another item      \n`;
    initialText += `        \n\n`;
    initialText += `By [Jeet Parikh](http://www.jeetp.com)      \n`;
    this.initialText = initialText;
  }

  componentDidMount() {
    this.handleChange();
  }

  render() {
    return (
        <textarea className="editor" onChange={this.handleChange}
          ref={(input) => this.userInput = input} defaultValue={this.initialText}></textarea>
      )
    }
  }
