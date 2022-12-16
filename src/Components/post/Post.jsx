import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <>
      <div className='post'>
        <div className='postWrapper'>
          <div className='postTop'>
            <div className='topLeft'>
              <img
                className='postProfileImg'
                src='src\assets\persons\1.jpg'
                alt=''
              />
              <span className='postUsername'>Krishna Tiwari</span>
              <span className='postDate'>{post.date}</span>
            </div>
            <div className='topRight'>
              <MoreVertIcon />
            </div>
          </div>
          <div className='postCenter'>
            <span className='postText'>{post.desc}</span>
            <img className='postImg' src={post.photo} alt='' />
          </div>
          <div className='postBottom'>
            <div className='postBottomLeft'>
              <ThumbUpIcon
                className='likeIcon'
                htmlColor='blue'
                onclick={likeHandler}
              />
              <FavoriteIcon
                className='likeIcon'
                htmlColor='red'
                onClick={likeHandler}
              />
              <span className='postLikeCounter'>{like} people liked it</span>
            </div>
            <div className='postBottomRight'>
              <span className='postCommentText'>{post.comment} comments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
