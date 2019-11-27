import React from "react";
import classes from "./News.module.css";

const News = () => {
  return (
    <div className={classes.news}>
      <h2>мои новости</h2>
      <div className={classes.left_side_news}>
        <form>
          <input
            type="text"
            placeholder="Title News"
            onChange={() => console.log("event title")}
          />
          <label>
            добавить новость:
            <textarea onChange={() => console.log("event textarea")} />
          </label>
          <button onClick={() => alert("Click")}>Отправить</button>
        </form>
      </div>
      <div className={classes.right_side_news}>Смотри тут:</div>
    </div>
  );
};
export default News;
