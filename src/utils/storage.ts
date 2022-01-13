class Storage {
  get(key: string) {
    const value = localStorage.getItem(key);
    try {
      if (!value) return value;
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }

  set(key: string, value: any) {
    if (typeof value === 'undefined' || value === null) return;
    try {
      value = JSON.stringify(value) || value;
    } catch (e) {}
    localStorage.setItem(key, value);
  }

  delete(key: string) {
    localStorage.removeItem(key);
  }
}
export default new Storage();
