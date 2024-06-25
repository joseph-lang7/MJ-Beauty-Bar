const ImageBanner = () => {
  return (
    <div className="h-auto overflow-hidden min-w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-5 ">
      <div className="flex-1 w-full">
        <img
          src="/eyelash-in-mirror.jpeg"
          alt="woman gazing"
          className="w-full h-[300px] object-right object-cover"
        />
      </div>
      <div className="flex-1 w-full">
        <img
          src="/left-eyelash.jpeg"
          alt="woman getting a facial"
          className="w-full h-[300px]  object-cover"
        />
      </div>
      <div className="flex-1 w-full">
        <img
          src="/makeup.jpeg"
          alt="woman getting a facial"
          className="w-full h-[300px] object-cover"
        />
      </div>
      <div className="flex-1 w-full">
        <img
          src="/makeup2.jpeg"
          alt="woman getting a facial"
          className="w-full h-[300px] object-cover"
        />
      </div>
    </div>
  );
};

export default ImageBanner;
