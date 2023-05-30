import React from "react";
import { questionList } from "../public/questionList";

const index = () => {
  return (
    <div>
      {questionList.map(question => (
        <div key={question.id}>
          <p>{question.question}</p>
        </div>
      ))}
    </div>
  );
};

export default index;
