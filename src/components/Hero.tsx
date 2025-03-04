import { GoArrowUpRight, GoPlus } from "react-icons/go";
import Button from "./shared-component/Button";

const Hero = () => {
  return (
    <div className="w-full h-[500px] flex gap-12 !my-10">
      {/* Left Container */}
      <div className="w-full h-full flex flex-col text-start gap-8">
        <p className="text-sm text-sky-500">Lorem Ipsum Dolor</p>
        <p className="text-5xl leading-15">Consult your doctor <br />from home</p>
        <p className="w-[620px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          suscipit eveniet pariatur alias qui sapiente aspernatur velit quasi
          magnam unde. Fuga ipsa, quo pariatur nihil.
        </p>

        <div className="flex gap-8 items-center">
          <Button />

          <div className="flex items-center gap-2">
            <p className="text-blue-500">How it works</p>
            <GoArrowUpRight />
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <div className="flex items-center">
            <p className="text-3xl">12</p>
            <GoPlus size={20}/>
          </div>
          <p>Years helping patients online</p>
        </div>
      </div>

      {/* Right Container */}
      <div className="w-full h-full">
        <img src="/images/image-sample.jpg" className="w-full h-full object-cover rounded-2xl"/>
      </div>
    </div>
  );
};

export default Hero;
