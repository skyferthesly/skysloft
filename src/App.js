import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { PDFViewer } from '@react-pdf/renderer';
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

        {/* <PDFViewer src='pdf'/> */}
      </html>
    );
  }
}

export default App;