import axios, { AxiosError, AxiosInstance } from "axios";

export class ContentNextAPI {
  private client: AxiosInstance;

  private logError(message: string, error: unknown) {
    // Determine if the error is an AxiosError or a generic Error
    if (axios.isAxiosError(error)) {
      // AxiosError specific handling
      console.error(
        `[ContentNext API]: ${message}`,
        error.response?.data || error.message
      );
    } else if (error instanceof Error) {
      // Generic Error handling
      console.error(`[ContentNext API]: ${message}`, error.message);
    } else {
      // Handle unexpected types
      console.error(`[ContentNext API]: ${message}`, error);
    }
  }

  constructor(apiKey: string) {
    this.client = axios.create({
      baseURL: "https://content-next.com/api/",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
  }

  async get<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
    try {
      const response = await this.client.get<T>(endpoint, { params });
      return response.data;
    } catch (error) {
      this.logError("An error occurred while fetching data.", error);
      throw error;
    }
  }
}
