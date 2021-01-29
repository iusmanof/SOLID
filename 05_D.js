// Dependency inversion principle

// Объектом зависимости должна быть абстракция, а не что-то конкретное.

// 1. Модули верхних уровней не должны зависеть от модулей нижних уровней. Оба типа модулей должны зависеть от абстракций.
// 2. Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций.

class Fetch {
  request(url) {
    // return fetch(url).then(r => r.json())
    return Promise.resolve("data from fetch");
  }
}

class LocalStorage {
  get() {
    const dataFromLocalStorage = "data from local storage";
    return dataFromLocalStorage;
  }
}

class FetchClient {
  constructor() {
    this.fetch = new Fetch();
  }

  clientGet() {
    return this.fetch.request("vk.com");
  }
}

class LocalStorageClient {
  constructor() {
    this.localStorage = new LocalStorage();
  }

  clientGet(key) {
    return this.localStorage.get(key);
  }
}

class Database {
  constructor(client) {
    this.client = client;
  }

  getData(key) {
    return this.client.clientGet(key);
  }
}

const db = new Database(new LocalStorageClient());

console.log(db.getData("rand"));
