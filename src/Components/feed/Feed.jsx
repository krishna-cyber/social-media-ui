import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { posts } from "../../dummydata";

const Feed = () => {
  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share />

        {posts.map((p) => {
          return <Post key={p.id} post={p} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
