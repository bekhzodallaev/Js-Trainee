const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

class DataHandler {
  constructor() {
    this.posts = new Map();
  }

  async fetchPosts() {
    try {
      const response = await fetch(POSTS_URL);

      if (!response.ok) {
        throw new Error(
          `Network response was not ok! Status: ${response.status}`
        );
      }

      const postData = await response.json();

      postData.forEach((post) => {
        this.posts.set(post.id, post);
      });

      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  listPosts() {
    const sortedPosts = Array.from(this.posts.values()).sort((a, b) =>
      a.title.localeCompare(b.title)
    );

    return sortedPosts;
  }

  getPost(postId) {
    return this.posts.get(postId) || null;
  }

  clearPosts() {
    this.posts.clear();
  }
}

const postService = new DataHandler();

async function displaySortedPosts() {
  await postService.fetchPosts();
  const sortedPosts = postService.listPosts();

  console.log(sortedPosts);
  return sortedPosts;
}
displaySortedPosts();
