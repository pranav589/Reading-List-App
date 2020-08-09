import React,{createContext,useState} from 'react'

export const BookContext=createContext()

const BookContextProvider=(props)=>{
  const [books,setBooks]=useState([
    {title:'Book 1',author:'Author 1', id:1},
    {title:'Book 2', author:'Author 2', id:2}
  ])

  const addBook=(title,author)=>{
    setBooks([...books,{title:title,author:author,id:Math.random()*10}])
  }

  const removeBook=(id)=>{
    setBooks(books.filter(book=>{
      boo.id!==id
    }))
  }

  return (
    <BookContextProvider value={{books,addBook,removeBook}}>
      {props.children}
    </BookContextProvider>
  )
}

