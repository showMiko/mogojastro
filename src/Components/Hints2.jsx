import { Box, Image, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
} from '@chakra-ui/react'
import clue1 from "../assets/event 2/1.mp4"
import clue3 from "../assets/event 2/2.mp4"
import clue2 from "../assets/event 2/clue2.jpeg"
import clue4 from "../assets/event 2/clue4.jpeg"
const Hints2 = () => {    
    const [hint1,setHint1]=useState(false)
    const [hint2,setHint2]=useState(false)
    const [hint3,setHint3]=useState(false)
    const [hint4,setHint4]=useState(false)
    const toast= useToast()
    const handleHint1 = () => {
        if(hint1===true)
        return;
        const input = prompt("Please enter the password:");
        if (input ===process.env.REACT_APP_EVENT2__HINT1_PASSWORD) {
          setHint1(true)
          toast({
            title: "Hint Unlocked",
            description: "Good Job",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: 'top'
        }); 
        }
        else
        {
            toast({
                title: "Wrong Password",
                description: "Try Again",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: 'top'
            }); 
        }
      };
    
    const handleHint2 = () => {
    if(hint2===true)
    return;
    const input = prompt("Please enter the password:");
    if (input ===process.env.REACT_APP_EVENT2__HINT2_PASSWORD) {
        setHint2(true)
        toast({
            title: "Hint Unlocked",
            description: "Good Job",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: 'top'
        }); 
    }
    else
    {
        toast({
            title: "Wrong Password",
            description: "Try Again",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: 'top'
        }); 
    }
    };

    const handleHint3 = () => {
    if(hint3===true)
    return;
    const input = prompt("Please enter the password:");
    if (input ===process.env.REACT_APP_EVENT2__HINT3_PASSWORD) {
        setHint3(true)
        toast({
            title: "Hint Unlocked",
            description: "Good Job",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: 'top'
        }); 
    }
    else
    {
        toast({
            title: "Wrong Password",
            description: "Try Again",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: 'top'
        }); 
    }
    };

    const handleHint4 = () => {
    if(hint4===true)
    return;
    const input = prompt("Please enter the password:");
    if (input ===process.env.REACT_APP_EVENT2__HINT4_PASSWORD) {
        setHint4(true)
        toast({
            title: "Hint Unlocked",
            description: "Good Job",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: 'top'
        }); 
    }
    else
    {
        toast({
            title: "Wrong Password",
            description: "Try Again",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: 'top'
        }); 
    }
    };
    return (
        <Box 
            color={"white"} 
            marginTop={"50px"} 
            display={"flex"} 
            paddingTop={"60px"} 
            flexWrap={'wrap'} 
            flexDir={"column"} 
            marginLeft={"10%"} 
            marginRight={"10rem"}
            w={{base:"70%", md:"80%"}}
            >
            <Accordion allowMultiple allowToggle="false" >
                <AccordionItem  mb={5} border={"2px"} borderRadius={"30px"} backgroundColor={"black"}>
                    <h2>
                        <AccordionButton onClick={handleHint1}>
                            <Box as="span"  fontSize={20} flex='1' textAlign='center'>
                                Hint 1
                            </Box>
                        </AccordionButton>
                    </h2>
                    {
                       hint1?
                       <AccordionPanel pb={4}>
                        <video src={clue1} controls></video>
                        <a href='https://youtu.be/SKja2QhOVh4' target='_blank'>Access From Youtube</a>
                       </AccordionPanel>
                       :
                       ""
                    }
                    
                </AccordionItem>

                <AccordionItem mb={5} border={"2px"} borderRadius={"30px"} backgroundColor={"black"}>
                    <h2>
                        <AccordionButton onClick={handleHint2}>
                            <Box as="span" fontSize={20}  flex='1' textAlign='center'>
                                Hint 2
                            </Box>
                        </AccordionButton>
                    </h2>
                    {
                       hint2?
                       <AccordionPanel pb={4}>
                    <Image src={clue2}></Image>
                    </AccordionPanel>
                    :
                    ""
                    }
                    
                </AccordionItem>

                <AccordionItem mb={5} border={"2px"} borderRadius={"30px"} backgroundColor={"black"}>
                    <h2>
                        <AccordionButton onClick={handleHint3}>
                            <Box as="span" fontSize={20}  flex='1' textAlign='center'>
                                Hint 3
                            </Box>
                        </AccordionButton>
                    </h2>
                    {
                        hint3?
                        <AccordionPanel pb={4}>
                    <video src={clue3} controls></video>
                    <a href='https://youtu.be/MF_4W97lW9E' target='_blank'>Access From Youtube</a>
                    </AccordionPanel>
                    :
                    ""

                    }
                    
                </AccordionItem>

                <AccordionItem mb={5} border={"2px"} borderRadius={"30px"} backgroundColor={"black"}>
                    <h2>
                        <AccordionButton onClick={handleHint4}>
                            <Box as="span" fontSize={20}  flex='1' textAlign='center'>
                                Hint 4
                            </Box>
                        </AccordionButton>
                    </h2>
                    {
                        hint4?
                        <AccordionPanel pb={4}>
                    <Image src={clue4}></Image>
                    </AccordionPanel>
                    :""
                    }
                    
                </AccordionItem>

            </Accordion>
        </Box>
    )
}

export default Hints2