const ChatMessage = ({ name, photo, message }) => {
    return (
      <div style={{ display: "flex", padding: "8px" }}>
        <img
          style={{
            height: "32px",
            width: "32px",
            margin: "8px",
            borderRadius: "50%",
          }}
          alt={name}
          src={photo}
        />
        <p style={{ padding: "8px" }}>
          <span style={{ fontWeight: "bold" }}>{name} - </span>
          <span>{message}</span>
        </p>
      </div>
    );
  };
  
  export default ChatMessage;
  