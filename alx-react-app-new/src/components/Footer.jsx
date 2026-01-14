function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#282c34",
        color: "white",
        padding: "1.5rem",
        textAlign: "center",
        borderTop: "3px solid gold",
        marginTop: "auto",
      }}
    >
      <p
        style={{
          fontSize: "1rem",
          margin: "0",
          fontFamily: "monospace",
          letterSpacing: "1px",
        }}
      >
        © 2026 City Lovers | All Rights Reserved
      </p>
      <p
        style={{
          fontSize: "0.9rem",
          margin: "10px 0 0 0",
          color: "#ccc",
          fontStyle: "italic",
        }}
      >
        Exploring the world, one city at a time
      </p>
    </footer>
  );
}

export default Footer;
