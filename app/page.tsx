"use client";
import Image from "next/image";
import jobs from "../data.json";
import { useState } from "react";

export default function Home() {
  const [jobsList, setJobsList] = useState(jobs);
  const [selectedFilters, setSelectedFilters] = useState<String[]>([]);

  function handleClearFilters() {
    setSelectedFilters([]);
    setJobsList(jobs);
  }

  function handleAddFilter(e: any) {
    setSelectedFilters([...selectedFilters, e.target.value]);
    const jobsFilterdBy = jobsList.filter((job) => {
      if (
        job.role === e.target.value ||
        job.level === e.target.value ||
        job.tools.includes(e.target.value) ||
        job.languages.includes(e.target.value)
      ) {
        return job;
      }
    });
    setJobsList(jobsFilterdBy);
  }

  function handleDeleteFilter(e: any) {
    const newSelectedFilters = selectedFilters.filter((filter) => {
      if (filter !== e.target.value) {
        return filter;
      }
    });
    console.log(newSelectedFilters);

    setSelectedFilters([...newSelectedFilters]);
  }

  return (
    <main className="flex flex-col">
      {selectedFilters.length > 0 && (
        <div className="m-4 lg:mx-44 mx-10 flex justify-between bg-white rounded-md shadow-md p-6">
          <ul className="flex gap-4">
            {selectedFilters.map((filter) => {
              return (
                <div className="flex" key={filter + "s"}>
                  <li className="bg-LightGrayishCyanFilter text-DesaturatedDarkCyan p-2 rounded-s-md ">
                    {filter}
                  </li>
                  <button
                    className="bg-DesaturatedDarkCyan text-white  hover:bg-VeryDarkGrayishCyan cursor-pointer rounded-e-md px-2"
                    onClick={handleDeleteFilter}
                  >
                    x
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
      )}

      {jobsList.map((job) => {
        return (
          <>
            <div
              className="m-4 lg:mx-44 mx-10 flex flex-col lg:flex-row  items-center lg:justify-between bg-white rounded-md shadow-md p-6"
              key={job.id}
            >
              <div className="lg:flex gap-4 items-center">
                <Image
                  src={job.logo}
                  width={100}
                  height={100}
                  alt="logo"
                  className=""
                />
                <div className="data space-y-2">
                  <div className="flex items-center gap-4">
                    <h2 className="text-DesaturatedDarkCyan">{job.company}</h2>
                    {job.new && (
                      <p className="bg-DesaturatedDarkCyan text-white rounded-full px-3 text-center py-1">
                        NEW!
                      </p>
                    )}
                    {job.featured && (
                      <p className="bg-black text-white rounded-full px-3 py-1">
                        {"featured".toLocaleUpperCase()}
                      </p>
                    )}
                  </div>

                  <h1 className="font-bold text-2xl hover:text-DesaturatedDarkCyan cursor-pointer">
                    {job.position}
                  </h1>

                  <div className="flex gap-4 text-DarkGrayishCyan pb-2">
                    <div>{job.postedAt}</div>
                    <div>{job.contract}</div>
                    <div>{job.location}</div>
                  </div>
                </div>
                <hr className="lg:hidden flex p-2" />
              </div>

              <div className="requirements flex flex-wrap content-center gap-4 text-DesaturatedDarkCyan">
                <button
                  className="bg-LightGrayishCyanFilter p-2 rounded-md  hover:bg-DesaturatedDarkCyan hover:text-white cursor-pointer"
                  onClick={handleAddFilter}
                  value={job.role}
                  role="role"
                >
                  {job.role}
                </button>
                <button
                  className="bg-LightGrayishCyanFilter p-2 rounded-md  hover:bg-DesaturatedDarkCyan hover:text-white cursor-pointer"
                  onClick={handleAddFilter}
                  value={job.level}
                  role="level"
                >
                  {job.level}
                </button>
                <ul className="flex  content-center gap-4">
                  {job.languages.map((language) => {
                    return (
                      <li
                        className="bg-LightGrayishCyanFilter p-2 rounded-md  hover:bg-DesaturatedDarkCyan hover:text-white cursor-pointer"
                        key={job.id + language}
                      >
                        <button
                          onClick={handleAddFilter}
                          value={language}
                          role="language"
                        >
                          {language}
                        </button>
                      </li>
                    );
                  })}
                </ul>
                {job.tools.length > 0 && (
                  <ul className="flex  content-center gap-4">
                    {job.tools.map((tool) => {
                      return (
                        <li
                          className="bg-LightGrayishCyan p-2 rounded-md  hover:bg-DesaturatedDarkCyan hover:text-white cursor-pointer"
                          key={job.id + tool}
                        >
                          <button
                            onClick={handleAddFilter}
                            value={tool}
                            role="tool"
                          >
                            {" "}
                            {tool}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          </>
        );
      })}
    </main>
  );
}
