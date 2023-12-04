import React from "react";
import "./TodosLoading.css";

function TodosLoading() {    
    return (
      <ul>
        <li className="todoItem todoItem--loading-skeleton">
            <span className="loading-skeleton-icon"></span>
            <div className="loading-skeleton-comment">
                <span className="comment-line comment-line--short"></span>
                <span className="comment-line comment-line--long"></span>
            </div>
            <span className="loading-skeleton-icon"></span>
        </li>

        <li className="todoItem todoItem--loading-skeleton">
            <span className="loading-skeleton-icon"></span>
            <div className="loading-skeleton-comment">
                <span className="comment-line comment-line--short"></span>
                <span className="comment-line comment-line--long"></span>
            </div>
            <span className="loading-skeleton-icon"></span>
        </li>
      </ul>
    );
  }

export { TodosLoading }; 