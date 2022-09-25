import React from 'react';
import { useColorMode, useMediaQuery, HStack, Icon} from '@chakra-ui/react';
import {FaInstagram , FaTwitter ,FaGithub , FaLinkedin} from 'react-icons/fa'

function Info() {
    // const {colorMode}=useColorMode();
    // const isDark=colorMode==='dark';
    const [isNotSmallerScreen]=useMediaQuery("(min-width:600px)")
  return (
    <HStack mt={isNotSmallerScreen?"10vh":"4vh"} justifyContent="center" mb="10vh">
      <a href='https://www.instagram.com/harshith._.kalki/' >
      <Icon as={FaInstagram} boxSize="50"/>
      </a>
      <a href='https://twitter.com/harshithkalki' >
      <Icon as={FaTwitter} boxSize="50"/>
      </a>
      <a href='https://github.com/harshithkalki' >
      <Icon as={FaGithub} boxSize="50"/>
      </a>
      <a href='https://www.linkedin.com/in/harshith-reddy-chiluka-39a635225' >
      <Icon as={FaLinkedin} boxSize="50"/>
      </a>
    </HStack>
  )
}

export default Info