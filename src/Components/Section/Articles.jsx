import React from "react";
import Title from "../Common/Title";
import style from "../Style/Article.module.css";
import Button from "../Common/Button";
import { articleData } from "../Misc/articleData";
import { useState } from "react";

const Articles = () => {
  const [articles, setArticles] = useState("All");

  const handleSelectionClicks = (sectionTag) => {
    setArticles(sectionTag);
  }
 
  return (
    <div className={style.container} id="articles">
      <Title className={"titlePry"} title={"Latest Articles"} />
      <div className={style.buttonsContainer}>
        <div className={style.buttons}>
          <Button
            className={articles === "All" ? "btnActive" : "btnTran"}
            title={"All"}
            btnEventHandler={() => handleSelectionClicks("All")}
          />
          <Button
            className={articles === "Tech Trends" ? "btnActive" : "btnTran"}
            title={"Tech Trends"}
            btnEventHandler={() => handleSelectionClicks("Tech Trends")}
          />
          <Button
            className={articles === "Career Advice" ? "btnActive" : "btnTran"}
            title={"Career Advice"}
            btnEventHandler={() => handleSelectionClicks("Career Advice")}
          />
          <Button
            className={articles === "Success Stories" ? "btnActive" : "btnTran"}
            title={"Success Stories"}
            btnEventHandler={() => handleSelectionClicks("Success Stories")}
          />
        </div>
        <div className={style.seeAll}>
          <Button
            className={"btnOutline"}
            title={"See All"}
          />
        </div>
      </div>
      <div className={style.articleContainer}>


        {articleData.filter((article) => {
          if (articles === "All") {
            return article;
          } else {
            return article.tag === articles;
          }
        }).map((article) => {
          return (
            <div key={article.id} className={style.article}>
              <div className={style.articleInfo}>
                <p className={style.articleCategory}>{article.tag}</p>
                <div className={style.dot}></div>
                <p className={style.articleTimeDate}>{article.readTime}</p>
              </div>
              <div className={style.articleTitle}>
                <p>{article.title}</p>
              </div>
              <div className={style.articleTimeDate}>
                <p>{article.date}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Articles;