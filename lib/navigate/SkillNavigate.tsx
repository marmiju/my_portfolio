export const SkillNavigateData = async () => {
  const NavList: any[] = ["All"];
  const response = await fetch("http://localhost:5000/api/skills");
  if (!response.ok) {
    throw new Error("Oops! Something Went Wrong!!!");
  }
  const result = await response.json();
  const cetagories = [
    ...new Set(
      result.map((skill: any) =>
        skill.cetagory == undefined ? "Others" : skill.cetagory
      )
    ),
  ];
  console.log(cetagories, "cetagory");
  NavList.push(...cetagories);
  console.log(NavList);

  return NavList;
};
