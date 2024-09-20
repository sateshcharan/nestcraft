import { Sidebar } from "../components/Sidebar";
import { TableList } from "../components/TableList";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import { PreviewCarousel } from "@/components/PreviewCarousel";
import SvgContainer from "@/components/SvgContainer";

const Workbench = () => {
  return (
    <div className="flex  justify-between items-center min-h-screen">
      <Sidebar
        side="left"
        title="Input Data"
        description="Enter or upload your data below and click calculate to get started"
      >
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="pt-4"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="w-full flex flex-row justify-between items-center ">
                <h3>Parts</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <TableList />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="pt-4"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="w-full flex flex-row justify-between items-center ">
                <h3>Stock</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <TableList />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Sidebar>

      <PreviewCarousel />
      <SvgContainer />

      <Sidebar
        side="right"
        title="Results"
        description="Refer Below for the results of your calculations"
      >
        <TableList />
      </Sidebar>
    </div>
  );
};

export default Workbench;
