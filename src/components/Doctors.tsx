import SharedButton from "./shared-component/SharedButton";

const Doctors = () => {
  const docDetails = [
    {
      image: "/images/Doc-charlotte.jpg",
      field: "Neurologists",
      name: "Charlotte Brown",
      moto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum suscipit eveniet pariatur",
    },
    {
      image: "/images/Doc-pedro.jpg",
      field: "Psychiatrists",
      name: "Scott Peterson",
      moto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum suscipit eveniet pariatur",
    },
    {
      image: "/images/Doc-scott.jpg",
      field: "Cardiologists",
      name: "Steve Sins",
      moto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum suscipit eveniet pariatur",
    },
  ];

  return (
    <div className="!my-10">
      <p className="text-4xl !mb-10">Our Doctors</p>

      <div className="w-full h-full flex justify-center gap-10">
        {docDetails?.map((items, index) => {
          return (
            <div key={index} className="flex flex-col text-start gap-5">
              <img
                className="w-[400px] h-[400px] object-cover rounded-2xl"
                src={items.image}
              />
              <p className="text-blue-300"> {items.field}</p>
              <p className="text-2xl">{items.name}</p>
              <p>{items.moto}</p>
              <div>
                <SharedButton />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Doctors;
