import Button from "./shared-component/Button";

const Villain = () => {
  return (
    <div className="w-full h-[500px] flex gap-12 !my-20">
      <div className="max-w- full w-full h-full">
        <img
          src="/images/image-doc.jpg"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="w-full max-w-full h-full flex flex-col text-start gap-8">
        <p className="text-4xl leading-12">
          Consutation with our professional doctors
        </p>
        <p>
          Our doctors bring years of experience and specialized knowledge to the
          table ensuring you recieve the highest quality of care.
        </p>
        <p>We understand that every indevidual is unique</p>
        <p>
          Our consultations are tailored to your specific needs taking into
          account your medical history, lifestyle, and preferences.
        </p>
        <div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Villain;
