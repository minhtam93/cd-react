import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function ToDoList({
  toDoList,
  addList,
  addDone,
  backList,
  deleteJob,
  saveInput
}) {
  const [inputVal, setInputVal] = useState("");
  const _toDoLists = toDoList.filter((list) => !list.isCompleted);
  const _doneLists = toDoList.filter((list) => list.isCompleted);
  const [editModel, setEditModel] = useState(false);
  const [saveId, setSaveId] = useState(-1);

  const _addList = () => {
      //  kiểm tra chế độ sửa hay là thêm mới
      if (!editModel) {
        addList(inputVal.trim());
        setInputVal("");
      } else {
        if (saveId !== -1) {
          saveInput(saveId, inputVal.trim());
          setInputVal("");
          setEditModel(false);
        }
      }
  };
  const onKeyUp=(e)=> {
    if(e.key==='Enter') {
      _addList()
    }
  }

  return (
    <Wrapper className="wrapper">
      <div className="container">
        <h1 className="heading">To Do List</h1>
        <InputWrap className="input-wrap">
          <input
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Enter a Todo..."
            onKeyUp={onKeyUp}
          />
          <button onClick={_addList} disabled={!inputVal.trim()}>{editModel ? "Save" : "Add"}</button>
        </InputWrap>
        <Lists className="content">
          <h2>Việc cần làm</h2>
          {_toDoLists.map((list) => (
            <Item
              id={list.id}
              content={list.content}
              isCompleted={list.isCompleted}
              addDone={addDone}
              deleteJob={deleteJob}
              setInputVal={setInputVal}
              setEditModel={setEditModel}
              setSaveId={setSaveId}
            />
          ))}
        </Lists>
        <Lists className={_doneLists.length === 0 ? 'is-hidden' : null}>
          <h2>Việc đã làm</h2>
          {_doneLists.map((list) => (
            <Item
              id={list.id}
              content={list.content}
              isCompleted={list.isCompleted}
              addDone={addDone}
              backList={backList}
            />
          ))}
        </Lists>
      </div>
    </Wrapper>
  );
}

const Item = ({
  id,
  content,
  isCompleted,
  addDone,
  backList = null,
  deleteJob,
  setInputVal,
  setEditModel,
  setSaveId,
}) => {
  const _addDone = (id) => {
    addDone(id);
  };

  const handleCompleted = (id) => {
    isCompleted ? backList(id) : null;
  };

  const _deleteJob = (id) => {
    let isDelete = confirm("Bạn muốn xoá công việc này?");
    isDelete ? deleteJob(id) : null;
  };

  const _editContent = (content, id) => {
    setInputVal(content);
    setEditModel(true);
    setSaveId(id);
  };

  return (
    <ListItem
      key={id}
      className={isCompleted ? "is-completed" : null}
      onClick={() => handleCompleted(id)}
    >
      {content}
      <div className="button-list">
        <button onClick={() => _addDone(id)}>Done</button>
        <button onClick={() => _editContent(content, id)}>Edit</button>
        <button onClick={() => _deleteJob(id)}>Delete</button>
      </div>
    </ListItem>
  );
};

const Wrapper = styled.div`
  width: 700px;
  margin: 100px auto;
  text-align: center;
  background: #1c3c38;
  color: #fff;
  .container{
    padding: 25px;
    box-shadow: -2px 12px 22px -3px rgba(31, 28, 31, 0.8);
    .heading {
      font-size: 25px;
      line-height: normal;
      padding-top: 20px;
      padding-bottom: 30px;
    }
  }
`;


const InputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  input {
    flex: 1;
    border-radius: 8px;
    height: 40px;
    padding-left: 10px;
    background-color: #0b1816;
    border: 1px solid #777777;
    color: white;
    outline: none;
  }
  button {
    border-radius: 8px;
    border: none;
    padding: 0 15px;
    cursor: pointer;
    // background: #ffa343;
  }
`;

const Lists = styled.ul`
  padding-left: 0;
  &:first-child {
    padding-bottom: 20px;
  }
  &.is-hidden {
    display: none;
  }
  h2 {
    font-size: 20px;
    text-align: left;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

const ListItem = styled.li`
  list-style: none;
  text-align: left;
  border: 1px solid #efefef;
  border-radius: 8px;
  min-height: 35px;
  line-heigth: 1.25;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  margin-bottom: 15px;
  cursor: pointer;
  .button-list {
    display: flex;
    gap: 10px;
  }
  &.is-completed {
    text-decoration: line-through;
    &:hover {
      background: #e69138;
      text-decoration: unset;
    }
    .button-list {
      display: none;
    }
  }
`;

