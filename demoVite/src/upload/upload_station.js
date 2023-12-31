// upload_station.js

export function storePDF() {
  const pdfInput = document.getElementById('pdf-file-input');
  const file = pdfInput.files[0];
  const username = localStorage.getItem('username');

  if (file) {
    const formData = new FormData();
    formData.append('pdf', file);
    formData.append('filename', file.name);
    formData.append('username',username) // Add the filename to the form data

    fetch('/upload-pdf', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('PDF uploaded successfully:', data);
        // You can add code here to display a success message or update the UI.
      })
      .catch(error => {
        console.error('Error uploading PDF:', error);
        // Handle the error, display an error message, or log it.
      });
  } else {
    console.error('No file selected');
  }
}
export function getPDF() {
  const fileName = document.getElementById('pdf-file-name').value;
  console.log('Getting PDF:', fileName);
  fetch('/get-pdf/' + fileName, {
    method: 'GET',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.arrayBuffer(); // Change this to response.arrayBuffer()
    })
    .then(buffer => {
      // Now you can use the buffer for further processing
      const url = URL.createObjectURL(new Blob([buffer], { type: 'application/pdf' }));
      console.log(url);
      // Rest of your code to display the PDF

      // Remove existing PDF viewer content
      const pdfViewer = document.getElementById('pdf-viewer');
      pdfViewer.innerHTML = '';

      // Create an <embed> element to display the PDF
      const embedElement = document.createElement('embed');
      embedElement.src = url;
      embedElement.type = 'application/pdf';
      embedElement.width = '100%';
      embedElement.height = '600px';

      // Append the <embed> element to the PDF viewer container
      pdfViewer.appendChild(embedElement);

      console.log('PDF retrieved successfully');
    })
    .catch(error => {
      alert('PDF not found. Please try again. Make sure to include the file extension (e.g. .pdf)');
      console.error('Error retrieving PDF:', error);
      // Handle the error, display an error message, or log it.
    });
}
