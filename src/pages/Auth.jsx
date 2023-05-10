import React from 'react'
import Event1login from './Event1login'
import Event2login from './Event2login'
import Event3login from './Event3login'
import logo from "../assets/logo.png"
import { Divider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

const Auth = () => {
  return (
    <div className='myApp'>
    <Box display={"flex"} paddingTop={"60px"} color={"white"} flexWrap={'wrap'} flexDir={"column"} alignItems={"center"}>
      <Box borderRadius={"10px"} border={"2px"} w={{ base: "20rem", md: "50rem" }} display={"flex"} flexDirection={"column"} alignItems={"center"} backgroundColor={"blackAlpha.800"} p={5}>
        <img src={logo} alt="" srcset="" />
        <Divider/>
        <h2>WELCOME ONE AND ALL</h2>
        <p>
        Greetings from MOGOJASTRO! We are happy to have you join us on an exciting voyage that will test your capacity for critical thought and judgement.Our goal is to offer an enjoyable and stimulating experience that inspires participants to cooperate and solve puzzles.
        </p>
        <Box
        display={"flex"} m={10} flexWrap={'wrap'} justifyContent={'center'} color={"black"} alignItems={"center"}  >
        <Event1login />
        <Event2login />
        <Event3login />
        </Box>
      </Box>
    </Box>
    </div>
  )
}

export default Auth
