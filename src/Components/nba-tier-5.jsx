import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export default function NBATier5(props) {
    return (
        <Table>
            <Tbody>
                <Tr>
                    <Td>Woj</Td>
                    <Td>@Woj</Td>
                </Tr>
            </Tbody>
        </Table>
    )
}