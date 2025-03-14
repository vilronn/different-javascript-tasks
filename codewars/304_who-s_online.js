const whosOnline = (friends) => {
  return friends.reduce((acc, friend) => {
    let status =
      friend.status === "online" && friend.lastActivity > 10
        ? "away"
        : friend.status;

    if (!acc[status]) {
      acc[status] = [];
    }
    acc[status].push(friend.username);

    return acc;
  }, {});
};

console.log(
  whosOnline([
    {
      username: "David",
      status: "online",
      lastActivity: 10,
    },
    {
      username: "Lucy",
      status: "offline",
      lastActivity: 22,
    },
    {
      username: "Bob",
      status: "online",
      lastActivity: 50,
    },
  ])
); //Output: { online: [ 'David' ], offline: [ 'Lucy' ], away: [ 'Bob' ] }
