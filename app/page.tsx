"use client";
import Image from "next/image";
import jobs from "../data.json";
import { useState } from "react";
import remove from "../public/images/icon-remove.svg";

export default function Home() {
  const [jobsList, setJobsList] = useState(jobs);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  function handleClearFilters(): void {
    setSelectedFilters([]);
    setJobsList(jobs);
  }

  function handleAddFilter(filter: string) {
    if (selectedFilters.includes(filter)) return
    setSelectedFilters([...selectedFilters, filter]);
    const jobsFilterdBy = jobsList.filter((job) => {
      if (
        job.role === filter ||
        job.level === filter ||
        job.tools.includes(filter) ||
        job.languages.includes(filter)
      ) {
        return job;
      }
    });
    setJobsList(jobsFilterdBy);
  }

  function handleDeleteFilter(filterToDelete: string) {
    const newSelectedFilters = selectedFilters.filter((filter) => {
      return filter.toLocaleLowerCase() !== filterToDelete.toLocaleLowerCase();
    });
    setSelectedFilters(newSelectedFilters);
    if (newSelectedFilters.length === 0) {
      setJobsList(jobs);
      return;
    }
    const jobsFilterdBy = jobs.filter((job) => {
      if (
        newSelectedFilters.includes(job.role) ||
        newSelectedFilters.includes(job.level)
      ) {
        return true;
      }
      if (
        job.languages.some((language) => newSelectedFilters.includes(language))
      ) {
        return true;
      }
      if (job.tools.some((tool) => newSelectedFilters.includes(tool))) {
        return true;
      }
      return false;
    });

    setJobsList(jobsFilterdBy);
  }

  return (
    <main className="flex flex-col">
      {selectedFilters.length > 0 && (
        <div className="m-4 lg:mx-44 mx-10 flex justify-between bg-white rounded-md shadow-md p-6">
          <ul className="flex gap-4">
            {selectedFilters.map((filter,index) => {
              return (
                <div className="flex" key={index}>
                  <li
                    className="bg-LightGrayishCyanFilter text-DesaturatedDarkCyan p-2 rounded-s-md "
                  
                  >
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
      )}

      {jobsList.map((job) => {
        return (
          <>
            <div
              className="m-4 lg:mx-44 mx-10 flex flex-col lg:flex-row  items-center lg:justify-between bg-white rounded-md shadow-md p-6"
              key={job.id}
            >
              <div className="lg:flex gap-4 items-center">
                <Image src={job.logo} width={100} height={100} alt="logo" />
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

              <div className="qualification flex flex-wrap content-center gap-4 text-DesaturatedDarkCyan">
                <button
                  className="bg-LightGrayishCyanFilter p-2 rounded-md  hover:bg-DesaturatedDarkCyan hover:text-white cursor-pointer"
                  onClick={() => handleAddFilter(job.role)}
                >
                  {job.role}
                </button>
                <button
                  className="bg-LightGrayishCyanFilter p-2 rounded-md  hover:bg-DesaturatedDarkCyan hover:text-white cursor-pointer"
                  onClick={() => handleAddFilter(job.level)}
                >
                  {job.level}
                </button>


                <ul className="flex  content-center gap-4">
                  {job.languages.map((language,index) => {
                    return (
                      <li
                        className="bg-LightGrayishCyanFilter p-2 rounded-md  hover:bg-DesaturatedDarkCyan hover:text-white cursor-pointer"
                        key={index + language}
                      >
                        <button onClick={() => handleAddFilter(language)}>
                          {language}
                        </button>
                      </li>
                    );
                  })}
                </ul>
                {job.tools.length > 0 && (
                  <ul className="flex  content-center gap-4">
                    {job.tools.map((tool,index) => {
                      return (
                        <li
                          className="bg-LightGrayishCyan p-2 rounded-md  hover:bg-DesaturatedDarkCyan hover:text-white cursor-pointer"
                          key={tool+index}
                        >
                          <button onClick={() => handleAddFilter(tool)}>
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
