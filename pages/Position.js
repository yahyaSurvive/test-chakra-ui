import { Box, Image } from "@chakra-ui/react";
import Link from "next/link";
import BtmNav from "./components/BtmNav";

const Position = () => {
  return (
    <Box>
      {/* shorthand */}
      <Box pos="absolute">Cover</Box>
      <Box pos="absolute" top="0" right="-0">
        Absolute with top and right
      </Box>

      <Box zIndex={1}>
        <Image w={"1000px"} src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
      </Box>

      <BtmNav />
    </Box>
  );
};

export default Position;
