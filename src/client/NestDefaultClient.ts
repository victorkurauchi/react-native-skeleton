import HttpBaseClient from '@/client/HttpBaseClient';

export default class NestDefaultClient extends HttpBaseClient {
  constructor() {
    super({ baseUrl: 'http://localhost:1337' });
  }

  async addCat(payload: any): Promise<any> {
    console.log('Calling backend.', payload);
    try {
      const body = { ...payload };
      const response = await this.post('/cats', body);
      console.log('response st,', response)

      return response.data;
    } catch (error) {
      console.log('CATCHING', error.response)
      
      if (error.response.status === 400) throw new Error(error.response.data.message.join(','));

      throw error;
    }
  }
}
