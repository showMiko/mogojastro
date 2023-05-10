import { Box,Image } from '@chakra-ui/react'
import React from 'react'
import backimg from "../images/BANNER.png"
import Event2 from './Event2'


const Header2 = () => {

  return (
    <Box display={"flex"} 
    paddingTop={"60px"} 
    color={"white"}
    flexWrap={'wrap'}
    flexDir={"column"}
    alignItems={"center"}
    m={"1rem"}>
        <Box borderRadius={"10px"} 
          border={"2px"}  
          // w={{base:"20rem", md:"50rem"}} 
          w={'fit-content'}
          display={"flex"} 
          flexDirection={"column"} 
          alignItems={"center"} 
          backgroundImage={backimg} 
          backgroundPosition={"center"}
          backgroundSize={'cover'}>
            <h2>EVENT 2</h2>
            <Event2/>
        </Box>
        
    </Box>
  )
}

export default Header2