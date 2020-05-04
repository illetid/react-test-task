import { FiTrash2 } from "react-icons/fi";
import * as React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../store";
import { toast } from "react-toastify";

const UndoRemoveContent = ({ onUndo }) => (
  <div>
    Post deleted.
    <button onClick={onUndo}>Click to undo</button>
  </div>
);

export const ArticleDeleteButton = ({ artcileId }) => {
  const dispatch = useDispatch();
  const onPostDelete = () => {
    const timeoutId = setTimeout(() => {
      dispatch(deletePost({ id: artcileId }));
    }, 5000);
    toast(<UndoRemoveContent onUndo={() => clearTimeout(timeoutId)} />);
  };
  return (
    <button
      title="Delete post"
      className="article__delete"
      onClick={onPostDelete}
    >
      <FiTrash2 />
    </button>
  );
};
