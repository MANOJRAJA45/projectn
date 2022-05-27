import React from 'react'

function NewsArticle({data}) {
  return (
    <div class="allnews">
        <h2 class="heading">{data.title}</h2>
        <p class="matter">{data.description}</p>
        <span class="time">{data.publishedAt}</span>
    </div>
  )
}

export default NewsArticle;