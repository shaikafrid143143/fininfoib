import { useInView } from "framer-motion";
import { useRef } from "react";

const Optimizing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <>
      <section>
        <div >
          <div  className="ml-3 mt-6 lg:block lg:mt-10 relative">
            <img
            style={{
                transform:isInView?"none":"scale(0.5)",
                transition:"all 0.3s cubic-bezier(0.6,0.01,0.05,0.95) 1.5s"
              }}
              src="ark1.png"
              className=" absolute md:h-16 w-26 h-32 lg:w-16 lg:h-52  right-0 top-0"
            />
          </div>
          <div className="flex flex-col justify-center items-center pl-2 pt-2 pr-2 pb-2 w-full">
            <label
            style={{
                transform:isInView?"none":"scale(0)",
                transition:"all 0.3s cubic-bezier(0.6,0.01,0.05,0.95) 1s"
              }}
            className="text-2xl text-pH font-bold text-center lg:text-5xl">
              Optimizing your IT infrastructure
            </label>
            <div
              className=" flex flex-col md:grid md:grid-cols-2  lg:grid lg:grid-cols-2 lg:p-8 lg:pt-14
              relative "
            >
              <div className="transition ease-in delay-300">
                <embed
                ref={ref}
                style={{
                    transform:isInView?"none":"scale(0.5)",
                    transition:"all 0.3s cubic-bezier(0.6,0.01,0.05,0.95) 1.5s"
                  }}
                  src="home3.webp"
                  className=" w-full p-4 mt-4  object-fill "
                />
              </div>
              <div className="lg:pt-10">
                <Text1/>
                <Text2/>
                <Text3/>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

function Text1() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <>
    <p 
    ref={ref}
    style={{
        transform:isInView?"none":"scale(0.8)",
        transition:"all 0.3s cubic-bezier(0.6,0.01,0.05,0.95) 1s"
      }}
    className="md:text-xs text-sH  p-4 font-light text-center lg:text-gray-800 lg:text-xl lg:text-left ">
      Fininfolib is a renowned offshore development services provided commited
      to helping organizations accomplish their objectives by granting them
      access to skilled and cost-effective resources that can improve their
      efficiency.
    </p></>
  )
}
function Text2() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <p ref={ref}
    style={{
        transform:isInView?"none":"scale(0.8)",
        transition:"all 0.3s cubic-bezier(0.6,0.01,0.05,0.95) 1s"
      }} className="md:text-xs text-sH pl-4 pr-4 font-light pb-4 text-center lg:text-gray-800 lg:text-xl lg:text-left">
      We Recognize the difficulties that businesses encounter when searching for
      free
    </p>
  );
}
function Text3() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <p 
    ref={ref}
    style={{
        transform:isInView?"none":"scale(0.8)",
        transition:"all 0.3s cubic-bezier(0.6,0.01,0.05,0.95) 1s"
      }}
    className="md:text-xs text-sH pl-4 pr-4 font-light text-center lg:text-gray-800 lg:text-xl lg:text-left">
      appropriate talent, which is why we provide an all-inclusive solution that
      incorporates a pool of proficient developers ,UI & UX designers,customer
      support and technical staff,along with a streamlined proccess management
      approach.
    </p>
  );
}

export default Optimizing;
