const ImageBanner = () => {
  return (
    <div className="h-auto max-h-[600px] min-w-full flex flex-col md:flex-row">
      <div className="flex-1 w-full">
        <img
          src="/woman-gazing.jpg"
          alt="woman gazing"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex-[2] w-full">
        <img
          src="/facial.jpg"
          alt="woman getting a facial"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default ImageBanner;
