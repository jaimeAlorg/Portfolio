import React from "react";
import {
    Box,
    Heading,
    Container,
    Text,
    Stack,
    useColorModeValue,
    Flex,
} from "@chakra-ui/react";

const Contact = () => {
    const color = useColorModeValue("teal.800", "teal.200");
    const borderColor = useColorModeValue("teal.400", "teal.600");
    return (
        <div>
            <Container maxW={"3xl"}>
                <Stack
                    as={Box}
                    textAlign={"left"}
                    spacing={{ base: 8, md: 8 }}
                    py={{ base: 4, md: 4 }}
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: "xl", sm: "3xl", md: "5xl" }}
                        lineHeight={"110%"}
                        color={"teal.400"}
                    >
                        Contact
                    </Heading>
                    <Box
                        maxW="3xl"
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        borderColor={color}
                        _hover={{
                            borderColor: borderColor,
                        }}
                    >
                        <Box m="5">
                            <Flex justifyContent={"center"}>
                                <Text color={color}>
                                    Email:{" "}
                                    <Text as={"span"} color={"color"}>
                                        jaime.alorg1998@gmail.com
                                    </Text>
                                </Text>
                            </Flex>
                        </Box>
                    </Box>
                </Stack>
            </Container>
        </div>
    );
};

export default Contact;
