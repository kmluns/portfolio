const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a target="_blank" rel="noopener noreferrer" className="icon" style={styles.icon} href="https://github.com/kmluns">
        <i className="fa-brands fa-github" aria-hidden="true" title="Kamil ÜNSAL' GitHub Profile"></i>
      </a>
      <a target="_blank" rel="noopener noreferrer" className="icon" style={styles.icon} href="https://www.linkedin.com/in/kmluns/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Kamil ÜNSAL' LinkedIn Profile"></i>
      </a>
      <a target="_blank" rel="noopener noreferrer" className="icon" style={styles.icon} href="https://www.instagram.com/kmluns/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Kamil ÜNSAL' Instagram Profile"></i>
      </a>
      <a target="_blank" rel="noopener noreferrer" className="icon" style={styles.icon} href="https://twitter.com/kmluns">
        <i className="fa-brands fa-twitter" aria-hidden="true" title="Kamil ÜNSAL' Twitter Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
