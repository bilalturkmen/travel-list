import SVGTravel from "../assets/travel";

function Header() {
  return (
    <header className="bg-amber-200">
      <div className="container flex sm:flex-row flex-col items-center p-5 gap-3 ">
        <span className="size-15">
          <SVGTravel />
        </span>
        <span className="text-4xl font-bold   text-gray-700 sm:ml-3 sm:pr-6 sm:border-r">
          FAR AWAY
        </span>
        <span className=" border-gray-400 sm:pl-3">
          Travel Packing Checklist
        </span>
      </div>
    </header>
  );
}

export default Header;
