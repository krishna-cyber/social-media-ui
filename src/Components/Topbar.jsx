import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Topbar.css";
const Topbar = () => {
  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <span className='logo'>Krishna Social</span>
      </div>
      <div className='topbarCenter'>
        <div className='searchBar'>
          <SearchIcon className='searchIcon' />
          <input
            className='searchInput'
            type='text'
            placeholder='Search for friends, Post or Video'
          />
        </div>
      </div>
      <div className='topbarRight'>
        <div className='topbarLinks'>
          <span className='topbarLink'>Homepage</span>
          <span className='topbarLink'>Timeline</span>
        </div>
        <div className='tobarIcons'>
          <div className='topbarIconItem'>
            <PersonIcon />
            <span className='topbarIconBadge'>1</span>
          </div>
          <div className='topbarIconItem'>
            <ChatIcon />
            <span className='topbarIconBadge'>1</span>
          </div>
          <div className='topbarIconItem'>
            <NotificationsIcon />
            <span className='topbarIconBadge'>1</span>
          </div>
        </div>
        <img
          src='src\assets\persons\5.jpg'
          alt='Profile'
          className='topbarImg'
        />
      </div>
    </div>
  );
};

export default Topbar;
