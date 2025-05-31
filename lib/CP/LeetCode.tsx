export interface UserProfile {
  username: string;
  name: string;
  birthday: string;
  avatar: string;
  ranking: number;
  reputation: number;
  gitHub: string;
  twitter: string;
  linkedIN: string;
  website: string[];
  country: string;
  company: string;
  school: string;
  skillTags: string[];
  about: string;
}

export const FetchLeetCode = async () => {
  //   try {
  //     const response = await fetch(`${process.env.LEETCODE}/devmar`);
  //     if (!response.ok) {
  //       console.log("something went wrong");
  //     }
  //     const result = await response.json();
  //     console.log("leetcode", result);
  //     return result;
  //   } catch (err) {
  //     console.log(err);
  //   }
  const userProfile: UserProfile = {
    username: "devmar",

    name: "MAR miju",
    birthday: "3/1/2003",
    avatar:
      "https://assets.leetcode.com/users/PULbeIextL/avatar_1729009171.png",
    ranking: 1354181,
    reputation: 0,
    gitHub: "https://github.com/marmiju",
    twitter: "https://x.com/marmijudev",
    linkedIN: "https://linkedin.com/in/marmiju",
    website: [],
    country: "Bangladesh",
    company: "Inovat.Digital",
    school: "Northbengal Institute and development Studies,Rangpur",
    skillTags: ["javascript", "dsa", "oop", "python", "DSA", "OOP", "and More"],
    about: "WellCome❤️‍🩹",
  };
  return userProfile;
};
