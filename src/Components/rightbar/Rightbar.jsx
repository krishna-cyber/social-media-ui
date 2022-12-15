import "./rightbar.css";

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <div className='birthdatContainer'>
          <img
            src='src\assets\sidebar\gift.png'
            alt=''
            className='birthdayImg'
          />
          <span className='birthdayText'>
            <b>Nabin</b> and <b>3 other friends</b> have birthday today!
          </span>
        </div>
        <img className='rightbarAds' src='src\assets\sidebar\ads.png' alt='' />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendLists'>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img
                src='src\assets\persons\1.jpg'
                alt=''
                className='rightbarProfileImg'
              />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Nabin Ghimire</span>
          </li>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img
                src='src\assets\persons\1.jpg'
                alt=''
                className='rightbarProfileImg'
              />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Nabin Ghimire</span>
          </li>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img
                src='src\assets\persons\1.jpg'
                alt=''
                className='rightbarProfileImg'
              />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Nabin Ghimire</span>
          </li>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img
                src='src\assets\persons\1.jpg'
                alt=''
                className='rightbarProfileImg'
              />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Nabin Ghimire</span>
          </li>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img
                src='src\assets\persons\1.jpg'
                alt=''
                className='rightbarProfileImg'
              />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Nabin Ghimire</span>
          </li>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img
                src='src\assets\persons\1.jpg'
                alt=''
                className='rightbarProfileImg'
              />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Nabin Ghimire</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
