export function createEmptyEnvironment(){
    return {
        baseInfo: {
            name: '',
            tier: '',
            type: '',
            description: '',
            impulses: ''

        },
        stats: {
            difficulty: '',
            potentialAdversaries: ['']
        },

        features: [
        { name: '', text: '' }
        ],
    }
}

export function createExampleEnvironment(){
    return {
        baseInfo: {
            name: 'Strong River',
            tier: 1,
            type: 'Traversal',
            description: 'a river that floooows sooo fast',
            impulses: 'whatever a river does'
        },
        stats: {
            difficulty: 10,
            potentialAdversaries: ['Lads', 'Dudes']
        },

        features: [
        { name: 'Scary River', text: 'River flows soooo fast nooo' }
        ]
    }
}