'use client';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Sixtyfour } from 'next/font/google';
import Link from 'next/link';
import styles from '../../lib/ui/LoginModal.module.scss';
import { usePathname,useRouter } from 'next/navigation';

const sixtyfour = Sixtyfour({subsets:['latin']})



export default function LoginModal(){
  const router = useRouter();
  const pathname = usePathname();
  const handleClose = () => router.back()
  const close = () => {router.back()}

  return(
    <>
    <Modal open={pathname==='/login'} onClose={close}>
      <Box sx={{position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 600,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4}}
        >
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
        <button onClick={handleClose}>닫기</button>
        </Box>
    </Modal>
    </>
  )
}