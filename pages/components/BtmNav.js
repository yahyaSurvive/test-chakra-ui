import Link from "next/link";
import { Center, Box } from "@chakra-ui/react";

const BtmNav = () => {
  return (
    <>
      <Center>
        <Box
          display={"flex"}
          justifyContent="space-evenly"
          alignItems={"center"}
          pos="fixed"
          bottom={"10px"}
          w="70%"
          bg={"blue.300"}
          h="60px"
          borderRadius={"md"}
          zIndex={2}
          color="white"
          fontSize={{ base: "10pt", sm: "11pt", md: "12pt", lg: "14pt" }}
          fontWeight="semibold"
        >
          <Link href="/">Home</Link>
          <Link href="/Modals">Modals</Link>
          <Link href="/Position">Position</Link>
          <Link href="/Grid">Grid</Link>
          <Link href="/Any">Any</Link>
          <Link href="/Alert">Alert</Link>
        </Box>
      </Center>
    </>
  );
};

export default BtmNav;
