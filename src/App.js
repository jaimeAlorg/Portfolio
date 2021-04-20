import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

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
