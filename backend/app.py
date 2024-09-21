from typing  import List

from dotenv import load_dotenv
from fastapi import FastAPI, File, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware

from modules.dxf_to_svg import dxf_to_svg

# Load environment variables
load_dotenv()

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Endpoint for testing
@app.get("/")
def read_root():
    return {"svgFiles": "/Home"}


# Endpoint to handle file upload and call Python DXF to SVG conversion script
@app.post("/dxf_to_svg")
async def convert_dxf_to_svg(files: List[UploadFile] = File(...)):

    try:
        svgFiles = []
        for file in files:
            # Perform the DXF to SVG conversion
            svg_file = await dxf_to_svg(file)
        
            # Return the converted SVG content
            svgFiles.append(svg_file) 

        return{"svgFiles":svgFiles}
    except Exception as e:
        # Handle any errors that occur during the conversion process
        raise HTTPException(status_code=500, detail=str(e))
