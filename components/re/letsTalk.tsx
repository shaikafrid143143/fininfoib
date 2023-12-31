"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function LetsTalk({letsTalkRef}) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <>
      <section ref={letsTalkRef}>
        <div id="contact" className=" flex flex-col relative lg:mt-12">
          <div>
            <img src="ark2.png" className="absolute hidden lg:block w-20 h-40 top-0 left-0 " />
          </div>
          <div className="flex flex-col m-4 space-y-4 lg:justify-center lg:items-center lg:px-20  xl:px-40 lg:text-center">
            <h2 className="text-xl  text-pH font-bold lg:text-4xl xl:text-5xl">We have handpicked developers ready to work for your projects</h2>
            <p className="flex font-light lg:text-center lg:text-2xl">We know that hiring remote developers can be a daunting process.
              We’ve made it as easy as possible for you to find the perfect candidate</p>
          </div>

        </div>
        <div className="flex flex-col m-4 mt-6 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 lg:px-8 xl:px-16">
          <div className="m-4 ">
            <img ref={ref}
              style={{
                transform: isInView ? "none" : "scale(0.6)",
                transition: "all 0.9s cubic-bezier(0.6,0.01,0.05,0.95) 1s"
              }} src="form_img.webp" className="mb-6" />

          </div>
          <div className="flex flex-col justify-start items-start  space-y-4 lg:justify-center lg:pl-20 ">
            <Field1 />
            <Field2 />
            <Field3 />
            <Field4 />
            <Field5 />
          </div>
        </div>
      </section>

    </>
  )
}



function Field1() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <>
      <div ref={ref} style={{
        transform: isInView ? "none" : "translateX(-10vh)",
        transition: "all 0.9s cubic-bezier(0.6,0.01,0.05,0.95) 1s"
      }} className="flex">
        <label className="font-bold text-2xl border-b border-o lg:border-b-2 lg:text-4xl lg:mb-10" >
          Get in </label>
        <a className="font-bold text-2xl pl-1 lg:text-4xl">touch</a>
      </div>

    </>
  )
}
function Field2() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <>
     <div ref={ref} style={{
              transform: isInView ? "none" : "translateX(-10vh)",
              transition: "all 0.9s cubic-bezier(0.6,0.01,0.05,0.95) 1s"
            }} className="flex flex-col w-full">
              <label className="font-bold lg:text-2xl ">Full name <span className="text-red text-xl lg:text-4xl">*</span></label>
              <input type="text" placeholder="Enter your name" className=" p-2 outline-none border-b bg-transparent border-gray-600 justify-start
            w-5/6 ml-4"/>
            </div>

    </>
  )
}
function Field3() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <>
      <div ref={ref} style={{
              transform: isInView ? "none" : "translateX(-10vh)",
              transition: "all 0.9s cubic-bezier(0.6,0.01,0.05,0.95) 1s"
            }} className="flex flex-col w-full">
              <label className="font-bold lg:text-2xl">Email <span className="text-red text-xl lg:text-4xl">*</span></label>
              <input type="text" placeholder="Enter your email" className="p-2 outline-none border-b bg-transparent border-gray-600 justify-start
            w-5/6 ml-4"/>
            </div>

    </>
  )
}
function Field4() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <>
      <div ref={ref} style={{
              transform: isInView ? "none" : "translateX(-10vh)",
              transition: "all 0.9s cubic-bezier(0.6,0.01,0.05,0.95) 1s"
            }} className="flex flex-col w-full">
              <label className="font-bold lg:text-2xl">Message <span className="text-red text-xl lg:text-4xl">*</span></label>
              <textarea placeholder="Message" className=" m-2 outline-none border-b bg-transparent border-gray-600 justify-start
            w-5/6 ml-4"></textarea>
            </div>

    </>
  )
}
function Field5() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <>
     <div ref={ref} style={{
              transform: isInView ? "none" : "translateX(-10vh)",
              transition: "all 0.9s cubic-bezier(0.6,0.01,0.05,0.95) 1s"
            }} className="flex justify-center items-center">
              <button className="bg-o1 text-white h-fit w-fit
               px-8 py-2 text-xl rounded-3xl ml-4 lg:px-14 lg:py-3 lg:text-2xl">Submit</button>

            </div>
    </>
  )
}
