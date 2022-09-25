import { Box, Flex, Heading, IconButton, Spacer, useColorModeValue, VStack ,useColorMode} from '@chakra-ui/react'
import React from 'react';
import { FaMoon, FaSun , FaLinkedin , FaGithub } from "react-icons/fa";

function Header() {
    // const [colorMode,changeCol]=React.useState()
    const {colorMode,toggleColorMode}=useColorMode();
    const isDark=colorMode==="dark";
  return (
    <VStack padding={5} >
        <Flex w="100%">
        <Heading >PortFolio</Heading>
            <Spacer></Spacer>
            <IconButton ml={2} icon={isDark?<FaSun />:<FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
            <IconButton ml={2} icon={<FaGithub />} isRound='true'></IconButton>
            <IconButton ml={2} icon={<FaLinkedin />} isRound='true'></IconButton>
        </Flex>
        <box>
           
        </box>
    </VStack>
  )
}

export default Header