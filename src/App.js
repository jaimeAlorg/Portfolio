import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import {
    Navbar,
    Hero,
    Skills,
    Projects,
    Contact,
    Footer,
} from "./components/index";

export default function App() {
    return (
        <ChakraProvider>
            <Navbar />
            <Hero />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </ChakraProvider>
    );
}
