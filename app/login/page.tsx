import { Sixtyfour } from 'next/font/google';
import styles from '../lib/ui/Login.module.scss';

const sixtyfour = Sixtyfour({subsets:['latin']})

export default function Login(){
    return(
        <div className={styles.container}>
            <div className={styles.logo}> {/* 로고 */}
                <h1 className={sixtyfour.className}>FINAL PEOPLE</h1>
            </div>
            <form className={styles.login_form}>
                <div className={styles.id}>
                    <label htmlFor="id">
                        <span>아이디: </span>
                        <input type="text" name="id" placeholder="아이디를 입력해주세요"/>
                    </label>
                </div>
                <div className={styles.pwd}>
                    <label htmlFor="pwd">
                        <span>비밀번호: </span>
                        <input type="password" name="pwd" placeholder="비밀번호를 입력해주세요"/>
                    </label>
                </div>
            </form>
        </div>
    )
}