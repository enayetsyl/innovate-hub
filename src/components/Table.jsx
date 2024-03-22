import { FaPlus } from "react-icons/fa6";
import { tableRowInfo } from "../constant";
import { useState } from "react";

const Table = ({ searchQuery, checkedRows, setCheckedRows }) => {
  // States for checkbox select
  const [selectAll, setSelectAll] = useState(false);
 

  // Function to handle checkbox change in the header

  const handleSelectAllChange = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      const allRowIndices = Array.from(Array(tableRowInfo.length).keys());
      setCheckedRows(allRowIndices);
    } else {
      setCheckedRows([]);
    }
  };

  // Function to handle checkbox change in a row
  const handleCheckboxChange = (rowIndex) => {
    if (checkedRows.includes(rowIndex)) {
      setCheckedRows(checkedRows.filter((row) => row !== rowIndex));
    } else {
      setCheckedRows([...checkedRows, rowIndex]);
    }
  };

  // Function to filter table data based on search query
  const filteredRows = tableRowInfo.filter((row) =>
    row.some(
      (cell) =>
        // eslint-disable-next-line react/prop-types
        cell.text && cell.text.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="relative px-5  overflow-x-auto">
      {/* Table */}
      <table className="w-full border-collapse border ">
        {/* Table Heading */}
        <thead>
          <tr className="border">
            <th className="border min-w-72">
              <div className="flex justify-between items-center gap-1 px-4 py-2 text-lg">
                <div className="flex justify-center items-center gap-1">
                  <span>
                    <input
                      type="checkbox"
                      checked={selectAll}
                      onChange={handleSelectAllChange}
                    />
                  </span>
                  <span>Brand</span>
                </div>
                <FaPlus />
              </div>
            </th>
            <th className="border min-w-[200px]">Description</th>
            <th className="border min-w-[200px]">Member</th>
            <th className="border min-w-[100px]">Category</th>
            <th className="border min-w-[100px] !max-w-[100px] overflow-x-hidden">
              Tag
            </th>
            <th className="border">Next Meeting</th>
            <th className="border-0 min-w-[60px]">
              <div className=" flex justify-center items-center ">
                <FaPlus />
              </div>
            </th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {filteredRows.map((row, rowIndex) => (
            <tr key={rowIndex} className="text-lg ">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`text-lg p-2 border ${
                    checkedRows.includes(rowIndex) ? "bg-gray-200" : ""
                  }`}
                >
                  {/* First column */}
                  <div className="flex justify-between items-center gap-8">
                    <div className="flex justify-start items-center gap-3">
                      {cell.checkbox && (
                        <input
                          type="checkbox"
                          onChange={() => handleCheckboxChange(rowIndex)}
                          className="h-5 w-5 rounded-2xl checked:bg-black checked:text-white"
                        />
                      )}
                      {cell.image && !Array.isArray(cell.image) && (
                        <img
                          className="h-6 w-6 object-cover"
                          src={cell.image}
                          alt={`image-${rowIndex}-${cellIndex}`}
                        />
                      )}

                      {cell.text && <span className="">{cell.text}</span>}
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      {cell.message && cellIndex === 0 && (
                        <span>{cell.message}</span>
                      )}{" "}
                      {/* Render message only for the first cell */}
                      {cell.quantity && <span>{cell.quantity}</span>}
                    </div>
                  </div>
                  {/* Description column */}
                  <div>
                    {cell.desc && (
                      <span className="overflow-x-hidden text-ellipsis line-clamp-1">
                        {cell.desc}
                      </span>
                    )}
                  </div>
                  {/* Category column */}
                  <div className="flex gap-1">
                    {cell.categories &&
                      cell.categories.map((category, index) => (
                        <span className={`${cell.catDesign} `} key={index}>
                          {category}
                        </span>
                      ))}
                  </div>
                  {/* Member column */}
                  <div className="flex">
                    {Array.isArray(cell.image) &&
                      cell.image.map((src, index) => (
                        <img
                          className={`h-8 w-8 rounded-full object-cover -ml-${
                            index !== 0 && index + 1
                          }`}
                          key={index}
                          src={src}
                          alt={`image-${rowIndex}-${cellIndex}-${index}`}
                          style={
                            index !== 0
                              ? { marginLeft: `-${index + 11}px` }
                              : {}
                          }
                        />
                      ))}
                  </div>
                  {/* Tag column */}
                  <div className="min-w-[180px] !max-w-[180px] overflow-hidden">
                    {cell.tags &&
                      cell.tags.map((tag, index) => (
                        <span key={index} className={`${cell.tagDesign} `}>
                          {tag}
                        </span>
                      ))}
                    <div></div>
                  </div>
                  {/* Meeting column */}
                  {cell.meeting && (
                    <span
                      className={`whitespace-nowrap leading-none pb-1 ${cell.meetingDesign}`}
                    >
                      {cell.meeting}
                    </span>
                  )}
                </td>
              ))}
              <td className="border"></td>
            </tr>
          ))}
          {/* Final raw */}
          <tr className=" border text-lg ">
            <td className="px-4 py-2">
              {/* Dynamic raw selection count showing */}
              <p className=" flex justify-end gap-2">
                {" "}
                <span className="font-bold ">{checkedRows.length}</span>
                <span className="text-gray-500">Count</span>
              </p>
            </td>
            <td className="border px-4 py-2">
              <div
                className="flex
     justify-end items-center text-gray-500 gap-2 cursor-pointer "
              >
                <FaPlus />
                <p>Add Calculation</p>
              </div>
            </td>
            <td className="border px-4 py-2">
              <div
                className="flex
     justify-end items-center text-gray-500 gap-2 cursor-pointer"
              >
                <FaPlus />
                <p>Add Calculation</p>
              </div>
            </td>
            <td className="border px-4 py-2">
              <div
                className="flex
     justify-end items-center text-gray-500 gap-2  cursor-pointer"
              >
                <FaPlus />
                <p>Add Calculation</p>
              </div>
            </td>
            <td className="border"></td>
            <td className="border"></td>
            <td className="border"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
