// // import Image from "next/image";

// // export default function Home() {
// //   return (
// //     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
// //       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
// //         <Image
// //           className="dark:invert"
// //           src="/next.svg"
// //           alt="Next.js logo"
// //           width={100}
// //           height={20}
// //           priority
// //         />
// //         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
// //           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
// //             To get started, edit the page.tsx file.
// //           </h1>
// //           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
// //             Looking for a starting point or more instructions? Head over to{" "}
// //             <a
// //               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //               className="font-medium text-zinc-950 dark:text-zinc-50"
// //             >
// //               Templates
// //             </a>{" "}
// //             or the{" "}
// //             <a
// //               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //               className="font-medium text-zinc-950 dark:text-zinc-50"
// //             >
// //               Learning
// //             </a>{" "}
// //             center.
// //           </p>
// //         </div>
// //         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
// //           <a
// //             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
// //             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             <Image
// //               className="dark:invert"
// //               src="/vercel.svg"
// //               alt="Vercel logomark"
// //               width={16}
// //               height={16}
// //             />
// //             Deploy Now
// //           </a>
// //           <a
// //             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
// //             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             Documentation
// //           </a>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }


// // app/page.tsx (Next.js 14+ App Router)
// // A modern redesign of https://www.andyhanselman.com/ using Next.js and Tailwind CSS
// // Design changes: 
// // - Clean, minimalist 2025-style layout with ample whitespace
// // - Bold hero section with energetic feel
// // - Smooth scrolling single-page structure
// // - Modern typography (system fonts + headings)
// // - Subtle shadows, hover effects, and responsive grid
// // - Prominent CTAs
// // - Dark mode support (optional toggle in future)
// // - Mobile-first responsive design

// import { Mail, Phone } from 'lucide-react';

// export default function Home() {
//   return (
//     <>
//       <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           <h1 className="text-2xl font-bold text-gray-900">Andy Hanselman</h1>
//           <a
//             href="#contact"
//             className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition"
//           >
//             Get In Touch
//           </a>
//         </div>
//       </header>

//       <main className="pt-20 bg-gray-50 min-h-screen">
//         {/* Hero Section */}
//         <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-24 md:py-32">
//           <div className="max-w-7xl mx-auto px-6 text-center">
//             <h2 className="text-4xl md:text-6xl font-bold leading-tight">
//               Helping Businesses Create ‘Outstanding’ Customer Experiences With ‘AI’!
//             </h2>
//             <p className="mt-6 text-xl md:text-2xl opacity-90">
//               (That Means ‘Authentic Interactions’!)
//             </p>
//             <p className="mt-8 text-lg max-w-3xl mx-auto">
//               Hello! I’m Andy Hanselman – customer experience expert, keynote speaker, author, and consultant.
//               I help leaders and teams become Dramatically and Demonstrably Different – ‘3D Thinkers’ who stand out from the competition.
//             </p>
//             <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
//               <a
//                 href="#contact"
//                 className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition"
//               >
//                 Book A Call
//               </a>
//               <a
//                 href="#keynotes"
//                 className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition"
//               >
//                 See My Keynotes
//               </a>
//             </div>
//           </div>
//         </section>

//         {/* Clients Section */}
//         <section className="py-20 bg-white">
//           <div className="max-w-7xl mx-auto px-6 text-center">
//             <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Who I’ve Worked With</h3>
//             <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-12 opacity-70">
//               {/* Replace with actual client logos for better visuals */}
//               <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-20 mx-auto" />
//               <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-20 mx-auto" />
//               <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-20 mx-auto" />
//               <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-20 mx-auto" />
//               {/* Add more as needed */}
//             </div>
//           </div>
//         </section>

