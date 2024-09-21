import os
import ezdxf
import shutil
from io import StringIO
from ezdxf.addons.drawing import Frontend, RenderContext, svg, layout
from ezdxf.addons.drawing.properties import LayoutProperties
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

        # # get the modelspace properties
        # msp_properties = LayoutProperties.from_layout(msp)

        # # set light gray background color and black foreground color
        # msp_properties.set_colors("#eaeaea")

        # Set up the rendering context
        ctx = RenderContext(doc)
        backend = svg.SVGBackend()
        frontend = Frontend(ctx, backend)

        # Draw the layout in SVG format
        frontend.draw_layout(msp)

        page = layout.Page(150 , 150, layout.Units.mm, margins=layout.Margins.all(0))
        
        # Get the SVG content as a string
        svg_string = backend.get_string(page)


        # Optional: Save the SVG as a file
        # with open("output.svg", "wt", encoding="utf8") as fp:
        #     fp.write(svg_string)

        return svg_string

    except Exception as e:
        return {"error": str(e)}
