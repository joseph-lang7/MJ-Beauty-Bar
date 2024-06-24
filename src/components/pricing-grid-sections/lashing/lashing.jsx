const Lashing = () => {
  return (
    <div className="w-[300px] flex flex-col gap-5">
      <h2 className="text-4xl uppercase">Lashing</h2>
      <div className="flex flex-col gap-2">
        <div className="w-max flex flex-col">
          <h3 className="text-xl">Eyelash Extensions</h3>
          <span className="w-full h-[1px] bg-black"></span>
        </div>
        <div className="flex gap-2 w-full justify-between">
          <h3>Classic</h3>
          <p className="font-bold">$150</p>
        </div>
        <div className="hidden md:block">Image</div>
        <div className="flex gap-2 w-full justify-between">
          <h3>Fill (2 week / 3 week )</h3>
          <p className="font-bold">$70 / $80</p>
        </div>
        <p className="italic text-sm">
          *1 extension to 1 natural lash with no open fans*
        </p>
      </div>
      <div className="w-full flex flex-col gap-2">
        <div className="w-max flex flex-col">
          <h3 className="text-xl">Add Ons</h3>
          <span className="w-full h-[1px] bg-black"></span>
        </div>
        <div className="w-full flex justify-between">
          <p>Colors</p>
          <p className="font-bold">$15</p>
        </div>
        <div className="w-full flex justify-between">
          <p>Lash Removal</p>
          <p className="font-bold">$20</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="italic text-sm">
            *Lash fills past 3 weeks (21 days) will be charged a full set. *{" "}
          </p>
          <p className="italic text-sm">
            *Must have 50% or more of extensions remaining on day of fill. Less
            than 50% will be charged as a new set*
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <div className="w-max flex flex-col">
          <h3 className="text-xl">Lash Lift</h3>
          <span className="w-full h-[1px] bg-black"></span>
        </div>
        <div className="w-full flex justify-between">
          <p>Lash Lift And Tint</p>
          <p className="font-bold">$80</p>
        </div>
        <div className="w-full flex justify-between">
          <p>Lash Lift Only</p>
          <p className="font-bold">$60</p>
        </div>
        <div className="w-full flex justify-between">
          <p>Lash Tint Only</p>
          <p className="font-bold">$30</p>
        </div>
      </div>
    </div>
  );
};

export default Lashing;
