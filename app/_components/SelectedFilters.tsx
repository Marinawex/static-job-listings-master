import Image from "next/image";
import remove from "../../public/images/icon-remove.svg";
import { SelectedFiltersProps } from "../_types/types";

function SelectedFilters({
  selectedFilters,
  handleDeleteFilter,
  handleClearFilters,
}: SelectedFiltersProps) {
  return (
    <div className="m-4 lg:mx-44 mx-10 flex justify-between bg-white rounded-md shadow-md p-6">
      <ul className="flex gap-4">
        {selectedFilters.map((filter, index) => {
          return (
            <div className="flex" key={filter + index}>
              <li className="bg-LightGrayishCyanFilter text-DesaturatedDarkCyan p-2 rounded-s-md ">
                {filter}
              </li>
              <button
                className="bg-DesaturatedDarkCyan text-white  hover:bg-VeryDarkGrayishCyan cursor-pointer rounded-e-md px-2"
                onClick={() => handleDeleteFilter(filter)}
              >
                <Image src={remove} width={10} height={10} alt="/" />
              </button>
            </div>
          );
        })}
      </ul>

      <button
        className="text-DesaturatedDarkCyan hover:underline"
        onClick={handleClearFilters}
      >
        clear
      </button>
    </div>
  );
}

export default SelectedFilters;
