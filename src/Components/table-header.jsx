import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export default function TableHeader(props) {
    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Tier</Th>
                    <Th>Source</Th>
                </Tr>
            </Thead>
         </Table>
)}