type Alphanumeric = number | string;

const add = (num1: Alphanumeric, num2: Alphanumeric) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toLocaleString() + num2.toLocaleString();
  }
};
console.log(add(2, 2));
console.log(add(2, "2"));
console.log(add("2", "2"));

// ******************* in guard*********************************
type normalUser = {
  name: string;
};
type AdminUSer = {
  name: string;
  role: "Admin";
};

const getUserInfo = (user: normalUser | AdminUSer) => {
  if ("role" in user) {
    console.log(`${user.name} and his role is m: ${user.role}`);
  } else {
    console.log(`${user.name}`);
  }
};

getUserInfo({ name: "Normal", role: "Admin" });
