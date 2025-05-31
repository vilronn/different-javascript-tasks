function sizeof(type) {
  const sizes = {
    "char": 1,
    "short": 2,
    "int": 2,
    "long": 4,
    "long long": 8,
    "float": 4,
    "double": 8
  };

  if (typeof type === "string") {
    //delete "unsigned"
    type = type.replace("unsigned ", "");
    return sizes[type];
  }

  if (typeof type === "object") {
    const memberSizes = type.members.map(sizeof);

    if (type.type === "struct") {
      return memberSizes.reduce((sum, size) => sum + size, 0);
    } else if (type.type === "union") {
      return Math.max(...memberSizes, 0);
    }
  }

  throw new Error("Invalid type");
}

console.log(sizeof("unsigned int")); //2
console.log(sizeof({type: "struct", members: ["char", "int"]})); //1+2 = 3
console.log(sizeof({type: "union", members: ["float", "double"]})); //max(4, 8) = 8
console.log(sizeof({type: "union", members: []})); //0
