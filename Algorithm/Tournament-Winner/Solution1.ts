// T: O(n), n is the number of competitions
// S: O(k), k is the number of teams

export function Solution1(competitions: string[][], results: number[]) {
  const HOME_TEAM_WON = 1;
  const WINNING_POINTS = 3;
  
  let currentBestTeam = '';
  const scores = { [currentBestTeam]: 0 };

  for (let i = 0; i < competitions.length; i += 1) {
    const result = results[i];
    const [homeTeam, awayTeam] = competitions[i];

    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

    if (!(winningTeam in scores)) scores[winningTeam] = 0;

    scores[winningTeam] += WINNING_POINTS;

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }

  return currentBestTeam;
}