import { useContext } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileContext } from "@/context/FileContext";

export function TableList() {
  const { options, inputFiles } = useContext(FileContext);
  // const columnQty = Object.keys(inputFiles.fileProperties).length;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Parts</TableHead>
        </TableRow>
        <TableRow className="w-max-1/4">
          <TableHead>Length</TableHead>
          <TableHead>Width</TableHead>
          <TableHead>Qty</TableHead>
          {Object.entries(options).map(([key, value]) => {
            if (value) {
              return <TableHead key={key}>{key}</TableHead>;
            }
          })}
          <TableHead>Options</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {inputFiles.files.properties
          ? inputFiles.map(([key, value]) => (
              <TableRow key={key}>
                <TableCell className="font-medium">{value}</TableCell>
              </TableRow>
            ))
          : Array.from({ length: 3 }, (_, i) => (
              <TableRow key={i}>
                <TableCell>{i}</TableCell>
              </TableRow>
            ))}
      </TableBody>
    </Table>
  );
}
