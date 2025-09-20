type tagsType = "html" | "css" | "js" | "ts";

// enum statusEnum {
//   UNEMPLOYED = "unemployed",
//   EMPLOYED = "employed",
// }

interface UserType {
  name: string;
  surname: string;
  age?: number;
  tags: tagsType[];
  mainTag: tagsType;
  // status: string;
}

const user: UserType = {
  name: "Alice",
  surname: "Smith",
  tags: ["html", "css"],
  mainTag: "js",
  // status: statusEnum.UNEMPLOYED,
};

user.age = 30;

// user.status = statusEnum.EMPLOYED;
