import { Grid, GridItem, Box, Card, Image, Stack, CardBody, Heading, Text, CardFooter, Button } from "@chakra-ui/react";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import BtmNav from "./components/BtmNav";

const GridExample = () => {
  return (
    <div>
      <Grid templateColumns={{ base: "repeat(1, 10fr)", sm: "repeat(2, 10fr)", md: "repeat(3, 10fr)", lg: "repeat(5, 10fr)" }} gap={6}>
        <Box bg="tomato" height="80px" overflow="auto">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, doloremque est maiores alias unde iusto hic modi commodi sint accusamus reprehenderit officiis in magnam soluta et nostrum voluptatibus quis itaque!</p>
        </Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </Grid>
      {/* <SimpleGrid minChildWidth="80px" spacing="10px">
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid> */}
      <Card direction={{ base: "column", sm: "column", md: "row" }} overflow="hidden" variant="outline">
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">The perfect latte</Heading>

            <Text py="2">Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.</Text>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Buy Latte
            </Button>
          </CardFooter>
        </Stack>
      </Card>

      <BtmNav />
    </div>
  );
};

export default GridExample;
