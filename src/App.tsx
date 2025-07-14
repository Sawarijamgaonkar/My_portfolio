// import { useState, useEffect } from 'react';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import About from './components/About';
// import Skills from './components/Skills';
// import Experience from './components/Experience';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Chatbot from './components/Chatbot';
   
// function App() {
//   const [activeSection, setActiveSection] = useState('home');

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
//       const scrollPosition = window.scrollY + 100;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const { offsetTop, offsetHeight } = element;
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="bg-slate-900 text-white min-h-screen">
//       <Header activeSection={activeSection} />
//       <main>
//         <Hero />
//         <About />
//         <Skills />
//         <Experience />
//         <Projects />
//         <Contact />
//       </main>
//       <Footer />
//       <Chatbot />
//     </div>
//   );
// }

// export default App;

   // src/App.tsx
   import { useState, useEffect } from 'react';
   import Header from './components/Header';
   import Hero from './components/Hero';
   import About from './components/About';
   import Skills from './components/Skills';
   import Experience from './components/Experience';
   import Projects from './components/Projects';
   import Contact from './components/Contact';
   import Footer from './components/Footer';
   import Chatbot from './components/Chatbot';
  


   function App() {
     const [activeSection, setActiveSection] = useState('home');

     useEffect(() => {
       const handleScroll = () => {
         const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
         const scrollPosition = window.scrollY + 100;

         for (const section of sections) {
           const element = document.getElementById(section);
           if (element) {
             const { offsetTop, offsetHeight } = element;
             if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
               setActiveSection(section);
               break;
             }
           }
         }
       };

       window.addEventListener('scroll', handleScroll);
       return () => window.removeEventListener('scroll', handleScroll);
     }, []);

    return (
      <div className="bg-lavender text-purple min-h-screen">
        <Header activeSection={activeSection} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <Chatbot />
      </div>
    );
   }

   export default App;
   