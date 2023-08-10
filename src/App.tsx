import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type FilterType = 'all' | 'active' | 'completed'

function App() {
    let [products, setProducts] =
        useState([
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "Bread", isDone: true},
            {id: v1(), title: "Eggs", isDone: false}
        ])
    const removeTask = (id: string) => {
        products = products.filter
        (g => g.id !== id)
        setProducts(products)
    }
    let [filter, setFilter] = useState<FilterType>("all")
    let prodForTodolist = products
    if (filter === 'completed') {
        prodForTodolist = products.filter
        (g => g.isDone === true)
    }
    if (filter === 'active') {
        prodForTodolist = products.filter
        (g => g.isDone === false)
    }
    const changeFilter = (value: FilterType) => {

        setFilter(value)
    }
    const addProd = (title: string) => {
        let prod = {id: v1(), title: title, isDone: false}
        let newProds = [prod, ...products]
        setProducts(newProds)
    }
    return (
        <div className="App">
            <Todolist title={"What to buy"}
                      goods={prodForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addProd={addProd}
            />
        </div>
    );
}

export default App;
