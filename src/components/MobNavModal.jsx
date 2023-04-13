import { TfiSearch } from "react-icons/tfi";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearched as setSearchedAction } from "../services/features/store";

export default function MobNavModal() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = () => {
    dispatch(setSearchedAction(search));
    setSearch("");
  };
  return (
    <div className="menuDropDown  pt-5 space-y-2 px-3 bg-white pb-20">
      <div className="flex">
        <Link
          to="/"
          className="hover:bg-red-400 duration-300 hover:text-white text-lg underline p-2 rounded-xl  cursor-pointer"
        >
          Home
        </Link>
      </div>
      <div className="flex-1 relative cursor-pointer">
        <input
          value={search}
          placeholder="Search.."
          type="text"
          onChange={handleSearchChange}
          className="w-full px-5  border py-2 rounded-full border-gray-500 focus:outline-0"
        />
        <button
          onClick={handleSearchClick}
          className="absolute right-3 top-2 cursor-pointer hover:scale-105"
        >
          <TfiSearch className="text-2xl text-gray-500 " />
        </button>
      </div>
    </div>
  );
}
