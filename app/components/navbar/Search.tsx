"use client";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="border w-full md:w-auto py-2 rounded-md shadow-sm hover:shadow-md cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6">Anywhere</div>
        <div className="hidden sm:block text-sm font-semibold px-6 border-x flex-1 text-center">
          Any Week
        </div>
        <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div className="hidden:sm-block">Add Tenants</div>
          <div className="p-2 bg-blue-500 rounded-md text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
