import React, { useState } from "react";
import { CircularProgress, TextField, Button } from "@mui/material";
import { ChatController } from "controllers/chatController";
import ReactMarkdown from "react-markdown";
import Card from "components/card";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (input.trim() === "") return;

    const payload = {
      dataPrompt: input,
    };

    setLoading(true);
    const userMessage = { sender: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");

    try {
      const response = await ChatController.sendMessage(payload);
      const botMessage = { sender: "bot", text: response.text }; // Adjust based on your API response structure
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      // Handle error (e.g., show a message to the user)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-16 flex w-full flex-col gap-5">
      <div className="flex flex-grow flex-col space-y-4 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`rounded-lg p-4 text-lg ${
              message.sender === "user"
                ? "self-end bg-blue-500 text-white"
                : "self-start bg-gray-200 text-gray-800"
            }`}
          >
            {message.sender === "bot" ? (
              <ReactMarkdown>{message.text}</ReactMarkdown>
            ) : (
              <p>{message.text}</p>
            )}
          </div>
        ))}
        {loading && (
          <div className="flex justify-center">
            <CircularProgress />
          </div>
        )}
      </div>
      <Card className="flex flex-col p-4">
        <div className="flex flex-col items-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
          <TextField
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message"
            fullWidth
            variant="outlined"
            size="small"
            className="flex-grow"
            InputProps={{
              className: "dark:text-white dark:bg-gray-800 dark:border-white",
            }}
            InputLabelProps={{
              className: "dark:text-white",
            }}
          />
          <Button
            onClick={handleSend}
            variant="contained"
            color="primary"
            disabled={loading}
          >
            Send
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ChatBox;
