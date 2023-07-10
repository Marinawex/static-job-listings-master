"use client";
import jobs from "../data.json";
import { useState } from "react";
import SelectedFilters from "./_components/SelectedFilters";
import JobCard from "./_components/JobCard";
import { Job } from "./_types/types";

export default function Home() {
  const [jobsList, setJobsList] = useState<Job[]>(jobs);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  function handleClearFilters() {
    setSelectedFilters([]);
    setJobsList(jobs);
  }

  function handleAddFilter(filter: string) {
    if (selectedFilters.includes(filter)) return;
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
        <SelectedFilters
          selectedFilters={selectedFilters}
          handleDeleteFilter={handleDeleteFilter}
          handleClearFilters={handleClearFilters}
        />
      )}

      {jobsList.map((job) => {
        return (
          <JobCard job={job} handleAddFilter={handleAddFilter} key={job.id} />
        );
      })}
    </main>
  );
}
