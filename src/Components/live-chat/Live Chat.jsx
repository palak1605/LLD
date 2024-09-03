import ChatWindow from "./ChatWindow";
import VideoStream from "./VideoStream";

const LiveChat = () => {
  return (
    <div style={{ display: "flex" }}>
      <VideoStream />
      <ChatWindow />
    </div>
  );
};

export default LiveChat;
