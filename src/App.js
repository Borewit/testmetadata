import React, { useCallback } from "react";
import * as mm from "music-metadata-browser";
import { useDropzone } from "react-dropzone";

function MyDropzone() {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    const metadata = mm.parseReadableStream(file.stream());

    metadata.then((result) => {
      console.log(result);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
}

export default function App() {
  return <MyDropzone />;
}
