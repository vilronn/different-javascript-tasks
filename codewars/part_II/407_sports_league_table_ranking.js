function computePositions(number, games) {
  let teams = Array.from({ length: number }, (_, i) => ({
    id: i,
    points: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
  }));

  for (let [teamA, teamB, goalsA, goalsB] of games) {
    teams[teamA].goalsFor += goalsA;
    teams[teamA].goalsAgainst += goalsB;
    teams[teamB].goalsFor += goalsB;
    teams[teamB].goalsAgainst += goalsA;

    teams[teamA].goalDifference =
      teams[teamA].goalsFor - teams[teamA].goalsAgainst;
    teams[teamB].goalDifference =
      teams[teamB].goalsFor - teams[teamB].goalsAgainst;

    if (goalsA > goalsB) {
      teams[teamA].points += 2;
    } else if (goalsA < goalsB) {
      teams[teamB].points += 2;
    } else {
      teams[teamA].points += 1;
      teams[teamB].points += 1;
    }
  }

  teams.sort(
    (a, b) =>
      b.points - a.points ||
      b.goalDifference - a.goalDifference ||
      b.goalsFor - a.goalsFor
  );

  let positions = Array(number).fill(0);
  let rank = 1;

  for (let i = 0; i < teams.length; i++) {
    if (
      i > 0 &&
      (teams[i].points !== teams[i - 1].points ||
        teams[i].goalDifference !== teams[i - 1].goalDifference ||
        teams[i].goalsFor !== teams[i - 1].goalsFor)
    ) {
      rank = i + 1;
    }
    positions[teams[i].id] = rank;
  }

  return positions;
}

console.log(
  computePositions(6, [
    [0, 5, 2, 2],
    [1, 4, 0, 2],
    [2, 3, 1, 2],
    [1, 5, 2, 2],
    [2, 0, 1, 1],
    [3, 4, 1, 1],
    [2, 5, 0, 2],
    [3, 1, 1, 1],
    [4, 0, 2, 0],
  ])
);
// Output: [4, 4, 6, 3, 1, 2]
