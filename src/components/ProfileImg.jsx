import { useColorMode, useMediaQuery,Stack, Circle ,Flex , Image, Box, Heading , Text} from '@chakra-ui/react';
// import profilpic from './kalki.jpg';
import Info from './Info';

import React from 'react'

function ProfileImg() {
    const {colorMode}=useColorMode();
    const isDark=colorMode==='dark';
    const [isNotSmallerScreen]=useMediaQuery("(min-width:600px)")
    const heigth= isNotSmallerScreen?"400px":"300px";
    const width= isNotSmallerScreen?"400px":"300px";
  return (
    <Stack mt="10vh" ml={7}>
        {/* <Circle bgImage={()=>{<img src='./kalki.jpg' w='300px' h='300px'></img>}}> </Circle> */}
        <Flex direction={isNotSmallerScreen?"row":"column"}>
        <Circle /*position={isNotSmallerScreen?'absolute':'initial'} */bg="blue.200"  h={isNotSmallerScreen?"400px":"300px"} w={isNotSmallerScreen?"400px":"300px"}>
            {/* <Circle position='absolute' bg="green.100" h="300px" w='300px'></Circle> */}
            <Image src="https://avatars.githubusercontent.com/u/39216973?v=4" h={isNotSmallerScreen?"330px":"250px"} w={isNotSmallerScreen?"330px":"250px"} borderRadius="100%" opacity="1.0"></Image>
        </Circle>
        <Box ml={isNotSmallerScreen?"20vw":"6"} mt="50px">
        <Heading fontSize="5xl">Hi , I'm</Heading>
        <Heading >Harshith kalki</Heading>
        <Text></Text>
    </Box>
        {/* <Info></Info> */}
    </Flex>
    </Stack>
  )
}

export default ProfileImg