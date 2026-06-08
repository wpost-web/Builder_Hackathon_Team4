export interface Winner {
  firstName: string;
  lastInitial: string;
  state: string;
}

export interface Sweepstakes {
  id: string;
  title: string;
  defaultExpanded: boolean;
  winners: Winner[];
}

export const mockWinners: Sweepstakes[] = [
  {
    id: 'w1',
    title: 'Quest for Rewards: Las Vegas Edition',
    defaultExpanded: true,
    winners: [
      { firstName: 'MING', lastInitial: 'Z', state: 'NV' },
      { firstName: 'RAYMOND', lastInitial: 'P', state: 'NY' },
      { firstName: 'MITCHELL', lastInitial: 'K', state: 'AR' },
      { firstName: 'ANGELA', lastInitial: 'D', state: 'AR' },
    ],
  },
  {
    id: 'w2',
    title: 'Say & Play 100K Reward Credit Sweepstakes',
    defaultExpanded: false,
    winners: [
      { firstName: 'JESSICA', lastInitial: 'M', state: 'CA' },
      { firstName: 'ROBERT', lastInitial: 'T', state: 'TX' },
    ],
  },
  {
    id: 'w3',
    title: 'Quest for Rewards Mobile App Exclusive Drawing',
    defaultExpanded: false,
    winners: [
      { firstName: 'SARAH', lastInitial: 'B', state: 'FL' },
    ],
  },
  {
    id: 'w4',
    title: 'Quest for Rewards Main Drawing',
    defaultExpanded: false,
    winners: [
      { firstName: 'CARLOS', lastInitial: 'G', state: 'AZ' },
      { firstName: 'LINDA', lastInitial: 'W', state: 'NV' },
      { firstName: 'JAMES', lastInitial: 'R', state: 'OH' },
    ],
  },
  {
    id: 'w5',
    title: 'Race Your Way to Vegas',
    defaultExpanded: false,
    winners: [],
  },
];
