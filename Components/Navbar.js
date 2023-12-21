
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
    const [search, setSearch] = useState("");
    const router  = useRouter(); 
    const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <>
      <div className="nav">
        <div className="flex flex-col px-10 py-5 justify-between space-y-5 md:flex-row md:space-y-0">
          <form onSubmit={handleSearch}>
            <div className="flex justify-between border overflow-hidden border-black rounded-md">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border w-screen p-2 md:w-80 rounded-md placeholder:font-thin focus:outline-none"
                placeholder="Search any name..."
              />
              <button className="text-white bg-black px-2" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Search;
