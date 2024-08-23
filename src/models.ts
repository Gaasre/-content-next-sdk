export interface BlogPost {
  title: string;
  slug: string;
  author: string;
  description: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
  image: {
    path: string;
  } | null;
}

export interface BlogPostsResponse {
  data: BlogPost[];
  meta: {
    page: number;
    pageSize: number;
    totalPages: number;
    totalPosts: number;
  };
}

export interface BlogPostContent extends BlogPost {
  content: string;
}

export interface BlogPostContentResponse {
  data: BlogPostContent;
}
