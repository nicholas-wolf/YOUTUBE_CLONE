
import  {useState, useContext} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: '',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'right',
  justifyContent: 'right',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchBar(props) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const { logoutUser, user } = useContext(AuthContext);
  


  function handleSubmit(event){
    event.preventDefault();
    let newSearchTerm = searchTerm
    props.submitSearch(newSearchTerm)
    navigate('/results')
}

    return (
          <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
              <Toolbar>
              <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
              >
                  <MenuIcon />
              </IconButton>
              <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                  <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                    <b>YouTube Clone</b>
                  </Link>
              </Typography>
              <Search >
                    <IconButton type="submit" onClick={handleSubmit}>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    </IconButton>
                  <StyledInputBase
                  name="searchQuery"
                  placeholder="Search???"
                  type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}
                  />
                
              </Search>
              <li>
                {user ? (
                  <button onClick={logoutUser}>Logout</button>
                ) : (
                  <button onClick={() => Navigate("/login")}>Login</button>
                )}
              </li>
              </Toolbar>
          </AppBar>
          </Box>
    )
}
