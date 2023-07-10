export interface Job {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

export interface JobCardProps {
  job: Job;
  handleAddFilter: (filter: string) => void;
}

export interface SelectedFiltersProps {
  selectedFilters: string[];
  handleDeleteFilter: (filter: string) => void;
  handleClearFilters: () => void;
}

export interface QualificationsProps {
  role: string;
  level: string;
  languages: string[];
  tools: string[];
  handleAddFilter: (filter: string) => void;
}
