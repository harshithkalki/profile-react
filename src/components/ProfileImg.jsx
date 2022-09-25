import { useColorMode, useMediaQuery,Stack, Circle ,Flex , Image, Box, Heading , Text} from '@chakra-ui/react';
// import profilpic from './kalki.jpg';

import React from 'react'

function ProfileImg() {
    const {colorMode}=useColorMode();
    // const isDark=colorMode==='dark';
    const [isNotSmallerScreen]=useMediaQuery("(min-width:600px)")
    // const heigth= isNotSmallerScreen?"400px":"300px";
    // const width= isNotSmallerScreen?"400px":"300px";
  return (
    <Stack mt={isNotSmallerScreen?"12vh":"10vh"} ml={isNotSmallerScreen?"10vw":"7"}>
        {/* <Circle bgImage={()=>{<img src='./kalki.jpg' w='300px' h='300px'></img>}}> </Circle> */}
        <Flex direction={isNotSmallerScreen?"row":"column"}>
        <Circle /*position={isNotSmallerScreen?'absolute':'initial'} */bg="blue.200"  h={isNotSmallerScreen?"400px":"300px"} w={isNotSmallerScreen?"400px":"300px"}>
            {/* <Circle position='absolute' bg="green.100" h="300px" w='300px'></Circle> */}
            <Image src="https://avatars.githubusercontent.com/u/39216973?v=4" h={isNotSmallerScreen?"330px":"250px"} w={isNotSmallerScreen?"330px":"250px"} borderRadius="100%" opacity="1.0"></Image>
        </Circle>
        <Box ml={isNotSmallerScreen?"20vw":"6"} mt="50px" w={isNotSmallerScreen?"35vw":"80vw"}>
        <Heading fontSize="5xl">Hi , I'm</Heading>
        <Heading mt={isNotSmallerScreen?"5px":"5px"}><span style={{color:"rgb(100, 181, 246)"}}>H</span>arshith <span style={{color:"rgb(100, 181, 246)"}}>K</span>alki 👋🏾 👨‍💻</Heading>
        <Text mt={isNotSmallerScreen?"10px":"10px"} fontSize={isNotSmallerScreen?"2xl":"2xl"}>MERN Stack Devoloper</Text>
        <Text fontSize="medium" mt="10px" mb="10vh">
        Passionate MERN Stack engineer with hands-on experience in developing scalable websites / applications using a wide range of front-end and back-end skills like HTML, CSS, JavaScript, React js, Node js, Express js, MongoDB etc. Developed 10+ websites from scratch. Looking to further enhance HTML5, CSS3, JS skills as the future full stack developer.
        </Text>
    </Box>
        {/* <Info></Info> */}
    </Flex>
    </Stack>
  )
}

export default ProfileImg