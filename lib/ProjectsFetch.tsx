export interface Project {
  _id: string;
  name: string;
  desc: string;
  tech: string[];
  repo: string;
  live: string;
  preview: string;
}

export const ProjectFetch = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_END_POINT}/portfolio`
  );
  const result = await response.json();
  return result;
};
