// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { ReactPDF } from 'react-pdf';
// import pdf from './cv_17.pdf';

// class App extends Component {
//   render() {
//     return (
//       <html>
//         <ReactPDF file = {
//           {data: pdf}
//         }
//         />
//       </html>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import './App.less';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

export default class App extends Component {
  state = {
    file: './cv_17.pdf',
    numPages: null,
  }

  onFileChange = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { file, numPages } = this.state;

    return (
      <div className="Example">
        <header>
          <h1>react-pdf App page</h1>
        </header>
        <div className="Example__container">
          <div className="Example__container__load">
            <label htmlFor="file">Load from file:</label>
            {' '}
            <input
              type="file"
              onChange={this.onFileChange}
            />
          </div>
          <div className="Example__container__document">
            <Document
              file={file}
              onLoadSuccess={this.onDocumentLoadSuccess}
              options={options}
            >
              {
                Array.from(
                  new Array(numPages),
                  (el, index) => (
                    <Page
                      key={`page_${index + 1}`}
                      pageNumber={index + 1}
                    />
                  ),
                )
              }
            </Document>
          </div>
        </div>
      </div>
    );
  }
}