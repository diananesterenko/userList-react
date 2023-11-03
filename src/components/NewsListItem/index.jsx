import React from "react";
import { FaRegHeart, FaTrash } from "react-icons/fa6";
import styles from "./NewsListItem.module.css";
function NewsListItem(props) {
  const { new: n, index, removeNew, selectNew } = props;
  const highlightLi = {
    backgroundColor: n.isSelected ? "rgba(255, 192, 203, 0.768)" : "white",
    border: n.isSelected ? "2px solid pink" : " ",
  };
  const highlightLike = {
    color: n.isSelected ? "red" : " ",
    border: n.isSelected ? "2px solid red" : " ",
  };
  return (
    <li style={highlightLi} className={styles.news}>
      <div
        className={styles.newsHeader}
        style={{ backgroundImage: `url(${n.headerBgSrc})` }}
      >
        <div className={styles.newsHeaderBackground}>
          <button
            className={styles.like}
            style={highlightLike}
            onClick={() => selectNew(index)}
          >
            <FaRegHeart />
          </button>

          <h2 className={styles.newsTitle}>{n.title}</h2>
        </div>
      </div>
      <div className={styles.newsContent}>
        <h5 className={styles.newsContetntTitle}>{n.category}</h5>
        <p className={styles.newsContentText}>{n.body}</p>
        <p className={styles.newsContentDate}>{n.date}</p>
        <button onClick={() => removeNew(index)} className={styles.delete}>
          <FaTrash />
        </button>
      </div>
    </li>
  );
}

export default NewsListItem;
