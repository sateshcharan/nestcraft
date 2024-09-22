import { Sidebar } from "../components/Sidebar";
import { TableList } from "../components/TableList";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { PreviewCarousel } from "@/components/PreviewCarousel";
import SvgContainer from "@/components/SvgContainer";

const Workbench = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden justify-between">
      <Sidebar
        title="Input Data"
        description="Enter or upload your data below and click calculate to get started"
        className="w-1/4 bg-slate-100"
      >
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="pt-4"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Parts</AccordionTrigger>
            <AccordionContent>
              <TableList />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Sidebar>

      <PreviewCarousel />
      <SvgContainer />

      <Sidebar
        title="Output Data"
        description="Get your results here"
        className="w-1/4 bg-slate-100"
      >
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="pt-4"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Results</AccordionTrigger>
            <AccordionContent>
              <TableList />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Sidebar>
    </div>
  );
};

export default Workbench;
