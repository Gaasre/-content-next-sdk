import { ContentNextAPI } from "./api";
import { BlogPostsResponse, BlogPostContentResponse } from "./models";

export class ContentNextSDK {
  private api: ContentNextAPI;

  constructor(apiKey: string) {
    this.api = new ContentNextAPI(apiKey);
  }

  async getBlogPosts(
    websiteId: string,
    page: number = 1,
    size: number = 10
  ): Promise<BlogPostsResponse> {
    return this.api.get<BlogPostsResponse>("posts", {
      website: websiteId,
      page,
      size,
    });
  }

  async getBlogPost(slug: string): Promise<BlogPostContentResponse> {
    return this.api.get<BlogPostContentResponse>(`posts/${slug}`);
  }
}

export * from "./models";
