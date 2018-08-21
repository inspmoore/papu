/* eslint no-undef: "off",
          global-require: "off"
*/
class StorageFactory {
  constructor() {
    this.storage = {}
  }

  set(key, value) {
    Object.defineProperty(this.storage, key, {
      value,
      enumerable: true,
      writable: true,
      configurable: true
    })
  }

  get(key) {
    return this.storage[key]
  }

  delete(key) {
    if (storage[key]) delete this.storage[key]
  }
}

export default StorageFactory
