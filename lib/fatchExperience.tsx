// types/Experience.ts

export interface Position {
  position: string;
  type: string;
  startDate: Date;
  endDate: Date | null;
  skills: string[];
}

export interface ExperienceType {
  _id?: string;
  company: string;
  image: string;
  location: string;
  mode: string;
  positions: Position[];
}

export const FetchExperience = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_END_POINT}/experience`);
    const result = await res.json();
    return result;
  } catch (err) {
    console.log("err", err);
  }
};
