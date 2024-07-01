import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import Skills from "./components/Skills";
import Blogs from "./components/blogs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <Navbar />
      <div className="container mt-24 mx-auto lg:px-12 px-4 py-4">
        <HeroSection />
        <AboutSection />
        <Skills/>
        <ProjectsSection />
        <EmailSection />
        <Blogs/>
      </div>
      <Footer />
    </main>
  );
}