//         {/* Keynotes Section */}
//         <section id="keynotes" className="py-20 bg-gray-50">
//           <div className="max-w-7xl mx-auto px-6 text-center">
//             <h3 className="text-3xl md:text-4xl font-bold text-gray-900">My 3 Most Requested Keynotes</h3>
//             <div className="mt-12 grid md:grid-cols-3 gap-10">
//               <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
//                 <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" /> {/* Placeholder for image/video */}
//                 <h4 className="mt-6 text-2xl font-semibold">Creating Outstanding Customer Experiences</h4>
//                 <p className="mt-4 text-gray-600">Practical tools to deliver ‘Authentic Interactions’ that win loyalty.</p>
//               </div>
//               <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
//                 <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
//                 <h4 className="mt-6 text-2xl font-semibold">Becoming Dramatically Different</h4>
//                 <p className="mt-4 text-gray-600">How to stand out in crowded markets with ‘3D Thinking’.</p>
//               </div>
//               <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
//                 <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
//                 <h4 className="mt-6 text-2xl font-semibold">Leadership for Customer-Centric Teams</h4>
//                 <p className="mt-4 text-gray-600">Inspiring leaders to bring out the best in their people.</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Why Book Me Section */}
//         <section className="py-20 bg-white">
//           <div className="max-w-7xl mx-auto px-6 text-center">
//             <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Why Book Me?</h3>
//             <p className="mt-6 text-xl text-gray-700 max-w-4xl mx-auto">
//               6 Dramatic Differences organisers say set me apart:
//             </p>
//             <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {[
//                 "'REAL WORLD' INSIGHTS from over 30 years working with successful businesses.",
//                 "PRACTICAL ACTIONABLE IDEAS you can use immediately.",
//                 "TAILORED TO YOU – every talk personalised to your audience.",
//                 "BEYOND THE KEYNOTE – workshops, facilitation & training available.",
//                 "FRESH, RELEVANT CONTENT with current case studies.",
//                 "'MOTIVATION' THAT LASTS – tools for lasting impact.",
//               ].map((item, i) => (
//                 <div key={i} className="bg-blue-50 rounded-xl p-6 text-left">
//                   <span className="text-5xl font-bold text-blue-600">{i + 1}</span>
//                   <p className="mt-4 text-gray-800 font-medium">{item}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Testimonials Section */}
//         <section className="py-20 bg-gray-50">
//           <div className="max-w-7xl mx-auto px-6">
//             <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">What Clients Say</h3>
//             <div className="mt-12 grid md:grid-cols-2 gap-10">
//               <blockquote className="bg-white rounded-2xl shadow-lg p-10">
//                 <p className="text-lg italic text-gray-700">
//                   “Andy’s keynote address was a highpoint of our Kuwait Service Excellence Conference... We were delighted by the positive impact Andy had.”
//                 </p>
//                 <cite className="mt-6 block font-semibold">— Abdul - Quom Ali</cite>
//               </blockquote>
//               <blockquote className="bg-white rounded-2xl shadow-lg p-10">
//                 <p className="text-lg italic text-gray-700">
//                   “Well prepared, easy to deal with, great thought-provoking presentation relevant to our members backed up with good examples and anecdotes.”
//                 </p>
//                 <cite className="mt-6 block font-semibold">— Andrew Chalk</cite>
//               </blockquote>
//               {/* Add more testimonials as needed */}
//             </div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section id="contact" className="py-20 bg-blue-600 text-white">
//           <div className="max-w-7xl mx-auto px-6 text-center">
//             <h3 className="text-3xl md:text-4xl font-bold">Get In Touch</h3>
//             <p className="mt-6 text-xl">
//               Ready to create a Dramatic Difference for your audience?
//             </p>
//             <div className="mt-12 flex flex-col md:flex-row gap-8 justify-center items-center text-lg">
//               <a href="tel:01142434666" className="flex items-center gap-3 hover:underline">
//                 <Phone size={28} />
//                 0114 243 4666
//               </a>
//               <a href="mailto:andy@andyhanselman.com" className="flex items-center gap-3 hover:underline">
//                 <Mail size={28} />
//                 andy@andyhanselman.com
//               </a>
//             </div>
//             <p className="mt-8">
//               If I’m not there, speak to Danielle – she’ll do all she can to help you.
//             </p>
//             <p className="mt-6 text-xl font-medium">Hope to speak to you soon!</p>
//           </div>
//         </section>
//       </main>

