class Storage {
  getItem (name) {
    let item = localStorage.getItem(name)
    return !item ? null : JSON.parse(item)
  }

  getCircularReplacer () {
    const seen = new WeakSet()
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return
        }
        seen.add(value)
      }
      return value
    }
  }

  async setItem (name, item) {
    localStorage.setItem(name, JSON.stringify(item, this.getCircularReplacer()))
  }

  removeItem (name) {
    localStorage.removeItem(name)
  }

  clearStorage () {
    localStorage.clear()
  }

  setItemsIterator (obj) {
    for (const value of obj) {
      let key = Object.keys(value)
      this.setItem(key, value[key])
    }
  }

  removeItemsIterator (obj) {
    for (const value of obj) {
      this.removeItem(value)
    }
  }
}

export default new Storage
