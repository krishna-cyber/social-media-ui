import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Post = () => {
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
              <span className='postDate'>5 min ago</span>
            </div>
            <div className='topRight'>
              <MoreVertIcon />
            </div>
          </div>
          <div className='postCenter'>
            <span className='postText'>Hey it's me :)</span>
            <img className='postImg' src='src\assets\post\1.jpg' alt='' />
          </div>
          <div className='postBottom'>
            <div className='postBottomLeft'>
              <ThumbUpIcon className='likeIcon' htmlColor='blue' />
              <FavoriteIcon className='likeIcon' htmlColor='red' />
              <span className='postLikeCounter'>32 people liked it</span>
            </div>
            <div className='postBottomRight'>
              <span className='postCommentText'>9 comments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
