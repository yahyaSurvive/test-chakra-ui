import { Menu, MenuButton, MenuList, MenuItem, Button, IconButton, FormControl, FormLabel, FormHelperText, Input, Text, Box } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import BtmNav from "./components/BtmNav";

const Index = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Yahya App</title>
      </Head>
      <main>
        <h1>YAHYA</h1>
        <Menu>
          <MenuButton as={Button} rightIcon={<IoIosArrowDown />}>
            Actions
          </MenuButton>
          <MenuList style={{ overflow: "auto", height: "200px" }}>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
        <IconButton aria-label="serach database" icon={<IoIosSearch />} />
        <FormControl width={{ base: "200px", sm: "300px", sm: "400px", lg: "500px" }} bg={{ base: "black", sm: "red.200", md: "blue.200", lg: "green.200" }}>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>We will never share your email.</FormHelperText>
        </FormControl>
        <Text fontSize={{ base: "24px", md: "40px", lg: "56px" }}>This is responsive text</Text>
        <Box width={400} height={400} bg="red.100" />

        <Button colorScheme={"red"} onClick={() => router.push("/Grid")}>
          Grid
        </Button>

        <Button variant={"solid"} colorScheme="whatsapp" m="2" onClick={() => router.push("Modals")}>
          Modal Page
        </Button>

        <Button onClick={() => router.push("/Any")}>Any</Button>
        <Button mx={"2"} colorScheme="facebook" onClick={() => router.push("/Position")}>
          Position
        </Button>
      </main>

      <BtmNav />
    </>
  );
};

export default Index;
