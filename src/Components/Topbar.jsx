import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
const Topbar = () => {
  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <span className='Logo'>Krishna Social</span>
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
        </div>
      </div>
    </div>
  );
};

export default Topbar;
