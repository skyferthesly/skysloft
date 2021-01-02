import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

class Pdf extends React.Component {
  
  constructor(props) {
    super(props);
    this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
    this.numPages, this.setNumPages = useState(null);
    this.pageNumber, this.setPageNumber = useState(1);
 }

   onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  };

  componentDidMount() {
    window.addEventListener('load', this.onDocumentLoadSuccess);
  }

  componentWillUnmount() { 
    window.removeEventListener('load', this.onDocumentLoadSuccess)  
  }


  render() {
    return (
      <div className="Pdf">
        <Document
          file="cv_18.pdf"
          // onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }
}

export default Pdf;
