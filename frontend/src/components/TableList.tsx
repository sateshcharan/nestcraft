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

let invoices: any;

export function TableList() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Length</TableHead>
          <TableHead>Wdith</TableHead>
          <TableHead>Qty</TableHead>
          <TableHead className="text-right">Material</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {invoices &&
          invoices.map((invoice: any) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}

        {!invoices &&
          Array.from({ length: 5 }, (_, i) => {
            return (
              <TableRow key={i}>
                <TableCell>{i}</TableCell>
                <TableCell>{i}</TableCell>
                <TableCell>{i}</TableCell>
                <TableCell>{i}</TableCell>
              </TableRow>
            );
          })}
      </TableBody>

      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
