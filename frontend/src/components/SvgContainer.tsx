import React, { useState, useContext } from "react";
import { FileContext } from "@/context/FileContext";
import axios from "axios";

const DxfContainer = () => {
  const { files, setFiles } = useContext(FileContext);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      const formData = new FormData();

      // Append each file individually to the formData
      Array.from(files).forEach((file) => {
        formData.append("files", file); // Use "files" as the key for all files
      });

      try {
        // Send the DXF file to the server to convert it to SVG
        const res = await axios.post(
          "http://localhost:8000/dxf_to_svg",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        // Assume the server sends back SVG data
        const svgFiles = res.data;
        setFiles(svgFiles); // Store the SVG content
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    } else {
      alert("Please upload a valid DXF file");
    }
  };

  return (
    <div>
      {/* Show file input if no DXF has been uploaded yet */}
      {files?.length === 0 && (
        <input type="file" multiple accept=".dxf" onChange={handleUpload} />
      )}

      {/* Display the converted SVG */}
      {/* {files && <div dangerouslySetInnerHTML={{ __html: files }} />} */}
    </div>
  );
};

export default DxfContainer;
