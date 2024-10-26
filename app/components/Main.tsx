import Post from "./Post"
import { Suspense } from "react";
import { Skeleton } from "@mui/material";

export default function Main(){
    return(
        <div>
            <Suspense fallback={<Skeleton variant="rectangular"/>}>
                <Post />
            </Suspense>
        </div>
    )
}