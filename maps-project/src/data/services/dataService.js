import axios from 'axios';
import { BASE_API_URL } from '../../util/constants';

export default class DataService {
  static async fetchData() {
    try {
      const data = await axios.get(`${BASE_API_URL}/date`);
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}