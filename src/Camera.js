import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const Camera = () => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  };

  const download = () => {
    // Check if there is a captured image to download
    if (!image) return;

    // Create a temporary link element to download the image
    const link = document.createElement('a');
    link.href = image;
    link.download = 'captured_image.jpeg';
    link.click();
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="d-flex align-items-center">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
          />
          {image && <img className="mx-3" src={image} alt="Captured" />}
        </div>
      </div>
      <div className="d-flex justify-content-center my-5" >
        <button className="btn btn-primary me-3" style={{borderRadius:"8px"}} onClick={capture}>
          Capture
        </button>
        <button className="btn btn-success" style={{borderRadius:"8px"}}  onClick={download}>
          Download
        </button>
      </div>
    </>
  );
};

export default Camera;
