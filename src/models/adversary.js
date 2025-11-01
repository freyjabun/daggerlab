export function createEmptyAdversary() {
  return {
    baseInfo: {
    name: '',
    type: '',
    motives: '',
    tier: '',
    description: '',
    experience: ''
    },
    stats: {
      tier: '',
      hp: '',
      stress: '',
      difficulty: '',
      atk: '',
      thresholdMinor: '',
      thresholdMajor: ''
    },
    weapon: {
      weaponType: '',
      range: '',
      roll: '',
      damageType: ''
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
    tier: 1,
    description: 'A big ol guy. He\'s evil, soo so evil',
    experience: ''
    },
    stats: { hp: 8, stress: 3, difficulty: 13, thresholdMinor: 6, thresholdMajor: 13, atk:'+3'},
    weapon: { weaponType: 'Evil Sword', range: 'Melee', roll: '1d10+3', damageType: 'Physical' },
    features: [
      { name: 'Example Feature (Passive)', text: 'Once per round, block 1 physical hit.' }
    ]
  }
}
