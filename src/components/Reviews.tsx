const Reviews = () => {
  return (
    <div className="w-full h-[250px] flex gap-12 !my-10">
      <div className="max-w-full w-full h-full flex flex-col text-start gap-5">
        <p className="text-blue-500">References</p>
        <p className="text-4xl">
          What our patients <br />
          say about us
        </p>
        <p>
          Our dedicated team is commited in <br />
          providing personal care
        </p>
      </div>

      <div className="max-w-full w-full h-full">
        <p className="text-2xl font-semibold flex flex-col text-start">
          The live consultation with my Dr was a <br />
          good experience. It was as if I was there <br />
          in person but from the comfort of my <br />
          own home.
        </p>
      </div>
    </div>
  );
};

export default Reviews;
