import Head from "next/head";
import fetch from "isomorphic-unfetch";
import Row from "../src/components/Row";
import Column from "../src/components/Column";
import { SimpleArticle } from "../src/components/SimpleArticle";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { fetchPosts } from "../src/store";

export default function SimpleListPage() {
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
        <title>Sample page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <Row>
            {posts &&
              posts.map((column, index) => (
                <Column key={column.id} width={12}>
                  <SimpleArticle article={column} />
                </Column>
              ))}
          </Row>
        </div>
      </main>
    </div>
  );
}
