import React from 'react'

function Article({id, title, date="January 1, 1970", preview, minutes}){
  const minReadIcon = '☕️';
  const numReadIcons = Math.ceil(minutes/5);
  
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <small> • </small>
      <small>{`${minReadIcon.repeat(numReadIcons)}${minutes} minute read`}</small>
      <p>{preview}</p>
    </article>
  )
}

export default Article
