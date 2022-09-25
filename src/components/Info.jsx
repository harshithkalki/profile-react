import React from 'react';
import { useColorMode, useMediaQuery,Stack, Circle ,Flex , Image, Box, Heading} from '@chakra-ui/react';

function Info() {
    const {colorMode}=useColorMode();
    const isDark=colorMode==='dark';
    const [isNotSmallerScreen]=useMediaQuery("(min-width:600px)")
  return (
    <Flex direction={isNotSmallerScreen?"column":"row"}>

    <Box>
        <Heading>Hi , I'm</Heading>
    </Box>
    </Flex>
  )
}

export default Info