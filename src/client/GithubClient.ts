import HttpBaseClient from '@/client/HttpBaseClient';

export default class GithubClient extends HttpBaseClient {
  constructor() {
    super({ baseUrl: 'https://gist.githubusercontent.com' });
  }

  async getCities(): Promise<any> {
    try {
      const response = await this.get('/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json');
      return response.data;
    } catch (error) {
      return [];
    }
  }
}
