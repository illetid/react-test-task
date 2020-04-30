import Head from "next/head";
import fetch from "isomorphic-unfetch";
import Row from "../components/Row";
import Column from "../components/Column";
import { Article } from "../components/Article";
import { SimpleArticle } from "../components/SimpleArticle";

export default function Home({ layout }) {
  return (
    <div className="container">
      <Head>
        <title>Home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          {layout.map((row, index) => (
            <Row key={index}>
              {row.columns.map((column, index) => (
                <Column key={index} width={12}>
                  <SimpleArticle article={column} />
                </Column>
              ))}
            </Row>
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch(
    "https://storage.googleapis.com/aller-structure-task/test_data.json"
  );

  const layout = await data.json();

  return {
    props: { layout: layout[0] },
  };
}
