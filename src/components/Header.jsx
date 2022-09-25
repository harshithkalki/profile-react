import { Flex, Heading, IconButton, Spacer, VStack ,useColorMode} from '@chakra-ui/react'
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
            <a href="https://github.com/harshithkalki">
            <IconButton ml={2} icon={<FaGithub />} isRound='true' ></IconButton>
            </a> 
            <a href='https://www.linkedin.com/in/harshith-reddy-chiluka-39a635225'>
            <IconButton ml={2} icon={<FaLinkedin />} isRound='true'></IconButton>
            </a>
        </Flex>
    </VStack>
  )
}

export default Header