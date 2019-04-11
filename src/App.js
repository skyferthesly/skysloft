import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { return_latex_string } from './resume.mjs'

var latex_string = return_latex_string()
var Latex = require('react-latex');
var katex = require('katex');

class App extends Component {
  render() {
    return (
      <html>
        <head>
            <link href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css" rel="stylesheet">
            </link>
        </head>
        <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
            <h3>
                    <Latex>What is $(3\times 4) \div (5-3)$</Latex>
                    <Latex displayMode={true}>$$(3\times 4) \div (5-3)$$</Latex>
                    <Latex displayMode={true}>$$(3\times 4) \div (5-3)$$</Latex>
            </h3>
        </div>

        <Input/>
    </html>
    );
  }
}

export default App;


class Input extends React.Component {
  constructor() {
    super();
    this.state = {text: ''};
    this.updateText = this.updateText.bind(this);
  }

  updateText(event) {
    var nText = event.target.value;
    this.setState(function () {
      return {text: nText};
    });
  }

  render() {
    var text = this.state.text;
    return (
      <div>
        <input type="text" 
         onChange={this.updateText}/>
         <LatexDisplay data={text}/>
      </div> );
  }
}

class LatexDisplay extends React.Component {
  render() {
    var math = katex.renderToString(this.props.data);
    return (<p dangerouslySetInnerHTML={ {__html: math} }/>);
  }
}