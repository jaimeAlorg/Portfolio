import React from "react";
import {
    Box,
    Heading,
    Container,
    Text,
    Stack,
    Icon,
    HStack,
    useColorModeValue,
    Link,
    Tag,
} from "@chakra-ui/react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

const Projects = () => {
    const color = useColorModeValue("teal.700", "teal.400");
    const colorHover = useColorModeValue("teal.500", "teal.200");
    const boxShadow = useColorModeValue(
        "0px 10px 25px rgba(0, 0, 0, 0.2)",
        "0px 10px 25px rgba(0, 0, 0, 0.6)"
    );
    return (
        <div>
            <Container maxW={"3xl"}>
                <Stack
                    as={Box}
                    textAlign={"left"}
                    spacing={{ base: 8, md: 8 }}
                    py={{ base: 10, md: 8 }}
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: "xl", sm: "3xl", md: "5xl" }}
                        lineHeight={"110%"}
                        color={"teal.400"}
                    >
                        Featured Projects
                    </Heading>
                    <Box
                        maxW="3xl"
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        _hover={{
                            boxShadow: boxShadow,
                        }}
                        fontSize={{
                            base: "sm",
                            sm: "md",
                            md: "md",
                        }}
                    >
                        <Box m="5">
                            <HStack spacing={2}>
                                <Heading
                                    pb={"5px"}
                                    color={color}
                                    fontSize={{
                                        base: "md",
                                        sm: "xl",
                                        md: "xl",
                                    }}
                                >
                                    Cannabis Survey
                                </Heading>
                                <Link
                                    href="https://ipcannabis.org/"
                                    _focus={{ outline: "none" }}
                                    isExternal
                                >
                                    <Icon
                                        as={AiOutlineLink}
                                        color={color}
                                        w={5}
                                        h={6}
                                        _hover={{
                                            color: colorHover,
                                        }}
                                    />
                                </Link>
                            </HStack>
                            <HStack spacing={2} pb="4px" pt="4px" size="sm">
                                <Tag colorScheme="teal" size="sm">
                                    React
                                </Tag>
                                <Tag colorScheme="red" size="sm">
                                    Node
                                </Tag>
                                <Tag colorScheme="yellow" size="sm">
                                    Express
                                </Tag>
                                <Tag colorScheme="green" size="sm">
                                    MongoDB
                                </Tag>
                            </HStack>
                            <Text>
                                This website contains a small survey about the
                                prices of cannabis derivatives in Spain. The
                                research group Applied Sociocultural Studies
                                from the University of Granada, Spain, conducts
                                this investigation. Average prices by Autonomous
                                Communities and provinces are displayed in
                                graphs and charts. A CSV file with the complete
                                survey results is downloadable using a login.
                            </Text>
                        </Box>
                    </Box>
                    <Box
                        maxW="3xl"
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        _hover={{
                            boxShadow: boxShadow,
                        }}
                        fontSize={{
                            base: "sm",
                            sm: "md",
                            md: "md",
                        }}
                    >
                        <Box m="5">
                            <HStack spacing={2}>
                                <Heading
                                    pb={"5px"}
                                    color={color}
                                    fontSize={{
                                        base: "md",
                                        sm: "xl",
                                        md: "xl",
                                    }}
                                >
                                    Portfolio Web
                                </Heading>
                                <Link
                                    href="https://github.com/jaimeAlorg/Portfolio"
                                    _focus={{ outline: "none" }}
                                    isExternal
                                >
                                    <Icon
                                        as={AiFillGithub}
                                        color={color}
                                        w={5}
                                        h={5}
                                        _hover={{
                                            color: colorHover,
                                        }}
                                    />
                                </Link>
                                <Link
                                    href="jaimealvarez.cc"
                                    _focus={{ outline: "none" }}
                                    isExternal
                                >
                                    <Icon
                                        as={AiOutlineLink}
                                        color={color}
                                        w={5}
                                        h={6}
                                        _hover={{
                                            color: colorHover,
                                        }}
                                    />
                                </Link>
                            </HStack>
                            <HStack spacing={2} pb="4px" pt="4px" size="sm">
                                <Tag colorScheme="teal" size="sm">
                                    React
                                </Tag>
                                <Tag colorScheme="cyan" size="sm">
                                    Chakra UI
                                </Tag>
                            </HStack>
                            <Text>
                                This website you are watching right now. It
                                gives a brief definition about me, my skills and
                                projects. It is done only using front-end
                                technologies. Written in JSX using React. The
                                responsive style is done with Chakra UI library.
                            </Text>
                        </Box>
                    </Box>
                    <Box
                        maxW="3xl"
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        _hover={{
                            boxShadow: boxShadow,
                        }}
                        fontSize={{
                            base: "sm",
                            sm: "md",
                            md: "md",
                        }}
                    >
                        <Box m="5">
                            <HStack spacing={2}>
                                <Heading
                                    pb={"5px"}
                                    color={color}
                                    fontSize={{
                                        base: "md",
                                        sm: "xl",
                                        md: "xl",
                                    }}
                                >
                                    Book Store Demo
                                </Heading>
                                <Link
                                    href="https://github.com/jaimeAlorg/Book-Store-Demo"
                                    _focus={{ outline: "none" }}
                                    isExternal
                                >
                                    <Icon
                                        as={AiFillGithub}
                                        color={color}
                                        w={5}
                                        h={5}
                                        _hover={{
                                            color: colorHover,
                                        }}
                                    />
                                </Link>
                                <Link
                                    href="https://blissful-bartik-0c6078.netlify.app"
                                    _focus={{ outline: "none" }}
                                    isExternal
                                >
                                    <Icon
                                        as={AiOutlineLink}
                                        color={color}
                                        w={5}
                                        h={5}
                                        _hover={{
                                            color: colorHover,
                                        }}
                                    />
                                </Link>
                            </HStack>
                            <HStack spacing={2} pb="4px" pt="4px" size="sm">
                                <Tag colorScheme="orange" size="sm">
                                    HTML
                                </Tag>
                                <Tag colorScheme="pink" size="sm">
                                    SASS
                                </Tag>
                            </HStack>
                            <Text>
                                Demo of a book store using only front-end
                                technologies. In this website the user first
                                finds a home screen with a sample text. Next,
                                there is a catalogue section with 5 sample
                                books, a store section where you can find where
                                are located 3 book stores and a last section
                                with the contact information. This site is
                                written in pure HTML5 and has a responsive style
                                with SASS.
                            </Text>
                        </Box>
                    </Box>
                    <Box
                        maxW="3xl"
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        _hover={{
                            boxShadow: boxShadow,
                        }}
                        fontSize={{
                            base: "sm",
                            sm: "md",
                            md: "md",
                        }}
                    >
                        <Box m="5">
                            <HStack spacing={2}>
                                <Heading
                                    pb={"5px"}
                                    color={color}
                                    fontSize={{
                                        base: "md",
                                        sm: "xl",
                                        md: "xl",
                                    }}
                                >
                                    Microblogging Demo
                                </Heading>
                                <Link
                                    href="https://github.com/jaimeAlorg/Microblogging"
                                    _focus={{ outline: "none" }}
                                    isExternal
                                >
                                    <Icon
                                        as={AiFillGithub}
                                        color={color}
                                        w={5}
                                        h={5}
                                        _hover={{
                                            color: colorHover,
                                        }}
                                    />
                                </Link>
                            </HStack>
                            <HStack spacing={2} pb="4px" pt="4px" size="sm">
                                <Tag colorScheme="teal" size="sm">
                                    React
                                </Tag>
                                <Tag colorScheme="purple" size="sm">
                                    Redux
                                </Tag>
                                <Tag colorScheme="red" size="sm">
                                    Node
                                </Tag>
                                <Tag colorScheme="yellow" size="sm">
                                    Express
                                </Tag>
                                <Tag colorScheme="green" size="sm">
                                    MongoDB
                                </Tag>
                            </HStack>
                            <Text>
                                This webside is a demo of how a CRUD web
                                application works. In this web the user is
                                allowed to create, read, update and delete
                                posts. This simple four operations are done in
                                the back-end using Node and Express. The data of
                                the posts is stored in MongoDB Cloud Atlas. The
                                front-end uses React, Material-UI for the style
                                and Redux for scalability.
                            </Text>
                        </Box>
                    </Box>
                    <Box
                        maxW="3xl"
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        _hover={{
                            boxShadow: boxShadow,
                        }}
                        fontSize={{
                            base: "sm",
                            sm: "md",
                            md: "md",
                        }}
                    >
                        <Box m="5">
                            <HStack spacing={2}>
                                <Heading
                                    pb={"5px"}
                                    color={color}
                                    fontSize={{
                                        base: "md",
                                        sm: "xl",
                                        md: "xl",
                                    }}
                                >
                                    Wireless Networks
                                </Heading>
                                <Link
                                    href="https://github.com/jaimeAlorg/Wireless-Networks"
                                    _focus={{ outline: "none" }}
                                    isExternal
                                >
                                    <Icon
                                        as={AiFillGithub}
                                        color={color}
                                        w={5}
                                        h={5}
                                        _hover={{
                                            color: colorHover,
                                        }}
                                    />
                                </Link>
                            </HStack>
                            <HStack spacing={2} pb="4px" pt="4px" size="sm">
                                <Tag colorScheme="blue" size="sm">
                                    Python
                                </Tag>
                                <Tag colorScheme="gray" size="sm">
                                    Jupiter Notebook
                                </Tag>
                            </HStack>
                            <Text>
                                Analysis and design of simple wireless
                                communication networks. This includes queuing
                                theory, models of wireless networks (regular
                                grids, random), medium access control, error
                                control, and performance analysis.
                            </Text>
                        </Box>
                    </Box>
                </Stack>
            </Container>
        </div>
    );
};

export default Projects;
