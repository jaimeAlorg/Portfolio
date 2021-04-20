import React from "react";
import {
    Flex,
    HStack,
    Link,
    useColorModeValue,
    Container,
    Icon,
    useColorMode,
} from "@chakra-ui/react";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { BiSun, BiMoon } from "react-icons/bi";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <div>
            <Container px={4} maxW={"835px"} mx="auto">
                <Flex
                    h={16}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <HStack spacing={4} alignItems={"center"}>
                        <Link
                            px={2}
                            color={useColorModeValue("black", "white")}
                            href="/"
                            _hover={{
                                color: "teal.500",
                            }}
                            _focus={{ outline: "none" }}
                        >
                            Home
                        </Link>
                    </HStack>
                    <HStack spacing={4} alignItems={"center"}>
                        <Link
                            href="https://github.com/jaimeAlorg"
                            _focus={{ outline: "none" }}
                            isExternal
                        >
                            <Icon
                                as={AiFillGithub}
                                w={5}
                                h={5}
                                _hover={{
                                    color: "teal.500",
                                }}
                            />
                        </Link>
                        <Link
                            href="mailto:jaime.alorg1998@gmail.com"
                            _focus={{ outline: "none" }}
                            isExternal
                        >
                            <Icon
                                as={AiOutlineMail}
                                w={5}
                                h={5}
                                _hover={{
                                    color: "teal.500",
                                }}
                            />
                        </Link>
                        <Icon
                            as={colorMode === "light" ? BiMoon : BiSun}
                            w={5}
                            h={5}
                            onClick={toggleColorMode}
                            _hover={{
                                color: "teal.500",
                            }}
                        >
                            Toggle {colorMode === "light" ? "Dark" : "Light"}
                        </Icon>
                    </HStack>
                </Flex>
            </Container>
        </div>
    );
};

export default Navbar;
