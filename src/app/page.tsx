/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Anybody } from "next/font/google";
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { ArrowRight, MessageSquare, Lock, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const anybody = Anybody({ subsets: ['latin'] })

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [currentExample, setCurrentExample] = useState(0);

  const learnMoreRef = useRef(null);
  const waitlistRef = useRef(null);

  const exampleThoughts = [
    "Starknet will melt faces",
    "Gmetal",
    "Gekubo",
    "GM Brother!",
    "Bullish on Starknet",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExample((prev) => (prev + 1) % exampleThoughts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [exampleThoughts.length]);

  const scrollToSection = (elementRef: any) => {
    return (e: any) => {
      e.preventDefault();
      elementRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Here you would normally handle the submission to your backend
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#FCF8DE]">
      <Head>
        <title>Blink | One thought daily</title>
        <meta name="description" content="Share one authentic thought daily, minted as an NFT you own" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex justify-center w-full my-12">
            <motion.svg
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewBox="0 0 800 400"
              className="h-80 w-[44rem]"
            >
              <text x="20" y="240" className={`text-[20rem] ${anybody.className} font-black`} fill="#EBFF42">Bl</text>
              <text x="350" y="240" className={`text-[12rem] ${anybody.className} font-black`} fill="#FCF8DE">ink</text>
            </motion.svg>

          </div>
        </nav>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              variants={fadeInUp}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                One <span className="text-[#EBFF42]">thought</span> daily,
                <span className="block mt-2">forever yours</span>
              </h1>
              <p className="text-lg mb-8 opacity-80">
                A minimalist app on Starknet where you post one raw text update daily,
                minted as an NFT you own. Friends &quot;blink&quot; at your thoughts, symbolizing they can see your mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#waitlist"
                  onClick={scrollToSection(waitlistRef)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#EBFF42] text-[#121212] px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition flex items-center justify-center"
                >
                  Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                </motion.a>
                <motion.a
                  href="#learn-more"
                  onClick={scrollToSection(learnMoreRef)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border border-[#FCF8DE] px-6 py-3 rounded-full font-medium hover:bg-[#FCF8DE] hover:bg-opacity-10 transition text-center"
                >
                  Learn More
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="md:w-1/2 flex justify-center"
            >
              <div className="relative w-64 h-64 bg-[#1a1a1a] rounded-lg shadow-lg p-6 flex flex-col">
                <div className="text-sm text-[#FCF8DE] opacity-60 mb-2">Today&apos;s thought</div>
                <div className="text-xl font-medium flex-grow">
                  {exampleThoughts[currentExample]}
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-sm opacity-60">April 10, 2025</div>
                  <div className="bg-[#EBFF42] text-[#121212] rounded-full px-3 py-1 text-xs font-medium flex items-center">
                    <MessageSquare className="h-3 w-3 mr-1" /> 5 blinks
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          ref={learnMoreRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20"
          id="learn-more"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold mb-10 text-center"
          >
            What We Offer
          </motion.h2>
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-[#1a1a1a] p-6 rounded-lg">
              <div className="bg-[#EBFF42] w-10 h-10 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="h-5 w-5 text-[#121212]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Authenticity</h3>
              <p className="opacity-80">
                Raw thoughts with no filters. Just you, your mind, and your audience.
                One update per day ensures quality over quantity.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-[#1a1a1a] p-6 rounded-lg">
              <div className="bg-[#EBFF42] w-10 h-10 rounded-full flex items-center justify-center mb-4">
                <Lock className="h-5 w-5 text-[#121212]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Permanent Ownership</h3>
              <p className="opacity-80">
                Each thought is minted as an NFT that you own on Starknet.
                Your intellectual property, secured forever on the blockchain.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-[#1a1a1a] p-6 rounded-lg">
              <div className="bg-[#EBFF42] w-10 h-10 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-5 w-5 text-[#121212]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Earn-rewards</h3>
              <p className="opacity-80">
                When users blink at your thought, you earn rewards, just a little sign of appreciation (less than $0.1).
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-[#1a1a1a] p-6 rounded-lg">
              <div className="bg-[#EBFF42] w-10 h-10 rounded-full flex items-center justify-center mb-4">
                <svg className="h-5 w-5 text-[#121212]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Simple Connection</h3>
              <p className="opacity-80">
                No complex social features, just real connection.
                See what your friends are thinking, and let them know you&apos;re listening.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="flex flex-col md:flex-row items-center bg-[#1a1a1a] rounded-lg p-8 gap-8"
          >
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <motion.ol
                variants={staggerChildren}
                className="space-y-4"
              >
                <motion.li variants={fadeInUp} className="flex items-start">
                  <span className="bg-[#EBFF42] text-[#121212] w-6 h-6 rounded-full flex items-center justify-center mr-3 shrink-0 mt-1">1</span>
                  <span>Connect your Starknet wallet</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start">
                  <span className="bg-[#EBFF42] text-[#121212] w-6 h-6 rounded-full flex items-center justify-center mr-3 shrink-0 mt-1">2</span>
                  <span>Share one thought daily</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start">
                  <span className="bg-[#EBFF42] text-[#121212] w-6 h-6 rounded-full flex items-center justify-center mr-3 shrink-0 mt-1">3</span>
                  <span>Your thought is minted as an NFT you own</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start">
                  <span className="bg-[#EBFF42] text-[#121212] w-6 h-6 rounded-full flex items-center justify-center mr-3 shrink-0 mt-1">4</span>
                  <span>Friends &quot;blink&quot; at your thoughts</span>
                </motion.li>
              </motion.ol>
            </div>
            <motion.div
              variants={fadeInUp}
              className="md:w-1/2"
            >
              <div className="bg-[#121212] rounded-lg p-4">
                <div className="flex mb-4">
                  <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="font-mono text-sm">
                  <div className="mb-2 text-[#EBFF42]">{"//"} Today&apos;s thought</div>
                  <div className="mb-4">const thought = &quot;<span className="text-[#EBFF42]">{exampleThoughts[currentExample]}</span>&quot;;</div>
                  <div className="mb-2 text-[#EBFF42]">{"//"} Mint as NFT</div>
                  <div>await blink.mint(thought);</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          ref={waitlistRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20"
          id="waitlist"
        >
          <motion.div
            variants={fadeInUp}
            className="max-w-xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Join the Waitlist</h2>
            <p className="mb-8 opacity-80">
              Blink is launching soon. Be among the first to experience a new way of sharing thoughts.
            </p>
            <motion.form
              variants={fadeInUp}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-[#1a1a1a] border border-[#333] rounded-full px-6 py-3 focus:outline-none focus:border-[#EBFF42] flex-grow"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#EBFF42] text-[#121212] px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition"
                >
                  {submitted ? "Thank you!" : "Join Waitlist"}
                </button>
              </div>
              <p className="text-sm opacity-60">
                We&apos;ll notify you when Blink is ready to launch. No spam, promise.
              </p>
            </motion.form>
          </motion.div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10"
        >
          <motion.div
            variants={fadeInUp}
            className="border-t border-[#333] pt-10"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <motion.div
              variants={staggerChildren}
              className="space-y-6 max-w-3xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="bg-[#1a1a1a] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">What is Blink?</h3>
                <p className="opacity-80">
                  Blink is a minimalist app on Starknet where you can post one raw text update daily,
                  which is minted as an NFT that you own. It&apos;s designed for authentic connection.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-[#1a1a1a] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Do I need crypto to use Blink?</h3>
                <p className="opacity-80">
                  Yes, you&apos;ll need a Starknet wallet to mint your thoughts as NFTs.
                  Don&apos;t worry, we&apos;ll guide you through the setup process.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-[#1a1a1a] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">What does &quot;blinking&quot; mean?</h3>
                <p className="opacity-80">
                  When someone blinks at your thought, it means they&apos;ve seen it and resonated with it.
                  It&apos;s a simple way of acknowledging that they can see your mind.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="bg-[#1a1a1a] py-10"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <svg viewBox="0 0 200 80" className="h-12 w-32">
                <text x="0" y="60" className={`text-[4rem] ${anybody.className} font-bold`} fill="#EBFF42">Bl</text>
                <text x="60" y="60" className={`text-[2rem] ${anybody.className} font-bold`} fill="#FCF8DE">ink</text>
              </svg>
              <p className="mt-2 text-sm opacity-60">One thought daily, forever yours.</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://x.com/blink24552" target='blank' className="hover:text-[#EBFF42]">X</a>
              <a href="https://github.com/undefinedorgcr/blink-web" target='blank' className="hover:text-[#EBFF42]">GitHub</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#333] text-center text-sm opacity-60">
            <p>© 2025 Blink. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
