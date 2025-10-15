export function createEmptyAdversary() {
  return {
    baseInfo: {
    name: '',
    type: '',
    motives: '',
    description: ''
    },
    stats: {
      tier: '',
      hp: '',
      stress: '',
      difficulty: '',
      thresholdMinor: '',
      thresholdMajor: ''
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
  }
}


export function createExampleAdversary() {
  return {
    baseInfo: {
    name: 'Big Evil Creature',
    type: 'Leader',
    motives: 'Go nuts, go crazy',
    description: 'A big ol guy. He\'s evil, soo so evil'
    },
    stats: { tier: 1, hp: 8, stress: 3, difficulty: 13, thresholdMinor: 6, thresholdMajor: 13},
    weapon: { weaponType: 'Evil Sword', range: 'Melee', roll: '1d10+3', damageType: 'Physical', atk: '+3' },
    features: [
      { name: 'Example Feature (Passive)', text: 'Once per round, block 1 physical hit.' }
    ]
  }
}
