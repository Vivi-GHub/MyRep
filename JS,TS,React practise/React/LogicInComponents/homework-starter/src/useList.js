import { useState, useRef, useEffect } from "react";

export function useList() {
  const [list, setList] = useState([])
  const ref = useRef()

  /** Создать новый элемент. */
  const createItem = () => {
    const newItem = {
      id: Date.now(),
      title: "",
      done: false,
    };
    setList(previous => [...previous, newItem]);
    ref.current = newItem.id
  };


  /** Установить заголовок элемента.*/
  const setItemTitle = (id, title) => {
    setList(previous => previous.map(item => (item.id === id ? { ...item, title } : item)))
  };

  /** Переключить выполненность элемента. */
  const toggleItem = (id) => {
    setList(previous => previous.map(item => (item.id === id ? { ...item, done: !item.done } : item)))
  };


  /** Удалить элемент.*/
  const deleteItem = (id) => {
    setList(previous => previous.filter(item => item.id !== id))
  };

  useEffect(() => {
    if (ref.current) {
      const input = document.getElementById(`input-${ref.current}`);
      if (input) {
        input.focus();
      }
      ref.current = null;
    }
  }, [list]);
  
  return {
    list,
    createItem,
    setItemTitle,
    toggleItem,
    deleteItem,
  };
}
