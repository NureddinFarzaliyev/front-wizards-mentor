import Avatar from "boring-avatars";

const AvatarUsername = ({ username }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        marginTop: "20px",
        border: "1px solid #ccc",
        padding: "16px",
        borderRadius: "16px",
        width: "fit-content",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Avatar name={username} height={100} />
      <h1>@{username}</h1>
    </div>
  );
};

export default AvatarUsername;
