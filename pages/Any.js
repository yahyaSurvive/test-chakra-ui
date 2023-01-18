import { Box, Text, Table, TableCaption, TableContainer, Tfoot, Thead, Th, Tr, Td, Tbody } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import BtmNav from "./components/BtmNav";

const propertyBtn = {
  as: "button",
  bg: "green",
  borderRadius: "md",
  p: 2,
  m: 2,
  color: "white",
};

const Any = () => {
  return (
    <>
      <Head>
        <title>Budi App</title>
      </Head>
      <Box as={propertyBtn.as} bg={propertyBtn.bg} borderRadius={propertyBtn.borderRadius} p={propertyBtn.p} m={propertyBtn.m} color={propertyBtn.color}>
        <Link href="/">Home</Link>
      </Box>
      <Box bgGradient="linear(to-l, blue.500, purple.500)" w="100%" height="200px">
        Gradient
      </Box>

      <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="6xl" fontWeight="extrabold">
        Welcome to Chakra UI
      </Text>

      {/* Table */}
      <TableContainer mt={"20px"}>
        <Table variant="striped">
          <TableCaption>Data Sampah Per Minggu</TableCaption>
          <Thead>
            <Tr bg={"green.100"}>
              <Th w={"8px"}>ID</Th>
              <Th>Nama</Th>
              <Th>Tanggal Setor</Th>
              <Th>Jumlah (Kg)</Th>
              <Th>Di Bayarkan (Rp)</Th>
              <Th>Petugas</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>Bu Karmila assad asadasa dassada asdasa asasas</Td>
              <Td>18-01-2023</Td>
              <Td>23</Td>
              <Td>15.000</Td>
              <Td>Bu Ayu</Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>Bu Ana</Td>
              <Td>18-01-2023</Td>
              <Td>23</Td>
              <Td>15.000</Td>
              <Td>Bu Ayu</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      {/*End Table */}

      <BtmNav />
    </>
  );
};

export default Any;
