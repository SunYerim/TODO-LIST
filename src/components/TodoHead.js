import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);
  const today = new Date();
  const dateString = today.toLovaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });
  const [timeStamp, setTimeStamp] = useState(Date.now());

  useEffect(() => {
    setInterval(() => setTimeStamp(Date.now()), 1000);
  }, []);

  const getLocalTimeString = () => {
    return new Date(timeStamp).toLocaleTimeString();
  };
  return (
    <TodoHeadBlock>
      <h1>2022년 6월 10일</h1>
      <div className="day">수요일</div>
      <div className="day">{getLocalTimeString()}</div>
      <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
