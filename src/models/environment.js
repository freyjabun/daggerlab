export function createEmptyEnvironment(){
    return {
        baseInfo: {
            name: '',
            tier: '',
            type: '',
            impulses: '',
            description: ''

        },
        stats: {
            difficulty: '',
            potentialAdversaries: ''
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
            impulses: 'whatever a river does',
            description: 'a river that floooows sooo fast'
        },
        stats: {
            difficulty: 10,
            potentialAdversaries: 'Lads, River creatures, all sorts of crazy stuff'
        },

        features: [
        { name: 'Scary River', text: 'River flows soooo fast nooo' }
        ]
    }
}