import axios from 'axios';

export default class DataService {

  static async fetchData() {
    try {
      const data = await axios.get('http://localhost:8001/date');
      console.log(data);
      return data;
    } catch(e) {
      console.log(e);
    }
  }
}