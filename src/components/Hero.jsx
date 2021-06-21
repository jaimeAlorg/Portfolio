import {
    Box,
    Container,
    Heading,
    Stack,
    Text,
    HStack,
    Image,
} from "@chakra-ui/react";
import profile from "../images/profile-cropped.png";
import React from "react";

const Hero = () => {
    return (
        <div>
            <Container maxW={"3xl"}>
                <Stack
                    as={Box}
                    textAlign={"left"}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 10, md: 8 }}
                >
                    <HStack spacing="24px">
                        <Box
                            boxSize={{
                                base: "75px",
                                sm: "120px",
                                md: "150px",
                            }}
                        >
                            <Image src={profile} alt="testo" />
                        </Box>
                        <Heading
                            fontWeight={600}
                            fontSize={{ base: "23px", sm: "3xl", md: "5xl" }}
                            lineHeight={"110%"}
                        >
                            Jaime A. Alvarez-Orgaz <br />
                            <Text as={"span"} color={"teal.400"}>
                                Front-End Developer
                            </Text>
                        </Heading>
                    </HStack>
                    <Text
                        color={"gray.500"}
                        pb={"1px"}
                        fontSize={{
                            base: "sm",
                            sm: "md",
                            md: "lg",
                        }}
                    >
                        I am a junior front-end developer with experience
                        building websites and web applications. I am passionate
                        about web technologies and I specialize in JavaScript.
                        The projects I have done at the moment are using React
                        framework. I also have experience with SQL, Oracle,
                        Node, MongoDB and Dart. I am currently looking for a job
                        were I can prove myself as a web developer.
                    </Text>
                </Stack>
            </Container>
        </div>
    );
};

export default Hero;
