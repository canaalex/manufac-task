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
    // If flavonoidsData is undefined or null, return null or display an error message
    return <p>No data available</p>;
  }

   // Convert flavonoidsData object to an array
   const flavonoidsArray = Object.keys(flavonoidsData).map((key) => flavonoidsData[key]);


  if (isLoading) {
    return <p>Loading...</p>;
  }

  

  const means = flavonoidsArray.map((element) => element.mean);
  const modes = flavonoidsArray.map((element) => element.mode);
  const median = flavonoidsArray.map((element) => element.median);

  return (
    <Table
    style={{
      borderCollapse: 'collapse',
      border: '1px solid black',
      width: '100%', 
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
        <Table.Td style={{ border: '1px solid black', padding: '8px' }}>Flavonoids Mean</Table.Td>
        {means.map((mean, index) => (
          <Table.Td key={index} style={{ border: '1px solid black', padding: '8px' }}>
            {mean}
          </Table.Td>
        ))}
      </Table.Tr>
      
      <Table.Tr>
        <Table.Td style={{ border: '1px solid black', padding: '8px' }}>Flavonoids Median</Table.Td>
        {median.map((median, index) => (
          <Table.Td key={index} style={{ border: '1px solid black', padding: '8px' }}>
            {median}
          </Table.Td>
        ))}
      </Table.Tr>
     
      <Table.Tr>
        <Table.Td style={{ border: '1px solid black', padding: '8px' }}>Flavonoids Mode</Table.Td>
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
