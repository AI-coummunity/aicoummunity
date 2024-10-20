import Main from './components/Main';
import styles from './page.module.scss';


export default function Home(){
  return(
    <>
    <div className={styles.banner}></div> {/* 배너 */}
      <div className={styles.sort}>
        <select defaultValue={'최신순'}>
          <option>최신순</option>
          <option>조회순</option>
          <option>좋아요순</option>
        </select>
      </div>
      <Main />
    </>
  )
}