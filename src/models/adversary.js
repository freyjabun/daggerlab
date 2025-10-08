export function createEmptyAdversary() {
  return {
    name: '',
    type: '',
    stats: {
      tier: '',
      hp: '',
      stress: '',
      difficulty: ''
    },
    weapon: {
      weaponType: '',
      range: '',
      roll: '',
      damageType: '',
      atk: ''
    },
    features: [
      { name: '', text: '' }
    ],
    description: ''
  }
}


export function createExampleAdversary() {
  return {
    name: 'The Gate Guardian',
    type: 'Leader (Umbra-Touched)',
    stats: { tier: 1, hp: 8, stress: 3, difficulty: 13 },
    weapon: { weaponType: 'Curved Blade', range: 'Very Close', roll: '1d10+3', damageType: 'Physical', atk: '+3' },
    features: [
      { name: 'Holy Buckler (Passive)', text: 'Once per round, block 1 physical hit.' },
      { name: 'Sweeping Strike (Action)', text: 'All close enemies take 1d8 physical damage.' }
    ],
    description: 'An ancient protector bound to the gate, corrupted by shadow energy.'
  }
}
