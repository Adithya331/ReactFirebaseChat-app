import React from "react";
import { HStack, Avatar, Text } from "@chakra-ui/react";
function Message({ text, uri, user = "other" }) {
  return (
    <HStack
      alignSelf={user === "me" ? "flex-end" : "flex-start"}
      bg={"gray.100"}
      paddingX={user==="me"?"4":"2"}
      paddingY={"2"}
      borderRadius={"base"}
    >
    {
        user==="other" && <Avatar src={uri}></Avatar>
      }
      <Text>{text}</Text>
      {
        user==="me" && <Avatar src={uri}></Avatar>
      }
    </HStack>
  );
}

export default Message;
