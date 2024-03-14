// pages/about.tsx
"use client"
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const About = () => {
  useEffect(() => {
    const scrollToSection = (id: string) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    document.querySelectorAll('.scroll-to-section').forEach(button => {
      button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        if (targetId) {
          scrollToSection(targetId);
        }
      });
    });

    document.querySelector('.scroll-to-top')?.addEventListener('click', scrollToTop);

    return () => {
      document.querySelectorAll('.scroll-to-section').forEach(button => {
        button.removeEventListener('click', () => {});
      });
      document.querySelector('.scroll-to-top')?.removeEventListener('click', scrollToTop);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      <main>
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-16 md:py-24" id="hero">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Journey</h1>
            <p className="text-lg md:text-xl mb-8">Discover who we are and what we do.</p>
            <button className="scroll-to-section inline-block bg-white text-gray-900 py-2 px-6 rounded-full uppercase tracking-wide font-semibold transition duration-300 hover:bg-gray-300 hover:text-gray-900" data-target="mission">
              Learn More
            </button>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-16 md:py-24 bg-gray-100">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg mb-6">
                Welcome to the forefront of multimodal generative AI innovation! Our mission is to propel creative expression into a new era by leveraging cutting-edge artificial intelligence technologies. We're committed to pushing the boundaries of what AI can achieve, pioneering groundbreaking advancements that transcend traditional modes of content creation. Through our relentless pursuit of excellence, we aim to empower individuals and industries alike to explore new frontiers of creativity and imagination.

At the heart of our mission lies a dedication to harnessing the diverse capabilities of AI to produce dynamic and immersive content across various modalities. From generating stunning visual art pieces to composing evocative musical compositions, our AI-driven systems are engineered to inspire, captivate, and push the limits of human creativity. With an unwavering focus on innovation and collaboration, we invite you to join us on this transformative journey as we redefine the future of creative expression together.
                </p>
                <button className="scroll-to-section inline-block bg-gray-900 text-white py-2 px-6 rounded-full uppercase tracking-wide font-semibold transition duration-300 hover:bg-gray-800" data-target="team">
                  Meet Our Team
                </button>
              </div>
              <div>
                <Image
                  src="/mission image.jpg"
                  alt="Mission"
                  width={800}
                  height={500}
                  layout="responsive"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16 md:py-24 bg-gray-200">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Meet Our Team</h2>
            <p className="text-lg mb-8">
            Join our talented team of visionaries, engineers, and creatives who are shaping the future of AI-driven creativity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team members */}
              {/* Example card */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Image
                  src="/team-member1.jpg"
                  alt="Team Member"
                  width={400}
                  height={400}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Ishan Bhadauria</h3>
                <p className="text-gray-700">Founder</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Image
                  src="/team-member1.jpg"
                  alt="Team Member"
                  width={400}
                  height={400}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Abhav Khanduja</h3>
                <p className="text-gray-700">Co-Founder</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Image
                  src="/team-member1.jpg"
                  alt="Team Member"
                  width={400}
                  height={400}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Kumar Saurav</h3>
                <p className="text-gray-700">Co-Founder</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-gray-900 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h2>
            <p className="text-lg mb-8">
              Have a question or want to collaborate? Feel free to reach out to us!
            </p>
                <button className="scroll-to-top inline-block bg-white text-gray-900 py-3 px-8 rounded-full uppercase tracking-wide font-semibold transition duration-300 hover:bg-gray-300 hover:text-gray-900">
                Get in Touch
                </button>
            
          </div>
        </section>

        {/* Scroll to top button */}
        <div className="fixed bottom-4 right-4 bg-gray-900 text-white p-4 rounded-full shadow-md hover:bg-gray-800 hover:text-white cursor-pointer scroll-to-top">
          <FaChevronDown className="w-6 h-6" />
        </div>
      </main>
    </div>
  );
};

export default About;
