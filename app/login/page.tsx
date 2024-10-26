import { Sixtyfour } from 'next/font/google';
import styles from '../lib/ui/Login.module.scss';
import Link from 'next/link';

const sixtyfour = Sixtyfour({subsets:['latin']})

export default function Login(){
    return(
        <div className={styles.container}>
            <div className={styles.logo}> {/* 로고 */}
                <h1 className={sixtyfour.className}>FINAL PEOPLE</h1>
            </div>
            <div className={styles.wrapper}>
                <form action="" className={styles.login_form}>
                    <div className={styles.input_field}>
                        <input type="text" required/>
                        <label>Enter your email</label>
                    </div>
                    <div className={styles.input_field}>
                        <input type="password" required/>
                        <label>Enter your password</label>
                    </div>
                    <div className={styles.forget}>
                        <label htmlFor="remember">
                            <input type="checkbox" id="remember" />
                            <p>아이디 저장</p>
                        </label>
                        <Link href="#">아이디/비밀번호 찾기</Link>
                    </div>
                    <button type="submit" className={styles.login_btn}>로그인</button>
                    <div className={styles.register}>
                        <Link href="#">회원가입</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}