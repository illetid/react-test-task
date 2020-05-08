import * as React from "react";
import styled from "@emotion/styled";

const StyledArticle = styled.article`
  position: relative;
  .article__title {
    background: transparent;
    color: ${({ theme }) => theme.text};
    text-decoration: underline;
    appearance: none;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizeTitle};
    width: 100%;
    display: block;
  }
`;

export const SimpleArticle = ({ article }) => {
  return (
    <StyledArticle>
      <a className={"article__link"} target="_blank" href={article.url}>
        <h3 className="article__title">{article.title}</h3>
      </a>
    </StyledArticle>
  );
};
