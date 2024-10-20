import styles from '../lib/ui/Post.module.scss';
import Chat from './Chat';
import { Avatar } from '@mui/material';
import Interactions from './Interactions';

export default function Post(){
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.user}>
                    <Avatar />
                    <div className={styles.user_name}>User1</div>
                </div>
                <div className={styles.title}>
                    Lorem ipsum dolor sit amet
                </div>
                <Chat />
                <Interactions />
            </div>
        </div>
    )
}