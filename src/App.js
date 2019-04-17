import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ReactPDF } from 'react-pdf';
import pdf from './cv_17.pdf';

class App extends Component {
  render() {
    return (
      <html>
        <ReactPDF file = {
          {data: pdf}
        }
        />
      </html>
    );
  }
}

export default App;