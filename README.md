# @content-next/sdk

**SDK for communicating with the ContentNext API**

`@content-next/sdk` is a TypeScript-based SDK designed to interact with the ContentNext API. This SDK provides methods for fetching blog posts and their content.

## Installation

To install the SDK, use npm or yarn:

```sh
npm install @content-next/sdk
```

or 

```sh
yarn add @content-next/sdk
```

## Usage
### Basic Setup

Import and instantiate the SDK with your API key:

```typescript
import { ContentNextSDK } from '@content-next/sdk';

const apiKey = 'your-api-key';
const sdk = new ContentNextSDK(apiKey);
```

### Fetching Blog Posts

Use the `getBlogPosts` method to retrieve a list of blog posts for a specific website:

```typescript
async function fetchBlogPosts() {
  try {
    const websiteId = 'your-website-id';
    const blogPosts = await sdk.getBlogPosts(websiteId, 1, 10);
    console.log(blogPosts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
  }
}

fetchBlogPosts();
```

-   **Parameters**:
    -   `websiteId`: The ID of the website to fetch blog posts from.
    -   `page` (optional): The page number of results to fetch (default is 1).
    -   `size` (optional): The number of results per page (default is 10).

### Fetching a Blog Post

Use the `getBlogPost` method to retrieve a specific blog post by its slug:

```typescript
async function fetchBlogPost() {
  try {
    const slug = 'example-blog-post-slug';
    const blogPost = await sdk.getBlogPost(slug);
    console.log(blogPost);
  } catch (error) {
    console.error('Error fetching blog post:', error);
  }
}

fetchBlogPost();
```

-   **Parameters**:
    -   `slug`: The slug of the blog post to retrieve.

## API Methods

### `getBlogPosts(websiteId: string, page?: number, size?: number): Promise<BlogPostsResponse>`

-   **websiteId**: The ID of the website to fetch blog posts from.
-   **page** (optional): Page number for pagination.
-   **size** (optional): Number of blog posts per page.
-   **Returns**: A promise that resolves to a `BlogPostsResponse` containing the list of blog posts.

### `getBlogPost(slug: string): Promise<BlogPostContentResponse>`

-   **slug**: The slug of the blog post to retrieve.
-   **Returns**: A promise that resolves to a `BlogPostContentResponse` containing the blog post details.

## Error Handling

Errors from API requests are caught and can be handled with standard `try-catch` blocks.

```typescript
try {
  const data = await sdk.getBlogPosts('your-website-id');
  console.log(data);
} catch (error) {
  console.error('API request failed:', error);
}
```
