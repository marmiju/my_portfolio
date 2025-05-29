type SkillType = {
  cetagory?: string;
  // id: string;
  // title: string;
  // description: string;
  // url: string;
};
export const SkillNavigateData = async () => {
  const NavList: string[] = ["All"];
  const response = await fetch(`${process.env.NEXT_PUBLIC_END_POINT}/skills`);

  if (!response.ok) {
    throw new Error("Oops! Something Went Wrong!!!");
  }

  const result: SkillType[] = await response.json();

  const cetagories = [
    ...new Set(
      result.map((skill) =>
        skill.cetagory === undefined ? "Others" : skill.cetagory
      )
    ),
  ];

  console.log(cetagories, "cetagory");
  NavList.push(...cetagories);

  console.log(NavList);

  return NavList;
};
