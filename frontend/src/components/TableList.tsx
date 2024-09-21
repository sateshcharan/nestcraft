import { useContext } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileContext } from "@/context/FileContext";

export function TableList() {
  const { options, inputFiles } = useContext(FileContext);
  const columnQty = Object.keys(inputFiles.fileProperties).length;

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead colSpan={columnQty}>Hello</TableHead>
        </TableRow>
        <TableRow>
          <TableHead className="w-10">Length</TableHead>
          <TableHead>Wdith</TableHead>
          <TableHead>Qty</TableHead>
          {Object.entries(options).map(([key, value]) => {
            if (value) {
              return <TableHead key={key}>{key}</TableHead>;
            }
          })}
        </TableRow>
      </TableHeader>

      {/* populates the table values     */}
      <TableBody>
        {inputFiles.fileProperties
          ? Object.entries(inputFiles.fileProperties).map(([key, value]) => (
              <TableRow key={key}>
                {/* <TableCell className="font-medium">{value}</TableCell> */}
              </TableRow>
            ))
          : Array.from({ length: 3 }, (_, i) => (
              <TableRow key={i}>
                <TableCell>{i}</TableCell>
                <TableCell>{i}</TableCell>
                <TableCell>{i}</TableCell>
              </TableRow>
            ))}
      </TableBody>
    </Table>
  );
}
