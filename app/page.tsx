import Image from "next/image";
import jobs from "../data.json";

export default function Home() {
  const jobsList = jobs.map((job) => {
    return (
      <>
        <div className="m-4 lg:mx-44 mx-10 flex flex-col lg:flex-row  items-center lg:justify-between bg-white rounded-md shadow-md p-4">
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

              <h1 className="font-bold text-2xl">{job.position}</h1>

              <div className="flex gap-4 text-DarkGrayishCyan">
                <div>{job.postedAt}</div>
                <div>{job.contract}</div>
                <div>{job.location}</div>
              </div>
            </div>
          </div>
          <div className="requirements flex flex-wrap gap-4 text-DesaturatedDarkCyan">
            <div className="bg-LightGrayishCyan p-2 rounded-md">{job.role}</div>
            <div className="bg-LightGrayishCyan p-2 rounded-md">
              {job.level}
            </div>
            <div className="bg-LightGrayishCyan p-2 rounded-md">
              {job.languages.map((language) => {
                return language;
              })}
            </div>
            <div className="bg-LightGrayishCyan p-2 rounded-md">
              {job.tools}
            </div>
          </div>
        </div>
      </>
    );
  });
  return <main className="flex flex-col">{jobsList}</main>;
}