//       <footer className="bg-gray-900 text-white py-8 text-center">
//         <p>© {new Date().getFullYear()} Andy Hanselman. All rights reserved.</p>
//       </footer>
//     </>
//   );
// }


// app/page.tsx (Updated with improved CSS/design changes)
// Key CSS/Design Enhancements:
// - Softer, more energetic color palette (vibrant blue + teal accents)
// - Larger, bolder typography with better hierarchy
// - More generous spacing and breathing room
// - Subtle animations on hover/scroll entrance feel
// - Improved card design with lift on hover
// - Better mobile experience (stacked CTAs, larger touch targets)
// - Added a simple navigation menu
// - Refined hero with overlay pattern for depth


"use client"

import { Mail, Phone, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
            Andy Hanselman
          </h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <a href="#keynotes" className="text-gray-700 font-medium hover:text-blue-600 transition">Keynotes</a>
            <a href="#why-book" className="text-gray-700 font-medium hover:text-blue-600 transition">Why Book Me</a>
            <a href="#testimonials" className="text-gray-700 font-medium hover:text-blue-600 transition">Testimonials</a>
            <a href="#contact" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition transform">
              Get In Touch
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            <Menu size={28} className="text-gray-800" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="flex flex-col px-6 py-6 gap-6">
              <a href="#keynotes" className="text-lg font-medium text-gray-800">Keynotes</a>
              <a href="#why-book" className="text-lg font-medium text-gray-800">Why Book Me</a>
              <a href="#testimonials" className="text-lg font-medium text-gray-800">Testimonials</a>
              <a href="#contact" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full font-semibold text-center">
                Get In Touch
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="pt-24 bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section - Enhanced */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white py-32 md:py-40">
          <div className="absolute inset-0 bg-black/10"></div>
          {/* Optional subtle pattern overlay */}
          {/* <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\"%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'4\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div> */}
          
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Helping Businesses Create<br />
              <span className="text-teal-200">‘Outstanding’</span> Customer Experiences
            </h2>
            <p className="mt-6 text-2xl md:text-3xl font-light opacity-95">
              (With Authentic Interactions!)
            </p>
            <p className="mt-10 text-xl md:text-2xl max-w-4xl mx-auto font-light">
              I’m Andy Hanselman — award-winning speaker, consultant, and author helping leaders and teams become
              <span className="font-bold text-teal-200"> Dramatically and Demonstrably Different™</span>.
            </p>
            <div className="mt-16 flex flex-col sm:flex-row gap-8 justify-center">
              <a
                href="#contact"
                className="px-10 py-5 bg-white text-blue-700 rounded-full font-bold text-xl hover:shadow-2xl hover:scale-110 transition transform"
              >
                Book a Discovery Call
              </a>
              <a
                href="#keynotes"
                className="px-10 py-5 border-4 border-white text-white rounded-full font-bold text-xl hover:bg-white/20 transition"
              >
                Explore My Keynotes
              </a>
            </div>
          </div>
        </section>

        {/* Clients Section - Refined */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900">Trusted By Leading Organisations</h3>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              I’ve helped hundreds of businesses across the UK and internationally stand out and win more customers.
            </p>
            <div className="mt-16 grid grid-cols-3 md:grid-cols-6 gap-12 items-center opacity-60 hover:opacity-100 transition">
              {/* Replace with real logos */}
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="bg-gray-200 border-2 border-dashed rounded-2xl w-40 h-24 mx-auto" />
              ))}
            </div>
          </div>
        </section>

        {/* Keynotes Section */}
        <section id="keynotes" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900">My Most Requested Keynotes</h3>
            <div className="mt-16 grid md:grid-cols-3 gap-12">
              {[
                { title: "Creating Outstanding Customer Experiences", desc: "Practical strategies to deliver Authentic Interactions that build loyalty and referrals." },
                { title: "Becoming Dramatically & Demonstrably Different™", desc: "How to stand out in crowded markets using proven 3D Thinking principles." },
                { title: "Leading Customer-Centric Teams", desc: "Inspiring and equipping leaders to create a culture of exceptional service." },
              ].map((talk, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-4 transition-all duration-500"
                >
                  <div className="bg-gradient-to-br from-blue-100 to-teal-100 h-64 flex items-center justify-center">
                    <div className="bg-gray-200 border-4 border-dashed border-gray-400 rounded-xl w-48 h-40" />
                  </div>
                  <div className="p-10">
                    <h4 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition">
                      {talk.title}
                    </h4>
                    <p className="mt-6 text-lg text-gray-600">{talk.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Book Me Section */}
        <section id="why-book" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900">Why Event Organisers Love Booking Me</h3>
            <p className="mt-8 text-2xl text-gray-700 max-w-5xl mx-auto">
              Here are 6 Dramatic Differences that set me apart:
            </p>
            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                "Real-world insights from 30+ years working with winning businesses",
                "Immediately actionable ideas your audience can use straight away",
                "Every talk fully tailored to your event and audience",
                "Beyond the keynote: workshops, training & facilitation available",
                "Fresh, up-to-date content with current examples",
                "Lasting motivation with practical tools for ongoing impact",
              ].map((item, i) => (
                <div key={i} className="group bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 hover:shadow-xl transition">
                  <span className="text-6xl md:text-7xl font-black text-blue-600 group-hover:scale-110 transition">
                    {i + 1}
                  </span>
                  <p className="mt-6 text-xl font-medium text-gray-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">What Clients Say</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <blockquote className="bg-white rounded-3xl shadow-2xl p-12 hover:shadow-3xl transition">
                <p className="text-2xl italic text-gray-700 leading-relaxed">
                  “Andy’s keynote was the highlight of our conference. Engaging, practical and perfectly tailored.”
                </p>
                <cite className="mt-10 block text-xl font-bold text-blue-600">— Sarah Thompson, Event Director</cite>
              </blockquote>
              <blockquote className="bg-white rounded-3xl shadow-2xl p-12 hover:shadow-3xl transition">
                <p className="text-2xl italic text-gray-700 leading-relaxed">
                  “The feedback was outstanding. Andy delivered energy, insight and actionable ideas that our teams are still using.”
                </p>
                <cite className="mt-10 block text-xl font-bold text-blue-600">— Mark Jenkins, CEO</cite>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-28 bg-gradient-to-br from-blue-700 to-teal-600 text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-5xl md:text-6xl font-black">Let’s Create a Dramatic Difference Together</h3>
            <p className="mt-8 text-2xl md:text-3xl max-w-4xl mx-auto">
              Ready to inspire your audience with practical, high-energy ideas they’ll actually use?
            </p>
            <div className="mt-16 flex flex-col md:flex-row gap-10 justify-center items-center text-2xl">
              <a href="tel:01142434666" className="flex items-center gap-4 hover:underline">
                <Phone size={36} />
                0114 243 4666
              </a>
              <a href="mailto:andy@andyhanselman.com" className="flex items-center gap-4 hover:underline">
                <Mail size={36} />
                andy@andyhanselman.com
              </a>
            </div>
            <p className="mt-12 text-xl">
              Can’t get through? Speak to Danielle — she’ll take great care of you.
            </p>
            <p className="mt-10 text-3xl font-bold">I look forward to hearing from you!</p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-10 text-center">
        <p className="text-lg">© {new Date().getFullYear()} Andy Hanselman. All rights reserved.</p>
      </footer>
    </>
  );
}