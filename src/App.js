import AnimatedRoutes from "./components/AnimatedRoutes";
import Header from "./components/Header";

function App() {
  const personalDetails = {
    name: "Kamil ÜNSAL",
    location: "Ankara, TR",
    tagline: "I'm a Developer",
    email: "kmlunsl@gmail.com",
    availability: "Open for communication",
    brand:
    "Welcome to the world of Kamil ÜNSAL, a developer and entrepreneur with a passion for creating innovative solutions that change the world. With a sharp eye for detail and a keen understanding of the latest technology trends, Kamil has built a reputation for delivering exceptional results to clients across a variety of industries. At the core of Kamil's philosophy is a deep commitment to excellence and a desire to constantly push the boundaries of what's possible. Whether he's developing a cutting-edge app, designing a stunning website, or leading a team of talented developers, Kamil always brings his A-game. So if you're looking for a partner who can help you take your business to the next level, look no further than Kamil ÜNSAL. With his unmatched expertise and passion for excellence, he's the perfect choice for any project, big or small.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
