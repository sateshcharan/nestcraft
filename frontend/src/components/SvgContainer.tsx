import React, { useContext } from "react";
import axios from "axios";

import { FileContext } from "@/context/FileContext";

const DxfContainer = () => {
  const { inputFiles, setInputFiles } = useContext(FileContext);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      setInputFiles((prev) => ({
        ...prev,
        files: Array.from(files),
      }));

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
        const svgFiles: string[] = res.data.svgFiles;

        setInputFiles((prev) => ({
          ...prev,
          svgFiles: svgFiles,
        }));
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    } else {
      alert("Please upload a valid DXF file");
    }
  };

  return (
    <div className="w-full flex justify-center items-center ">
      {/* Show file input if no DXF has been uploaded yet */}
      {inputFiles.files?.length === 0 && (
        <input type="file" multiple accept=".dxf" onChange={handleUpload} />
      )}

      {/* Display the converted SVG */}
      {/* {files && <div dangerouslySetInnerHTML={{ __html: files }} />} */}
    </div>
  );
};

export default DxfContainer;
