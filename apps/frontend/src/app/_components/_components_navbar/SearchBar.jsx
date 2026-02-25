"use client";

import { LoaderCircle, Search, X } from "lucide-react";
import React, { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { useSearch } from "@/app/utils/apis/SearchApi";

// ✅ Debounce helper to prevent hitting API on every keystroke
function useDebounce(value, delay = 300) {
     const [debouncedValue, setDebouncedValue] = useState(value);
     useEffect(() => {
          const handler = setTimeout(() => setDebouncedValue(value), delay);
          return () => clearTimeout(handler);
     }, [value, delay]);
     return debouncedValue;
}

export default function SearchBar({ showSearch, setShowSearch }) {
     const [query, setQuery] = useState("");
     const [showDropdown, setShowDropdown] = useState(false);
     const dropdownRef = useRef(null);

     // ✅ Debounced query for better API performance
     const debouncedQuery = useDebounce(query.trim(), 400);
     const { data: searchData, isLoading } = useSearch(debouncedQuery);

     // ✅ Close dropdown when clicking outside
     useEffect(() => {
          const handleClickOutside = (event) => {
               if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                    setShowDropdown(false);
               }
          };
          document.addEventListener("mousedown", handleClickOutside);
          return () => document.removeEventListener("mousedown", handleClickOutside);
     }, []);

     // ✅ Only show dropdown if valid results
     useEffect(() => {
          if (debouncedQuery.length > 0 && searchData?.length > 0) {
               setShowDropdown(true);
          } else {
               setShowDropdown(false);
          }
     }, [debouncedQuery, searchData]);

     // ✅ Clear all and close search
     const handleClear = useCallback(() => {
          setQuery("");
          setShowSearch(false);
          setShowDropdown(false);
     }, [setShowSearch]);

     return (
          <div className="hidden lg:block md:w-[180px] h-[35px]">
               <div className="relative h-full border rounded-full border-whiteish-500 transition-all duration-200 focus-within:ring-1 focus-within:ring-white/50">
                    {/* Input */}
                    <div className="flex items-center h-full px-3 py-1.5 rounded-full">
                         <input
                              type="text"
                              value={query}
                              onChange={(e) => {
                                   !showSearch && setShowSearch(true);
                                   setQuery(e.target.value);
                              }}
                              placeholder="Search"
                              className="w-full text-sm text-white bg-transparent outline-none font-nunito placeholder:text-white/60"
                              autoComplete="off"
                         />
                    </div>

                    {/* Dropdown */}
                    {showDropdown && (
                         <div
                              ref={dropdownRef}
                              className="absolute z-50 right-0 w-[450px] max-h-[400px] overflow-y-auto p-2 bg-whiteish-300 dark:bg-blackish-400 shadow-xl rounded-md mt-2 animate-in fade-in slide-in-from-top-2 duration-200"
                         >
                              {searchData?.map((item) => (
                                   <Link
                                        key={item?.slug}
                                        href={item?.type === "TAG" ? `/${item.slug}` : `/blog/${item.slug}`}
                                        onClick={handleClear}
                                        className="block rounded-md p-2 font-manrope text-[15px] leading-[120%] font-semibold hover:bg-gray-200 dark:hover:bg-blackish-300 text-black dark:text-whiteish-300 transition"
                                   >
                                        {item?.type === "TAG" ? `#${item?.name}` : item?.title}
                                   </Link>
                              ))}
                         </div>
                    )}

                    {/* Right-side Icon (Search / Loading / Clear) */}
                    <div className="absolute top-0.5 right-0.5 flex items-center justify-center p-1.5 rounded-full bg-white shadow-sm">
                         {isLoading ? (
                              <LoaderCircle
                                   size={16}
                                   className="text-black/90 animate-spin"
                                   strokeWidth={1.5}
                              />
                         ) : showSearch && query.length > 0 ? (
                              <X
                                   size={16}
                                   onClick={handleClear}
                                   className="cursor-pointer text-black/90 hover:text-red-500 transition"
                                   strokeWidth={1.5}
                              />
                         ) : (
                              <Search
                                   size={16}
                                   onClick={() => setShowSearch(true)}
                                   className="cursor-pointer text-black/90 hover:text-blue-500 transition"
                                   strokeWidth={1.5}
                              />
                         )}
                    </div>
               </div>
          </div>
     );
}
