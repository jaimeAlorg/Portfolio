import React from "react";
import { Container, Text, HStack } from "@chakra-ui/react";

const Footer = () => {
    return (
        <div>
            <Container maxW={"3xl"}>
                <HStack justifyContent="center" py={{ base: 5, md: 5 }}>
                    <Text>Copyright &copy; Jaime A. Álvarez Orgaz, 2021</Text>
                </HStack>
            </Container>
        </div>
    );
};

export default Footer;
