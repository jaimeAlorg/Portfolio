import React from 'react';
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
} from '@chakra-ui/react';
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';

const Projects = () => {
    const color = useColorModeValue('teal.700', 'teal.400');
    const colorHover = useColorModeValue('teal.500', 'teal.200');
    const boxShadow = useColorModeValue(
        '0px 10px 25px rgba(0, 0, 0, 0.2)',
        '0px 10px 25px rgba(0, 0, 0, 0.6)'
    );
    return (
        <div>
            <Container maxW={'3xl'}>
                <Stack
                    as={Box}
                    textAlign={'left'}
                    spacing={{ base: 8, md: 8 }}
                    py={{ base: 10, md: 8 }}
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: 'xl', sm: '3xl', md: '5xl' }}
                        lineHeight={'110%'}
                        color={'teal.400'}
                    >
                        Featured Projects
                    </Heading>
                    <Box
                        maxW='3xl'
                        borderWidth='1px'
                        borderRadius='lg'
                        overflow='hidden'
                        _hover={{
                            boxShadow: boxShadow,
                        }}
                        fontSize={{
                            base: 'sm',
                            sm: 'md',
                            md: 'md',
                        }}
                    >
                        <Box m='5'>
                            <HStack spacing={2}>
                                <Heading
                                    pb={'5px'}
                                    color={color}
                                    fontSize={{
                                        base: 'md',
                                        sm: 'xl',
                                        md: 'xl',
                                    }}
                                >
                                    Cannabis Survey
                                </Heading>
                                <Link
                                    href='https://github.com/jaimeAlorg/cannabis-survey-frontend'
                                    _focus={{ outline: 'none' }}
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
                                    href='https://github.com/jaimeAlorg/cannabis-survey-backend'
                                    _focus={{ outline: 'none' }}
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
                                    href='https://ipcannabis.org/'
                                    _focus={{ outline: 'none' }}
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
                            <HStack spacing={2} pb='4px' pt='4px' size='sm'>
                                <Tag colorScheme='teal' size='sm'>
                                    React
                                </Tag>
                                <Tag colorScheme='red' size='sm'>
                                    Node
                                </Tag>
                                <Tag colorScheme='yellow' size='sm'>
                                    Express
                                </Tag>
                                <Tag colorScheme='green' size='sm'>
                                    MongoDB
                                </Tag>
                            </HStack>
                            <Text>
                                Small survey web about the prices of cannabis
                                derivates in Spain. In the web, not registered
                                users can freely fill this survey and view the
                                anonymous collected data in the form of charts
                                and graphs using Apex Charts Library. Registered
                                users can download the data in a CSV file to
                                further collect and conduct a research out of
                                it. Currently the research group Applied
                                Sociocultural Studies from the University of
                                Granada, Spain, is conducting an investigation.
                            </Text>
                        </Box>
                    </Box>
                    <Box
                        maxW='3xl'
                        borderWidth='1px'
                        borderRadius='lg'
                        overflow='hidden'
                        _hover={{
                            boxShadow: boxShadow,
                        }}
                        fontSize={{
                            base: 'sm',
                            sm: 'md',
                            md: 'md',
                        }}
                    >
                        <Box m='5'>
                            <HStack spacing={2}>
                                <Heading
                                    pb={'5px'}
                                    color={color}
                                    fontSize={{
                                        base: 'md',
                                        sm: 'xl',
                                        md: 'xl',
                                    }}
                                >
                                    Portfolio Web
                                </Heading>
                                <Link
                                    href='https://github.com/jaimeAlorg/Portfolio'
                                    _focus={{ outline: 'none' }}
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
                                    href='jaimealvarez.cc'
                                    _focus={{ outline: 'none' }}
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
                            <HStack spacing={2} pb='4px' pt='4px' size='sm'>
                                <Tag colorScheme='teal' size='sm'>
                                    React
                                </Tag>
                                <Tag colorScheme='cyan' size='sm'>
                                    Chakra UI
                                </Tag>
                            </HStack>
                            <Text>
                                Portfolio website that provides a brief
                                definition about who I am, my skills and
                                projects. It is written in JSX using React. The
                                responsive style is made with Chakra UI library.
                            </Text>
                        </Box>
                    </Box>
                    <Box
                        maxW='3xl'
                        borderWidth='1px'
                        borderRadius='lg'
                        overflow='hidden'
                        _hover={{
                            boxShadow: boxShadow,
                        }}
                        fontSize={{
                            base: 'sm',
                            sm: 'md',
                            md: 'md',
                        }}
                    >
                        <Box m='5'>
                            <HStack spacing={2}>
                                <Heading
                                    pb={'5px'}
                                    color={color}
                                    fontSize={{
                                        base: 'md',
                                        sm: 'xl',
                                        md: 'xl',
                                    }}
                                >
                                    Book Store Demo
                                </Heading>
                                <Link
                                    href='https://github.com/jaimeAlorg/Book-Store-Demo'
                                    _focus={{ outline: 'none' }}
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
                                    href='https://blissful-bartik-0c6078.netlify.app'
                                    _focus={{ outline: 'none' }}
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
                            <HStack spacing={2} pb='4px' pt='4px' size='sm'>
                                <Tag colorScheme='orange' size='sm'>
                                    HTML
                                </Tag>
                                <Tag colorScheme='pink' size='sm'>
                                    SASS
                                </Tag>
                            </HStack>
                            <Text>
                                Book store demo using only front-end
                                technologies. It is written in pure HTML5 and
                                has a responsive style with SASS-CSS.
                            </Text>
                        </Box>
                    </Box>
                    <Box
                        maxW='3xl'
                        borderWidth='1px'
                        borderRadius='lg'
                        overflow='hidden'
                        _hover={{
                            boxShadow: boxShadow,
                        }}
                        fontSize={{
                            base: 'sm',
                            sm: 'md',
                            md: 'md',
                        }}
                    >
                        <Box m='5'>
                            <HStack spacing={2}>
                                <Heading
                                    pb={'5px'}
                                    color={color}
                                    fontSize={{
                                        base: 'md',
                                        sm: 'xl',
                                        md: 'xl',
                                    }}
                                >
                                    Microblogging Demo
                                </Heading>
                                <Link
                                    href='https://github.com/jaimeAlorg/Microblogging'
                                    _focus={{ outline: 'none' }}
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
                            <HStack spacing={2} pb='4px' pt='4px' size='sm'>
                                <Tag colorScheme='teal' size='sm'>
                                    React
                                </Tag>
                                <Tag colorScheme='purple' size='sm'>
                                    Redux
                                </Tag>
                                <Tag colorScheme='red' size='sm'>
                                    Node
                                </Tag>
                                <Tag colorScheme='yellow' size='sm'>
                                    Express
                                </Tag>
                                <Tag colorScheme='green' size='sm'>
                                    MongoDB
                                </Tag>
                            </HStack>
                            <Text>
                                CRUD web application demo. Users are allowed to
                                create, read, update and delete posts. These
                                basic four operations are possible using Node
                                and Express for the back-end side of the
                                application. The data is stored in MongoDB. The
                                client side of the web is made with React,
                                Material-UI and Redux.
                            </Text>
                        </Box>
                    </Box>
                    <Box
                        maxW='3xl'
                        borderWidth='1px'
                        borderRadius='lg'
                        overflow='hidden'
                        _hover={{
                            boxShadow: boxShadow,
                        }}
                        fontSize={{
                            base: 'sm',
                            sm: 'md',
                            md: 'md',
                        }}
                    >
                        <Box m='5'>
                            <HStack spacing={2}>
                                <Heading
                                    pb={'5px'}
                                    color={color}
                                    fontSize={{
                                        base: 'md',
                                        sm: 'xl',
                                        md: 'xl',
                                    }}
                                >
                                    Wireless Networks
                                </Heading>
                                <Link
                                    href='https://github.com/jaimeAlorg/Wireless-Networks'
                                    _focus={{ outline: 'none' }}
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
                            <HStack spacing={2} pb='4px' pt='4px' size='sm'>
                                <Tag colorScheme='blue' size='sm'>
                                    Python
                                </Tag>
                                <Tag colorScheme='gray' size='sm'>
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
