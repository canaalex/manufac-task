import React, { useState, useEffect } from 'react';
import { Table } from '@mantine/core';

function FlavonoidsTable({ flavonoidsData }) {
  // State to track loading status
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
  }, []);

  if (!flavonoidsData) {
    return <p>No data available</p>;
  }

   const flavonoidsArray = Object.keys(flavonoidsData).map((key) => flavonoidsData[key]);


  if (isLoading) {
    return <p>Loading...</p>;
  }

  const means = flavonoidsArray.map((element) => element.mean.toFixed(3));
  const modes = flavonoidsArray.map((element) => element.mode.toFixed(3));
  const median = flavonoidsArray.map((element) => element.median.toFixed(3));

  return (
    <Table
    style={{
      borderCollapse: 'collapse',
      border: '1px solid black', 
      width: '40%', 
      marginTop:'30px',
      marginLeft:'400px'
    }}
  >
    <Table.Thead>
      <Table.Tr>
        <Table.Th style={{ border: '1px solid black', padding: '8px' }}>Measure</Table.Th>
        <Table.Th style={{ border: '1px solid black', padding: '8px' }}>Class 1</Table.Th>
        <Table.Th style={{ border: '1px solid black', padding: '8px' }}>Class 2</Table.Th>
        <Table.Th style={{ border: '1px solid black', padding: '8px' }}>Class 3</Table.Th>
      </Table.Tr>
    </Table.Thead>
    <Table.Tbody>
      <Table.Tr>
        <Table.Td style={{ border: '1px solid black', padding: '8px',fontWeight:'bold' }}>Flavonoids Mean</Table.Td>
        {means.map((mean, index) => (
          <Table.Td key={index} style={{ border: '1px solid black', padding: '8px' }}>
            {mean}
          </Table.Td>
        ))}
      </Table.Tr>
      <Table.Tr>
        <Table.Td style={{ border: '1px solid black', padding: '8px',fontWeight:'bold' }}>Flavonoids Median</Table.Td>
        {median.map((median, index) => (
          <Table.Td key={index} style={{ border: '1px solid black', padding: '8px' }}>
            {median}
          </Table.Td>
        ))}
      </Table.Tr>
      <Table.Tr>
        <Table.Td style={{ border: '1px solid black', padding: '8px',fontWeight:'bold' }}>Flavonoids Mode</Table.Td>
        {modes.map((mode, index) => (
          <Table.Td key={index} style={{ border: '1px solid black', padding: '8px' }}>
            {mode}
          </Table.Td>
        ))}
      </Table.Tr>
    </Table.Tbody>
  </Table>
  );
}

export default FlavonoidsTable;
