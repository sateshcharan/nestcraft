import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";

import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Checkbox } from "./ui/checkbox";

export function Sidebar({ title, description, side, children }: any) {
  return (
    <div id="sidebar">
      <Sheet modal={false} open>
        <SheetContent side={side} className="w-full">
          <ScrollArea className="max-h-full overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-700 scrollbar-track-transparent p-4">
            <SheetHeader>
              <SheetTitle>
                <div className="flex flex-row items-center justify-between">
                  {title}
                  <Button>Nest</Button>
                </div>
              </SheetTitle>

              <SheetDescription>{description}</SheetDescription>
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
                    <div className="flex flex-row items-center gap-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Label Parts
                      </label>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Consider Material
                      </label>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Consider Grain Direction
                      </label>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Edge Banding
                      </label>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Estimate Sheets
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </SheetHeader>

            {children}
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
}
