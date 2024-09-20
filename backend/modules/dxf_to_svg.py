import os
import ezdxf
import shutil
from io import StringIO
from ezdxf.addons.drawing import Frontend, RenderContext, svg, layout

# Ensure upload folder exists
UPLOAD_FOLDER = "uploads"
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

async def dxf_to_svg(file):
    try:
        # Save the uploaded DXF file
        file_location = f"{UPLOAD_FOLDER}/{file.filename}"
        with open(file_location, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        # Read and parse the DXF file
        doc = ezdxf.readfile(file_location)
        msp = doc.modelspace()


        # Set up the rendering context
        ctx = RenderContext(doc)
        backend = svg.SVGBackend()
        frontend = Frontend(ctx, backend)

        # Draw the layout in SVG format
        frontend.draw_layout(msp)

        page = layout.Page(210, 297, layout.Units.mm, margins=layout.Margins.all(20))
        
        # Get the SVG content as a string
        svg_string = backend.get_string(page)
        
        # Optional: Save the SVG as a file
        # with open("output.svg", "wt", encoding="utf8") as fp:
        #     fp.write(svg_string)

        return svg_string

    except Exception as e:
        return {"error": str(e)}
