import React from 'react'
import styles from './search.module.css'

const Search = () => {
  return (
    <div className={styles.container}>
      <input className={styles.search} type="text" />
      <button className={styles.searchBtn}>Search</button>
    </div>
  )
}

export default Search
