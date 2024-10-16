import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table"

export function DataTable() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>Alice Johnson</TableCell>
                    <TableCell>alice@example.com</TableCell>
                    <TableCell>Developer</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Bob Smith</TableCell>
                    <TableCell>bob@example.com</TableCell>
                    <TableCell>Designer</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}
