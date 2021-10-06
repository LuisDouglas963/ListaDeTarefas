import { useState } from "react";
import * as C from "./Styles/AppStyles";
import { Item } from "./Types/Item";
import { ListItem } from "./Components/ListItem";
import { AddArea } from "./Components/AddArea";

const App = () => {
  const [list, setList] = useState<Item[]>([]);

  const hadleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/* Add nova tarefa */}

        <AddArea onEnter={hadleAddTask} />

        {/* Criar lista */}
        
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
