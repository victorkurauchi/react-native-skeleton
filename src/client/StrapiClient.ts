import HttpBaseClient from '@/client/HttpBaseClient';
import { AxiosError } from 'axios';

export default class StrapiClient extends HttpBaseClient {
  constructor() {
    super({ baseUrl: 'http://localhost:1337' });
  }

  async login(payload: any): Promise<any> {
    try {
      const body = { ...payload };
      const response = await this.post('/auth/local', body);

      return response.data;
    } catch (error) {
      this.handleError(error);

      throw error;
    }
  }

  async addTrip(payload: any): Promise<any> {
    console.log('Calling backend.', payload);
    try {
      const body = { ...payload };
      const response = await this.post('/trips', body);

      return response.data;
    } catch (error) {
      this.handleError(error);

      throw error;
    }
  }

  async getTrip(id: string): Promise<any> {
    try {
      const response = await this.get(`/trips/${id}`);

      return response.data;
    } catch (error) {
      this.handleError(error);

      throw error;
    }
  }

  async updateTrip(trip: any, toUpdate: any): Promise<any> {
    try {
      const response = await this.put(`/trips/${trip.id}`, { ...trip, ...toUpdate });

      return response.data;
    } catch (error) {
      this.handleError(error);

      throw error;
    }
  }

  async addLinkToTrip(payload: { trip: number, link: string }): Promise<any> {
    try {
      const response = await this.post(`/triplinks`, payload);

      return response.data;
    } catch (error) {
      this.handleError(error);

      throw error;
    }
  }

  async addParticipantToTrip(trip: any, email: any): Promise<any> {
    console.log('payload', trip);
    console.log('email', email);
    const body = {
      ...trip, 
      invites: [
        ...trip.invites,
        { email }
      ]
    }
    try {
      const response = await this.put(`/trips/${trip.id}`, body);

      return response.data;
    } catch (error) {
      this.handleError(error);

      throw error;
    }
  }

  handleError(error: AxiosError) {
    if (error?.response?.status === 400) {
      const messages = error.response.data.message.map(m => m.messages.map(n => n.message)).join(', ');
      throw new Error(messages);
    }
    if (error?.response?.status === 404) throw new Error(error.response.data.message);

    if (error?.response?.status === 403) throw new Error('You are Unauthorized!');
  }
}
