import { Box,Image } from '@chakra-ui/react'
import React from 'react'
import backimg from "../images/BANNER.png"
import Event3 from './Event3'


const Header1 = () => {

  return (
    <Box display={"flex"} 
    paddingTop={"60px"} 
    color={"white"}
    flexWrap={'wrap'}
    flexDir={"column"}
    alignItems={"center"}
    m={"1rem"}
    >
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
            <h2>EVENT 3</h2>
            <Event3/>
        </Box>
        
    </Box>
  )
}

export default Header1