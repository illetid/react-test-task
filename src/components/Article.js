import * as React from "react";
import styled from "@emotion/styled";
import { FiEdit3, FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { deletePost, updatePostTitle } from "../store";
import { ArticleDeleteButton } from "./ArticleDeleteButton";
const { useState, useEffect, createRef, useRef } = React;

const StyledArticle = styled.article`
  position: relative;

  .article__input,
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
  .article__link {
    display: block;
    color: ${({ theme }) => theme.text};

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }

  .article__edit {
    position: absolute;
    top: 5px;
    right: 5px;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.success};
    display: flex;
    padding: 8px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  .article__delete {
    position: absolute;
    top: 45px;
    right: 5px;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.danger};
    padding: 8px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
`;

const normalizeImageUrl = (urlString, size) => {
  const url = new URL(urlString);
  const width = Math.round((size / 12) * 900);

  url.searchParams.append("width", width);
  url.searchParams.append("height", 300);

  return url;
};

export const Article = ({ article }) => {
  const [isEdit, setEditing] = useState(false);
  const imageUrl = normalizeImageUrl(article.imageUrl, article.width);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isEdit) {
      inputRef.current.focus();
    }
  }, [isEdit]);

  return (
    <StyledArticle>
      <a className={"article__link"} target="_blank" href={article.url}>
        <img src={imageUrl} alt={article.title} />
      </a>
      {isEdit ? (
        <textarea
          className="article__input"
          value={article.title}
          ref={inputRef}
          onChange={(e) =>
            dispatch(updatePostTitle({ id: article.id, title: e.target.value }))
          }
        />
      ) : (
        <a className={"article__link"} target="_blank" href={article.url}>
          <h3 className="article__title">{article.title}</h3>
        </a>
      )}

      <button
        title="Edit post"
        className="article__edit"
        onClick={() => setEditing(!isEdit)}
      >
        <FiEdit3 />
      </button>
      <ArticleDeleteButton artcileId={article.id} />
    </StyledArticle>
  );
};