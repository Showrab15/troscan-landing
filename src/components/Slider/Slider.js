import Image from "next/image";

const AutoScrollSection = () => {
  const images = [
    { id: 1, src: "/slider1.png", alt: "Mountain landscape" },
    { id: 2, src: "/slider2.png", alt: "Ocean sunset" },
    { id: 3, src: "/slider3.png", alt: "Forest path" },
    { id: 4, src: "/slider4.png", alt: "Desert dunes" },
    { id: 5, src: "/slider5.png", alt: "Canyon view" },
  ];

  return (
    <div className="w-full overflow-hidden lg:mt-[80px] mt-[40px] ">
      <div className="relative">
        <div className="flex animate-scroll-infinite gap-8 min-w-max">
          {[...images, ...images].map((image, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 md:w-[800px] md:h-[500px] w-[430px] h-[240px] overflow-hidden rounded-xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill // ✅ forces full container coverage
                className="object-cover"
                priority={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoScrollSection;
