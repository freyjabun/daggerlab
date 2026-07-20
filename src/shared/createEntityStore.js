import { defineStore } from 'pinia'

// Factory for the standard Daggerlab entity store: a persisted list of items
// with add / remove / removeAll. Every feature (adversaries, environments,
// campaign frames, ...) gets the same store by calling this with its own
// name + model factories.
export function createEntityStore(name, createEmpty, createExample) {
  return defineStore(name, {
    state: () => ({ items: [createExample()] }),
    actions: {
      add() {
        this.items.push(createEmpty())
      },
      remove(i) {
        this.items.splice(i, 1)
      },
      removeAll() {
        this.items = [createExample()]
      },
    },
    persist: true,
  })
}
