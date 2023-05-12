import { Box, Image, Input, Toast, useToast, Button } from '@chakra-ui/react'
import img1 from "../assets/event 3/Clue 1.jpeg"
import img2 from "../assets/event 3/Clue 2.jpeg"
import img3 from "../assets/event 3/FinalClue.jpg"
import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
} from '@chakra-ui/react'
const Hints3 = () => {
    const toast = useToast()
    const [hint1, setHint1] = useState(false)
    const [hint2, setHint2] = useState(false)
    const [hint3, setHint3] = useState(false)
    const [hint4, setHint4] = useState(false)
    const handleHint1 = () => {
        if (hint1 === true)
            return;
        const input = prompt("Please enter the password:");
        if (input.toLowerCase() === process.env.REACT_APP_EVENT3__HINT1_PASSWORD) {
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
        else {
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
        if (hint2 === true)
            return;
        const input = prompt("Please enter the password:");
        if (input.toLowerCase() === process.env.REACT_APP_EVENT3__HINT2_PASSWORD) {
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
        else {
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
        if (hint3 === true)
            return;
        const input = prompt("Please enter the password:");
        if (input === process.env.REACT_APP_EVENT3__HINT3_PASSWORD) {
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
        else {
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
            w={{ base: "70%", md: "80%" }}
        >
            <a href='https://docs.google.com/forms/d/1GiNLK7zZZDdsn2ffezJZmLE68RrnnnbKlaVoN_zw_2k' target='_blank'>

            <Button
                colorScheme='blue'
                mb={9}
                border={"2px solid white"}
                borderRadius={20}
                w={"100%"}
                >
                Answer Before Hint 1
            </Button>
                </a>
            <Accordion allowMultiple allowToggle="false" >
                <AccordionItem mb={5} border={"2px"} borderRadius={"30px"} backgroundColor={"black"}>
                    <h2>
                        <AccordionButton onClick={handleHint1}>
                            <Box as="span" fontSize={20} flex='1' textAlign='center'>
                                Hint 1
                            </Box>
                        </AccordionButton>
                    </h2>
                    {
                        hint1 ?
                            <AccordionPanel pb={4}>
                                <Image src={img1}></Image>
                                <a href='https://docs.google.com/forms/d/15-mAb4O95FHBV12w5dy-lrX0pcipiBHZ0son8Mce2lo' target='_blank'>

                                <Button
                                    colorScheme='red'
                                    mt={5}
                                    border={"2px solid white"}
                                    borderRadius={20}
                                    >
                                    Submit The Answer For Hint 1
                                </Button>
                                </a>
                            </AccordionPanel>
                            :
                            ""
                    }

                </AccordionItem>

                <AccordionItem mb={5} border={"2px"} borderRadius={"30px"} backgroundColor={"black"}>
                    <h2>
                        <AccordionButton onClick={handleHint2}>
                            <Box as="span" fontSize={20} flex='1' textAlign='center'>
                                Hint 2
                            </Box>
                        </AccordionButton>
                    </h2>
                    {
                        hint2 ?
                            <AccordionPanel pb={4}>
                                <Image src={img2}></Image>
                                <Button
                                    colorScheme='yellow'
                                    mt={5}
                                    border={"2px solid white"}
                                    borderRadius={20}
                                >
                                    Submit The Answer For Hint 2
                                </Button>
                            </AccordionPanel>
                            :
                            ""
                    }

                </AccordionItem>

                <AccordionItem mb={5} border={"2px"} borderRadius={"30px"} backgroundColor={"black"}>
                    <h2>
                        <AccordionButton onClick={handleHint3}>
                            <Box as="span" fontSize={20} flex='1' textAlign='center'>
                                Hint 3
                            </Box>
                        </AccordionButton>
                    </h2>
                    {
                        hint3 ?
                            <AccordionPanel pb={4}>
                                <Image src={img3}></Image>
                                <a href="https://forms.gle/iA3HKxR3ajwNrZp3A" target='_blank'>

                                <Button 
                                mt={5}
                                border={"2px solid white"}
                                borderRadius={20}
                                colorScheme='green'>
                                    Final Answer
                                </Button>
                                    </a>
                            </AccordionPanel>
                            :
                            ""

                    }

                </AccordionItem>

            </Accordion>
        </Box>
    )
}

export default Hints3