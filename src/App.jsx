import React, { useState, useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Picture1 from '../src/assets/photo/picture1.jpg';
import Picture2 from '../src/assets/photo/picture2.jpg';
import Picture3 from '../src/assets/photo/picture3.jpg';
import Picture4 from '../src/assets/photo/picture4.jpg';
import Picture5 from '../src/assets/photo/picture5.jpg';
import thumbnail from '../src/assets/photo/thumbnail.jpg';

function App() {
  const [product, setProduct] = useState([
    { id: 1, src: Picture1 },
    { id: 2, src: Picture2 },
    { id: 3, src: Picture3 },
    { id: 4, src: Picture4 },
    { id: 5, src: Picture5 }
  ]);
  const [prod, setProd] = useState([
    { id: 1, hedding: "Maximum Functionality", details: "Like the Japanese poetry, the Wallet HAIKU portrays maximum functionality within a minimal form factor. We meticulously crafted every millimeter of this wallet, resulting in the smallest (3-inch height) full-length front pocket wallet without sacrificing functionality." },
    { id: 2, hedding: "Gen Magnetic System", details: "The redesigned next-gen magnetic system is thinner yet more powerful, seamlessly blending with the wallet, so you wont even feel its presence. The magnetic flap also hides a quick access card slot at the back for your most frequently used card, saving you from the hassle of opening the entire wallet every time just to reach your go-to card." },
    { id: 3, hedding: "Minimalist Interior", details: "The interior of this wallet pays homage to our minimalist design ethos. Its one of the cleanest interiors weve ever designed. With a secondary quick-access card slot for your backup card, which will always be within reach with just a push of your thumb, and a spacious card storage compartment below for organizing all your bank, business, or membership cards." }
  ]);

  const headRef = useRef();
  const firstTextRef = useRef();
  const secondTextRef = useRef();
  const thumbnailRef = useRef();
  const headTextRef = useRef();
  const productRefs = useRef([]);
  const thumRef = useRef(); 

  useGSAP(() => {
    const tl = gsap.timeline();
    gsap.from(headRef.current, {
      opacity: 0,
      duration: 1.2,
      x: -30,
      delay: .3,
    });
    tl.from(firstTextRef.current, {
      opacity: 0,
      duration: 1.2,
      x: -30,
    });
    tl.from(secondTextRef.current, {
      opacity: 0,
      duration: 1.2,
      x: -30,
    });
  }, []);

  useGSAP(() => {
    gsap.from(thumbnailRef.current, {
      opacity: 0,
      duration: 2,
      scale: 0.8,
      delay: .2,
    });
  }, []);

  useGSAP(() => {
    gsap.from(headTextRef.current, {
      opacity: 0,
      duration: 1.2,
      x: 30,
      delay: .2,
    });
  }, []);

  useGSAP(() => {
    productRefs.current.forEach((ref, index) => {
      gsap.from(ref, {
        opacity: 0,
        duration: 1.5,
        scale: 0.5,
        scrollTrigger: {
          trigger: ref,
          start: "top 60%", 
          end: "top 60%",
          scrub: 2,
        }
      });
    });
  }, []);

  useGSAP(() => {
    gsap.from(thumRef.current, {
      opacity: 0,
      duration: 1.5,
      scale: 0.5,
      scrollTrigger: {
        trigger: ".imageArea",
        start: "top 60%", 
        end: "top 60%",
        scrub: 2,
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] text-[#BF2227] font-georgia text-xl overflow-x-hidden p-4">
      {/* Header Section */}
      <div ref={headRef} className="w-full mt-5 h-[5vh] flex gap-2 justify-center items-center">
        <h1 ref={firstTextRef} className="text-2xl sm:text-3xl md:text-4xl">Wild</h1>
        <h1 ref={secondTextRef} className="text-2xl sm:text-3xl md:text-4xl">Woven</h1>
      </div>

      {/* Head Text Section */}
      <div ref={headTextRef} className="w-full h-[48vh] mt-2 flex flex-col items-center justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center">Finest Quality Full-Grain Leather Accessories</h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center">Designed & Handcrafted in Bangladesh</h1>
        <p className="text-center mt-2 max-w-2xl mx-auto">
          Inspired by the age-old heritage and craftsmanship, WildWoven Leather Products is offering you the finest quality leather accessories that are made to last. All the minimal yet functional products are designed and handcrafted in our own workshop by some of the best local artisans to complement your personality and style admirably.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mt-6">
        <img ref={thumbnailRef} className="rounded-lg max-w-full h-auto" height={250} width={410} src={thumbnail} alt="Thumbnail" />
      </div>

      {/* Wallet Name Section */}
      <div className="w-full h-[8vh] flex justify-center items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl">Haiku Front Pocket Wallet</h1>
      </div>

      {/* Product Section */}
      <div className="producty overflow-hidden">
        {product.map((item, index) => (
          <div key={item.id} className="flex flex-col justify-center items-center w-full h-[45vh]">
            <img
              ref={(el) => (productRefs.current[index] = el)}
              className="rounded-lg max-w-full h-auto"
              height={250} width={412}
              src={item.src}
              alt={`Product ${item.id}`}
            />
          </div>
        ))}
      </div>

      {/* Part 3 Section */}
      <div className="part-3 mt-8">
        <div className="textArea">
          {prod.map((item) => (
            <div key={item.id} className="mb-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-center">{item.hedding}</h3>
              <p className="text-center max-w-2xl mx-auto mt-2">{item.details}</p>
            </div>
          ))}
        </div>
        <div className="imageArea flex justify-center mt-8">
          <img ref={thumRef} className="rounded-lg max-w-full h-auto" height={250} width={410} src={thumbnail} alt="Thumbnail" />
        </div>
      </div>

      {/* Form Section */}
      <form className="bg-[#000000] flex gap-6 p-4 flex-col w-full mt-8">
        <input className="bg-[#000000] text-[#BF2227] font-georgia text-xl border-b border-[#BF2227] w-[70vw] p-2" type="text" placeholder="Name" />
        <input className="bg-[#000000] text-[#BF2227] font-georgia text-xl border-b border-[#BF2227] w-[70vw] p-2" type="number" placeholder="Phone Number" />
        <input className="bg-[#000000] text-[#BF2227] font-georgia text-xl border-b border-[#BF2227] w-[70vw] p-2" type="text" placeholder="Address" />
        <button className="text-[#BF2227] font-georgia text-lg rounded-lg py-3 bg-green-500 w-32">Submit</button>
      </form>
    </div>
  );
}

export default App;