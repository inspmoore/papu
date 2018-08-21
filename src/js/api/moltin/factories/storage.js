class StorageFactory {
  constructor() {
    this.localStorage = window.localStorage
  }

  set(key, value) {
    return this.localStorage.setItem(key, value)
  }

  get(key) {
    return this.localStorage.getItem(key)
  }

  delete(key) {
    return this.localStorage.removeItem(key)
  }
}

export default StorageFactory
