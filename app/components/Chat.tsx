import styles from '../lib/ui/Chat.module.scss';
import Image from 'next/image';


export default function Chat(){
    return(
        <div className={styles.container}>
            <div className={styles.msger_chat}>
            <div className={`${styles.msg} ${styles.right_msg}`}>
                    <div className={styles.msg_bubble}>
                        <div className={styles.msg_info}>
                            <div className={styles.msg_infoname}>Sajad</div>
                            <div className={styles.msg_infotime}>12:44</div>
                        </div>
                        <div className={styles.msg_text}>
                            Lorem ipsum dolor sit amet
                        </div>
                    </div>
                </div>
                <div className={`${styles.msg} ${styles.left_msg}`}>
                    <div className={styles.msg_bubble}>
                        <div className={styles.msg_info}>
                            <div className={styles.msg_infoname}>BOT</div>
                            <div className={styles.msg_infotime}>12:45</div>
                        </div>
                        <div className={styles.msg_text}>
                            Hi, welcome to SimpleChat! Go ahead and send me a message. 😄
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}