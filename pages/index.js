import React, { useEffect } from "react";
import Head from "next/head";
import Row from "../src/components/Row";
import Column from "../src/components/Column";
import { Article } from "../src/components/Article";
import { fetchPosts } from "../src/store";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const { loading, error, posts } = useSelector((state) => state);

  useEffect(() => {
    if (!posts.length) {
      dispatch(fetchPosts());
    }
  }, [dispatch, posts]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong try again later</div>;
  return (
    <div className="container">
      <Head>
        <title>Home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <Row>
            {posts &&
              posts.map((column, index) => (
                <Column key={column.id} width={column.width}>
                  <Article article={column} />
                </Column>
              ))}
          </Row>
        </div>
      </main>
    </div>
  );
}
