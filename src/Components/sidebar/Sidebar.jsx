import "./sidebar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import GroupsIcon from "@mui/icons-material/Groups";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkIcon from "@mui/icons-material/Work";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <ul className='sidebarList'>
          <li className='sidebarItem'>
            <RssFeedIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Feed</span>
          </li>
          <li className='sidebarItem'>
            <ChatIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Chat</span>
          </li>
          <li className='sidebarItem'>
            <PlayCircleIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Videos</span>
          </li>
          <li className='sidebarItem'>
            <GroupsIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Groups</span>
          </li>
          <li className='sidebarItem'>
            <BookmarksIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Bookmarks</span>
          </li>
          <li className='sidebarItem'>
            <HelpOutlineIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Questions</span>
          </li>
          <li className='sidebarItem'>
            <WorkIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Business</span>
          </li>
          <li className='sidebarItem'>
            <EventIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Events</span>
          </li>
          <li className='sidebarItem'>
            <SchoolIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Courses</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHr' />
        <ul className='sidebarFriendList'>
          <li className='sidebarFriendListItem'>
            <img
              src='src\assets\persons\1.jpg'
              alt=''
              className='sidebarFriendImg'
            />
            <span className='sidebarFriendName'>John Doe</span>
          </li>
          <li className='sidebarFriendListItem'>
            <img
              src='src\assets\persons\2.jpg'
              alt=''
              className='sidebarFriendImg'
            />
            <span className='sidebarFriendName'>Krishna Tiwari</span>
          </li>
          <li className='sidebarFriendListItem'>
            <img
              src='src\assets\persons\3.jpg'
              alt=''
              className='sidebarFriendImg'
            />
            <span className='sidebarFriendName'>Sarad Bista</span>
          </li>
          <li className='sidebarFriendListItem'>
            <img
              src='src\assets\persons\4.jpg'
              alt=''
              className='sidebarFriendImg'
            />
            <span className='sidebarFriendName'>Emi Martinez</span>
          </li>
          <li className='sidebarFriendListItem'>
            <img
              src='src\assets\persons\5.jpg'
              alt=''
              className='sidebarFriendImg'
            />
            <span className='sidebarFriendName'>Lo Celso</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
