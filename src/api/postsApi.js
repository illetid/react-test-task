import fetch from "isomorphic-unfetch";
import { nanoid } from "nanoid";

export async function getPosts() {
  const data = await fetch(
    "https://storage.googleapis.com/aller-structure-task/test_data.json"
  );
  const layout = await data.json();
  // adding IDs for posts to interact with (update, delete)
  const posts = [];
  layout[0].forEach((row) => {
    row.columns.forEach((col) => {
      col.id = nanoid();
      posts.push(col);
    });
  });
  return posts;
}
