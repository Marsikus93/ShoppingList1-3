import React, {useState} from "react";
import {FilterType} from "./App";
import {log} from "util";

type ProductType = {
    id: string
    title: string
    isDone: boolean
}
type PropsType = {
    title: string
    goods: ProductType[]
    removeTask: (gId: string) => void
    changeFilter: (value: FilterType) => void
    addProd: (title: string) => void
}

export function Todolist(props: PropsType) {
    let [title, setTitle] = useState('')
    const addProd = () => {
        props.addProd(title)
        setTitle('')
    }

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const KeyBoardHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addProd()
        }
    }
    const onAllChangeHandler = () => {
        props.changeFilter('all')
    }
    const onInProgressChangeHandler = () => {
        props.changeFilter('active')
    }
    const onCompletedChangeHandler = () => {
        props.changeFilter('completed')
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title}
                       onChange={onChangeHandler}
                       onKeyPress={KeyBoardHandler}
                />
                <button onClick={addProd}>+</button>
            </div>

            <ul>
                {props.goods.map((g) => {
                    const onClickHandler = () => props.removeTask(g.id)

                    return (
                        <li key={g.id}><input type="checkbox" checked={g.isDone}/>
                            <span>{g.title}</span>
                            <button onClick={onClickHandler}>X
                            </button>
                        </li>)
                })}
            </ul>
            <div>
                <button onClick={onAllChangeHandler}>All
                </button>
                <button onClick={onInProgressChangeHandler}>In progress
                </button>
                <button onClick={onCompletedChangeHandler}>Completed
                </button>
            </div>
        </div>
    )
}