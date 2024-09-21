import { MouseEventHandler, useContext } from "react";
import { FileContext } from "@/context/FileContext";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

type props = {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
};

export function Sidebar({ title, description, children, className }: props) {
  const { options, setOptions } = useContext(FileContext);

  const handleCheck = (event: React.MouseEvent<HTMLButtonElement>) => {
    const key: string = event.currentTarget.id;

    setOptions((prev) => {
      return {
        ...prev,
        [key]: !prev[key],
      };
    });
  };

  return (
    <div className={className}>
      <ScrollArea className="max-h-full overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-700 scrollbar-track-transparent p-4">
        <header>
          <title>
            <div className="flex flex-row items-center justify-between">
              {title}
              <Button>Nest</Button>
            </div>
          </title>

          <title>{description}</title>
          {title === "Input Data" && (
            <div className="flex flex-col gap-4">
              <div className="flex  items-center justify-start gap-4">
                <Button variant="outline">Import Dxf's</Button>
                <Button variant="outline">Import CSV</Button>
              </div>
              <div>
                <Label htmlFor="number">Cut / Blade / Kerf thickness</Label>
                <Input type="number" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(options).map(([key]) => (
                  <div className="flex flex-row items-center gap-2" key={key}>
                    <Checkbox id={key} onClick={handleCheck} />
                    <label
                      htmlFor={key}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {key}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </header>
        {children}
      </ScrollArea>
    </div>
  );
}
