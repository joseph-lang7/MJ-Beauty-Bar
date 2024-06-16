const ImageBanner = () => {
  return (
    <div className="h-auto md:max-h-[600px] min-w-full flex flex-col md:flex-row">
      <div className="flex-1 w-full">
        <img
          src="/woman-gazing.jpg"
          alt="woman gazing"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-[2] w-full">
        <img
          src="/facial.jpg"
          alt="woman getting a facial"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ImageBanner;
