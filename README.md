# ReactJS In-Depth Tutorial Series

Welcome to the comprehensive repository dedicated to teaching ReactJS in depth. This series covers not just the basics but dives deep into the intricacies of ReactJS to ensure that you emerge with a solid foundation and deep understanding of the most popular frontend library in the world.

## 🌟 Features

- **In-Depth Explanations**: Each concept is broken down for easier understanding and comprehensive learning.
- **Project-Based Learning**: Multiple projects to ensure that your theoretical knowledge is supplemented with practical experience.
- **Free Video Series**: All lessons are available in video format on our YouTube channel "chai aur code".

## 🚀 Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/AkashChauhan22110/chai-aur-react.git
   ```

2. Navigate to each project folder and follow the instructions in the respective README to set up and run the project.

3. Parallelly, watch the video lessons on the ["chai aur code" YouTube channel](https://www.youtube.com/channel/UCNQ6FEtztATuaVhZKCY28Yw) for a detailed walk-through.

## 📚 Modules & Projects

1. **React JS RoadMap**:
   
   - [Watch Lesson](https://www.youtube.com/watch?v=vz1RlUyrc3w&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige)

2. **Create react projects**:
   - [Watch Lesson](https://www.youtube.com/watch?v=k3KqQvywToE&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=2)

3. **Understand the react flow and structure**:
   - [Watch Lesson](https://www.youtube.com/watch?v=yNbnA5pryMg&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=3)
4. **Create your own react library and JSX**:
   - [Watch Lesson](https://www.youtube.com/watch?v=kAOuj6o7Kxs&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=4)

... _(on going series)_

## 📖 Additional Resources

- [Official React Documentation](https://reactjs.org/docs/getting-started.html)
- [React Community Support on Discord](https://hitesh.ai/discord)

## 💼 Contribution

Contributions are always welcomed. Feel free to raise issues or send in pull requests. Please do not update the existing code as users when they watch videos, they expect same code in repo.

## 📺 "chai aur code" on YouTube

Don't forget to subscribe to ["chai aur code"](https://www.youtube.com/channel/UCNQ6FEtztATuaVhZKCY28Yw) on YouTube for the entire video series and much more!


// import React from 'react'

import { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);
  const [counter, setCounter] = useState(18);

  const handleClick = () => {
    if (value !== "" && todo !== "") {
      setTodo([...todo, value]);
      setValue("");
    }
  };

  const handleDeleteTask = (i) => {
    const updatedTasks = [...todo];
    updatedTasks.splice(i, 1);
    setTodo(updatedTasks);
  };

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="container">
      <div className="app">
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type="text"
          placeholder="Add Your Task Here.."
        />
        <button onClick={handleClick}>Add ToDo</button>
      </div>

      <div>
        <ul>
          {todo.map((todos, i) => (
            <li key={i}>
              {todos}
              <button onClick={() => handleDeleteTask(i)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1>Couter Live Value :{counter}</h1>
        <button onClick={addValue}>Add</button>
        <button onClick={removeValue}>Remove</button>
      </div>
    </div>
  );
};

export default App;
