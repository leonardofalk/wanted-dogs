import axios from 'axios'

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}

export class DogsService {
  static async getAll() {
    const { status, data } = await axios.get('http://localhost:3001/dogs', { headers })

    return { ok: status >= 200 && status < 300, data }
  }

  static async create(dog) {
    const { status, data } = await axios.post('http://localhost:3001/dogs', dog, { headers })

    return { ok: status >= 200 && status < 300, data }
  }
}
