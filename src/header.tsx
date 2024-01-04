import { TargetedEvent } from "preact/compat";
import { useState } from "preact/hooks";
import { useAppContext } from "./app-context";

const HeaderMobile = () => {
  const { cart } = useAppContext();
  const [searchBar, setSearchBar] = useState(false);
  const [menu, setMenu] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [showLocation, setShowLocation] = useState(false);
  const [location, setLocation] = useState("I");
  const toggleSearch = () => {
    setSearchBar((prev) => !prev);
  };

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  const handleSearchSubmit = (ev: TargetedEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setSearchText("");
    setSearchBar(false);
  };

  const toggleLocation = () => {
    setShowLocation((prev) => !prev);
  };

  return (
    <>
      <form
        onSubmit={handleSearchSubmit}
        className={`${
          searchBar
            ? "py-4 border-b-4 border-black"
            : "m-0 border-0 p-0 h-0 overflow-hidden"
        } w-full text-2xl bg-white placeholder-black`}
        style={{
          transition: "padding 250ms linear",
        }}
      >
        <input
          type="search"
          className="p-2 w-full text-2xl bg-white placeholder-black "
          placeholder="Search..."
          value={searchText}
          onChange={(ev) =>
            setSearchText((ev?.target as HTMLInputElement).value)
          }
        />
      </form>

      <div className="flex lg:hidden bg-yellow-400 p-2 shadow-lg hover:bg-white items-center gap-2 justify-evenly">
        <button
          className="w-16 h-16 pt-3 text-lg flex justify-center border-4 border-black rounded-full"
          onClick={toggleMenu}
        >
          {menu ? (
            <p className="text-2xl font-bold">X</p>
          ) : (
            <img alt="Menu" src="/menu.png" height="30" width="30" />
          )}
        </button>
        <button
          className="w-2/12 text-lg flex justify-center"
          onClick={toggleSearch}
        >
          <img alt="Search" src="/search.png" height="30" width="30" />
        </button>
        <h1 className="font-bold w-4/12 text-center text-2xl">Merch Shop</h1>
        <button
          className="w-2/12 text-lg flex justify-center"
          onClick={toggleLocation}
        >
          <img alt="Location" src="/location.png" height="30" width="30" />
        </button>
        <p className="w-2/12 p-1 text-center text-lg rounded-full border-2 border-black">
          {cart.length}
        </p>
      </div>
      <div
        className={`${
          menu ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-opacity transition-duration-500 flex flex-col gap-20 min-h-screen absolute p-8 bg-white w-full`}
      >
        <div className="flex flex-col gap-8 text-5xl font-bold">
          <a href="/#" className="">
            Shop
          </a>
          <a href="/#">About</a>
        </div>

        <div className="flex flex-col gap-8 text-xl">
          <a href="/#" className="">
            Privacy Policy
          </a>
          <a href="/#">Contact Us</a>
          <a href="/#">Terms of Sale</a>
        </div>
      </div>

      <div
        className={`${
          showLocation ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-opacity transition-duration-500 shadow-lg flex flex-col gap-4 absolute p-8 bg-white w-1/2`}
        style={{
          top: "40%",
          left: "25%",
        }}
      >
        <label htmlFor="location-select" className="text-lg font-bold p-4">
          Select Location
        </label>
        <select
          id="location-select"
          name="location-select"
          className="p-4 text-2xl font-bold border-2 border-black rounded-full"
          onChange={(ev) =>
            setLocation((ev?.target as HTMLSelectElement)?.value)
          }
        >
          <option value="I" selected={location === "I"}>
            India
          </option>
          <option value="SL" selected={location === "SL"}>
            Sri Lanka
          </option>
          <option value="G" selected={location === "G"}>
            Global
          </option>
        </select>
        <button
          className="text-2xl rounded-full p-2 border-2 border-black w-16 h-16 self-center"
          onClick={toggleLocation}
        >
          X
        </button>
      </div>
    </>
  );
};

const HeaderDesktop = () => {
  const { cart } = useAppContext();
  const [location, setLocation] = useState("I");
  const [search, setSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const toggleSearch = () => {
    setSearch((prev) => !prev);
  };
  const handleSearchSubmit = (ev: TargetedEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setSearchTerm("");
    setSearch(false);
  };

  return (
    <div className="hidden lg:flex bg-yellow-400 p-2 gap-4 shadow-lg hover:bg-white items-center justify-evenly ">
      <button
        className="w-2/12 text-lg flex justify-center"
        onClick={toggleSearch}
      >
        <img alt="Search" src="/search.png" height="30" width="30" />
      </button>
      <form
        onSubmit={handleSearchSubmit}
        className={`${
          search ? "opacity-100 visible" : "opacity-0 invisible"
        } w-2/12 bg-yellow-400 transition-opacity transition-duration-500 rounded-xl`}
      >
        <input
          type="search"
          className="p-2 rounded-xl placeholder-black bg-yellow-400 font-bold text-lg"
          placeholder="Search..."
          value={searchTerm}
          onChange={(ev) =>
            setSearchTerm((ev?.target as HTMLInputElement).value)
          }
        />
      </form>

      <h1 className="font-bold w-4/12 text-center text-2xl">Merch Shop</h1>
      <select
        id="location-select"
        name="location-select"
        className="p-2 w-2/12 flex items-center text-center text-2xl font-bold border-2 border-black rounded-full bg-yellow-400"
        onChange={(ev) => setLocation((ev?.target as HTMLSelectElement)?.value)}
      >
        <option value="I" selected={location === "I"}>
          India
        </option>
        <option value="SL" selected={location === "SL"}>
          Sri Lanka
        </option>
        <option value="G" selected={location === "G"}>
          Global
        </option>
      </select>
      <p className="w-2/12 p-2 text-center font-bold text-lg rounded-full border-2 border-black">
        CART {cart.length}
      </p>
    </div>
  );
};
const Header = () => {
  return (
    <header>
      <HeaderMobile />
      <HeaderDesktop />
    </header>
  );
};

export default Header;
