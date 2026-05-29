export type LeaderboardUser = {
  rank: number;
  name: string;
  chip: number;
  gain: number;
  jobs: number;
  runtime: string;
};

export const users: LeaderboardUser[] = Array.from({ length: 75 }, (_, index) => {
  const names = ['ja22', '12knl', 'do84', 'Be3', 'roof5', 'nile7', 'ax10', 'mira9', 'core4', 'hpc1'];
  return {
    rank: index + 1,
    name: names[index % names.length] + (index > 9 ? `-${index + 1}` : ''),
    chip: Math.max(28, 94 - index * 0.7),
    gain: Math.max(-9, 10 - Math.floor(index / 4)),
    jobs: 18 + ((index * 7) % 96),
    runtime: `${1 + (index % 9)}h ${10 + ((index * 3) % 50)}m`
  };
});

export const efficientUsers = users.slice(0, 5);
export const inefficientUsers = [...users].slice(-5).reverse().map((user, index) => ({
  ...user,
  rank: index + 1,
  chip: Math.max(14, user.chip - 18),
  gain: -Math.abs(user.gain || index + 1)
}));
