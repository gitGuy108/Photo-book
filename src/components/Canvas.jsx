import React, { useState } from "react";
import Image from "./Image";
import { useDropzone } from "react-dropzone";

function Canvas(props) {
  const [files, setFiles] = useState([
    [{ preview: "pictures/boats.jpg" }],
    [{ preview: "pictures/accessories.jpg" }],
    [{ preview: "pictures/hilldrive.jpg" }],
    [{ preview: "pictures/waterfall.jpg" }],
    [{ preview: "pictures/hotballons.jpg" }],
  ]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles((prev) => [
        ...prev,
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
      // console.log(acceptedFiles);
    },
  });

  const images = files.map((file) => {
    // console.log(file);
    return (
      <Image
        key={file[0].preview}
        uponClick={props.imageClick}
        src={file[0].preview}
      />
    );
  });

  return (
    <div className="frontBox">
      <div className="canvas container">{images}</div>
      <div className="dropArea" {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag n Drop Images to add to Photobook</p>
      </div>
    </div>
  );
}

export default Canvas;
