'use client';

import styles from '../lib/ui/Interactions.module.scss';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

export default function Interactions(){
    const [viewCount, setViewCount] = useState(0);
    const [favoriteCount, setFavoriteCount] = useState(0);

    const clickFavorite = () => {
        setFavoriteCount(p => p+1);
    }
    
    return(
        <div className={styles.interactions}>
            <div className={styles.views}>
                <VisibilityOutlinedIcon sx={{fontSize: 24}}/>
                <span className={styles.count}>25</span>
            </div>
            <div className={styles.favorite} onClick={() => clickFavorite()}>
                <FavoriteBorderIcon sx={{fontSize: 24}}/>
                <span className={styles.count}>{favoriteCount}</span>
            </div>
        </div>
    )
}