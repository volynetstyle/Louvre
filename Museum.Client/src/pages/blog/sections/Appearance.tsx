import * as React from "react";
import { ToggleButton } from "@fluentui/react-components";
import {
    ThumbLike20Regular,
    ThumbLike20Filled,
    ThumbDislike20Regular,
    ThumbDislike20Filled
} from "@fluentui/react-icons";

const Appearance = () => {
    const [likes, setLikes] = React.useState(0);
    const [dislikes, setDislikes] = React.useState(0);
    const [isLiked, setIsLiked] = React.useState(false);
    const [isDisliked, setIsDisliked] = React.useState(false);

    const handleLike = React.useCallback(() => {
        if (!isLiked) {
            setLikes(likes + 1);
            setIsLiked(true);
            if (isDisliked) {
                setDislikes(dislikes - 1);
                setIsDisliked(false);
            }
        } else {
            setLikes(likes - 1);
            setIsLiked(false);
        }
    }, [isLiked, isDisliked, likes, dislikes]);

    const handleDislike = React.useCallback(() => {
        if (!isDisliked) {
            setDislikes(dislikes + 1);
            setIsDisliked(true);
            if (isLiked) {
                setLikes(likes - 1);
                setIsLiked(false);
            }
        } else {
            setDislikes(dislikes - 1);
            setIsDisliked(false);
        }
    }, [isLiked, isDisliked, likes, dislikes]);

    return (
        <div>
            <ToggleButton
                style={{marginRight: 5}}
                className={isLiked ? "liked" : ""}
                checked={isLiked}
                icon={isLiked ? <ThumbLike20Filled /> : <ThumbLike20Regular />}
                onClick={handleLike}>
                {likes}
            </ToggleButton>
            <ToggleButton
                className={isDisliked ? "disliked" : ""}
                checked={isDisliked}
                icon={isDisliked ? <ThumbDislike20Filled /> : <ThumbDislike20Regular />}
                onClick={handleDislike}>
                {dislikes}
            </ToggleButton>
        </div>
    );
};

export default Appearance;
