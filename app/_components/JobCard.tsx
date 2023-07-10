import { JobCardProps } from "../_types/types";
import Qualifications from "./Qualifications";
import Image from "next/image";

function JobCard({ job, handleAddFilter }: JobCardProps) {
  return (
    <div className="m-4 lg:mx-44 mx-10 flex flex-col lg:flex-row  items-center lg:justify-between bg-white rounded-md shadow-md p-6">
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
            <p>{job.postedAt}</p>
            <p>{job.contract}</p>
            <p>{job.location}</p>
          </div>
        </div>
        <hr className="lg:hidden flex p-2" />
      </div>

      <Qualifications
        role={job.role}
        level={job.level}
        languages={job.languages}
        tools={job.tools}
        handleAddFilter={handleAddFilter}
      />
    </div>
  );
}

export default JobCard;
