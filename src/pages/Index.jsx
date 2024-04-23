import React, { useState } from "react";
import { Box, Input, Button, Text, VStack, HStack, Divider, Spacer, Avatar, useToast } from "@chakra-ui/react";
import { FaRobot, FaUser } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const toast = useToast();

  const handleSignUp = () => {
    if (username.trim() !== "") {
      toast({
        title: "Signed up successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleSignOut = () => {
    setUsername("");
    setMessages([]);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      const userMessage = {
        id: Date.now(),
        text: inputMessage,
        sender: "user",
      };
      setMessages([...messages, userMessage]);
      setInputMessage("");
      setIsTyping(true);

      setTimeout(() => {
        const botMessage = {
          id: Date.now() + 1,
          text: "I am Convergenous, an AI assistant. How can I help you today?",
          sender: "bot",
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
        setIsTyping(false);
      }, 1000);
    }
  };

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Navbar username={username} onSignOut={handleSignOut} />
      <Box flexGrow={1} maxWidth="600px" width="100%" margin="auto" padding={4}>
        {username === "" ? (
          <VStack spacing={4}>
            <Input placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Button colorScheme="blue" onClick={handleSignUp}>
              Sign Up
            </Button>
          </VStack>
        ) : (
          <>
            <VStack spacing={4} align="stretch">
              {messages.map((message) => (
                <HStack key={message.id} bg={message.sender === "user" ? "blue.50" : "gray.50"} padding={4} borderRadius="lg" maxWidth="80%" alignSelf={message.sender === "user" ? "flex-end" : "flex-start"} boxShadow="md">
                  {message.sender === "user" ? (
                    <>
                      <Text>{message.text}</Text>
                      <Spacer />
                      <Avatar size="sm" icon={<FaUser />} />
                    </>
                  ) : (
                    <>
                      <Avatar size="sm" icon={<FaRobot />} />
                      <Spacer />
                      <Text>{message.text}</Text>
                    </>
                  )}
                </HStack>
              ))}
              {isTyping && (
                <HStack bg="gray.50" padding={4} borderRadius="lg" maxWidth="80%" alignSelf="flex-start" boxShadow="md">
                  <Avatar size="sm" icon={<FaRobot />} />
                  <Spacer />
                  <Text>Typing...</Text>
                </HStack>
              )}
            </VStack>
            <Divider marginY={4} />
            <HStack>
              <Input placeholder="Type your message..." value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} />
              <Button colorScheme="blue" onClick={handleSendMessage}>
                Send
              </Button>
            </HStack>
          </>
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default Index;
