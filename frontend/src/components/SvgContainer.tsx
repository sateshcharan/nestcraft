import React, { useState } from "react";
import axios from "axios";

type Props = {};

const DxfContainer = (props: Props) => {
  const [dxfSvg, setDxfSvg] = useState<string>("");

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);

    if (file && file.type === "") {
      const formData = new FormData();
      formData.append("file", file);

      try {
        // Send the DXF file to the server to convert it to SVG
        const res = await axios.post(
          "http://localhost:3000/convert-dxf",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        // Assume the server sends back SVG data
        console.log(res.data);
        // setDxfSvg(res.data.svg); // Store the SVG content
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
      {!dxfSvg && <input type="file" accept=".dxf" onChange={handleUpload} />}

      {/* Display the converted SVG */}
      {dxfSvg && <div dangerouslySetInnerHTML={{ __html: dxfSvg }} />}
    </div>
  );
};

export default DxfContainer;
