import styles from "./News.module.css"
import NewsCard from "./NewsCard/NewsCard"

const News = () => {
  return (
    <div className={styles.NewsWrapper}>
      <div className={styles.newsContent}>
        <div className={styles.newsSectionHeader}>
            <p>Blogs and News</p>
            <h2>Read Our Latest News</h2>
        </div>

        <div className={styles.newsCardSection}>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
        </div>
      </div>
    </div>
  )
}

export default News