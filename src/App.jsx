
import { useEffect, useState } from "react";
// import CountDownBox from "./components/CountDownBox";
import ToDoList from "./components/ToDoList";
import Register from "./pages/register";
import Header from "./components/Header";
import Siderbar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  const [toDoList, setToDoList] = useState(()=> {
    let toDoListJson = JSON.parse(localStorage.getItem('toDoList'))
    return toDoListJson ?? []
  });

  useEffect(()=> {
    const listLocalStorage = JSON.stringify(toDoList)
    localStorage.setItem('toDoList',listLocalStorage)
  },[toDoList])

  const addList =(inputVal)=> {
    setToDoList([
      ...toDoList,
      {
        id: toDoList.length + 1,
        content: inputVal,
        isCompleted: false
      }
    ])
  }
  const setNewList=(isCompleted,id)=> {
    const doneJob = toDoList.find((job)=> job.id === id)
    doneJob.isCompleted = isCompleted
    setToDoList([...toDoList])
  }
  const addDone =((id)=> {
    setNewList(true,id)
  })
  const backList =((id)=> {
    setNewList(false,id)
  })

  const saveInput=(id,inputVal) =>{
    const saveJob = toDoList.find((job)=> job.id === id)
    saveJob.content = inputVal;
    setToDoList([
      ...toDoList
    ])
  }

  const deleteJob = (id)=> {
    const newList = toDoList.filter((item)=> item.id !== id)
    setToDoList(newList)
  }
  return (
    <>
      <Header/>
      <Siderbar/>
      <Register/>
      <Footer/>
      {/* <ToDoList toDoList={toDoList} addList={addList} addDone={addDone} backList={backList} deleteJob={deleteJob}
      saveInput={saveInput}/> */}
    </>
  );
}

export default App;
