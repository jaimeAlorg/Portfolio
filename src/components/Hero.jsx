import React from "react";
import { Box, Heading, Container, Text, Stack } from "@chakra-ui/react";

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
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                        lineHeight={"110%"}
                    >
                        Jaime A. Alvarez-Orgaz <br />
                        <Text as={"span"} color={"teal.400"}>
                            Front-End Developer
                        </Text>
                    </Heading>
                    <Text color={"gray.500"} pb={"1px"}>
                        I am a junior front-end developer with experience
                        building websites and web applications. I specialize in
                        JavaScript. The projects I have done at the moment are
                        using React framework. I also have experience with SQL,
                        Oracle, Node, MongoDB and C++. I am currently looking
                        for a job or internship for summer 2021.
                    </Text>
                </Stack>
            </Container>
        </div>
    );
};

export default Hero;
