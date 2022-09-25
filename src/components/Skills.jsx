import { Heading, Stack } from '@chakra-ui/react'
import { useColorMode, useMediaQuery} from '@chakra-ui/react';
import React from 'react'

function Skills() {
    // const {colorMode}=useColorMode();
    // const isDark=colorMode==='dark';
    const [isNotSmallerScreen]=useMediaQuery("(min-width:600px)")
  return (
    <Stack ml={isNotSmallerScreen?"10vw":"7"}>

    <Heading mt={isNotSmallerScreen?"10vh":"5vh"}>Programming Languages</Heading>
    <ul style={{marginLeft:"2vw"}}>
        <li>Java</li>
        <li>JavaScript</li>
        <li>c</li>
        <li>c++</li>
    </ul>
    <Heading mt={isNotSmallerScreen?"10vh":"5vh"}>Frontend</Heading>
    <ul style={{marginLeft:"2vw"}}>
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>React</li>
    </ul>
    <Heading mt={isNotSmallerScreen?"10vh":"5vh"}>Backend</Heading>
    <ul style={{marginLeft:"2vw"}}>
        <li>Node Js</li>
        <li>Express Js</li>
        <li>EJS</li>
    </ul>
    <Heading mt={isNotSmallerScreen?"10vh":"5vh"}>API</Heading>
    <ul style={{marginLeft:"2vw"}}>
        <li>REST API</li>
    </ul>
    <Heading mt={isNotSmallerScreen?"10vh":"5vh"}>Database</Heading>
    <ul style={{marginLeft:"2vw"}}>
        <li>MYSQL</li>
        <li>MongoDB</li>
    </ul>

    </Stack>
    
  )
}

export default Skills