import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Pdf from './Pdf'
import { Document, Page } from 'react-pdf';
import './App.css';
import cv_18 from '../static/cv_18.pdf'
import { pdfjs } from 'react-pdf';


// function App() {
//   // const [numPages, setNumPages] = useState(null);
//   // const [pageNumber, setPageNumber] = useState(1);

//   // function onDocumentLoadSuccess({ numPages }) {
//   //   setNumPages(numPages);
//   // }

//   return (
//     <div>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/resume" component={Pdf}/>
//       </Switch>
//     </div>
//   );
// }


function App() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  // const pdf = cv_18
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div>
      <Document
        file={cv_18}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}

export default App;
