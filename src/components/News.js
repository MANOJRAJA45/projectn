import react,{useContext} from 'react';
import { NewsApi } from "../NewsApi";
import NewsArticle from "./NewsArticle";

function News(props){
    const {data}=useContext(NewsApi);
    console.log(data);
    return (
       <div>
         <h1 class="title">  News On the go </h1>
         <div class="newswhole">
          {data 
            ? data.articles.map((news)=>(
                <NewsArticle data={news} key={news.url} />

              ))
            : "loading data"}
        </div>
         <p class="thankyou">Come back Again! to read more.....</p>
       </div>
    );
}
export default News;