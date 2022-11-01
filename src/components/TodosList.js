import React from "react";
import { connect } from "react-redux";
import { SymbolDisplayPartKind } from "typescript";
import Todo from "./Todo";

const TodosList = ({ todos }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
        margin: "10px auto",
        height: "200px",
        overflowY: "auto",
        overflowX: "hidden",
        border: "#00848a 1px solid",
        padding: "5px",
      }}
    >
      {todos.map((todo, i) => (
        <Todo key={i} todo={todo} idx={i} />
      ))}
    </div>
  );
};
const mapStateToProps = ({ todos }) => ({
  todos
});
export default connect(mapStateToProps)(TodosList);
