'use client'

import SearchIcon from '@mui/icons-material/Search';
import styles from '../lib/ui/Header.module.scss';
import { Sixtyfour } from 'next/font/google';
import Link from 'next/link';

const sixtyfour = Sixtyfour({subsets:['latin']})

export default function Header(){
    
    return(
        <div className={styles.container}>
            <Link href='/'>
                <div className={styles.logo}> {/* 로고 */}
                    <h1 className={sixtyfour.className}>FINAL PEOPLE</h1>
                </div>
            </Link>
            <div className={styles.search}> {/* 검색창 */}
                <input className={styles.searchBar} type="text" placeholder='검색어를 입력해주세요'/>
                <button className={styles.searchBar_btn} type='submit'><SearchIcon fontSize='large' /></button>
            </div>
            <Link href='/login'>
                <button className={styles.login_btn}>로그인</button> {/* 로그인 버튼 */}
            </Link>
        </div>
    )
}