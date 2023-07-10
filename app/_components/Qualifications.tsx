import { QualificationsProps } from "../_types/types";

function Qualifications({
  role,
  level,
  languages,
  tools,
  handleAddFilter,
}: QualificationsProps) {
  return (
    <div className="flex flex-wrap content-center gap-4 text-DesaturatedDarkCyan">
      <button
        className="bg-LightGrayishCyanFilter p-2 rounded-md  hover:bg-DesaturatedDarkCyan hover:text-white cursor-pointer"
        onClick={() => handleAddFilter(role)}
      >
        {role}
      </button>
      <button
        className="bg-LightGrayishCyanFilter p-2 rounded-md  hover:bg-DesaturatedDarkCyan hover:text-white cursor-pointer"
        onClick={() => handleAddFilter(level)}
      >
        {level}
      </button>

      <ul className="flex  content-center gap-4">
        {languages.map((language, index) => {
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
      {tools.length > 0 && (
        <ul className="flex  content-center gap-4">
          {tools.map((tool, index) => {
            return (
              <li
                className="bg-LightGrayishCyan p-2 rounded-md  hover:bg-DesaturatedDarkCyan hover:text-white cursor-pointer"
                key={tool + index}
              >
                <button onClick={() => handleAddFilter(tool)}> {tool}</button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Qualifications;
