import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "sonner";

export default function App() {
  return (
    <div className="size-full">
      <Header />
      <Hero />
      <About />
      <Services />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster 
        position="top-center" 
        toastOptions={{
          style: {
            background: '#1a1a1a',
            color: '#ffffff',
            border: '2px solid #FF3B3B',
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.9375rem',
            fontWeight: 500,
          },
        }}
      />
    </div>
  );
}