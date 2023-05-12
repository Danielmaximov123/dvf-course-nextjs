import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect , useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import TokenIcon from '@mui/icons-material/Token';
import GroupIcon from '@mui/icons-material/Group';
import PlayLessonIcon from '@mui/icons-material/PlayLesson';
import { useRouter } from "next/router";
import jwt from 'jsonwebtoken'

const Header = ({token}) => {
  const router = useRouter()
  const [admin, setAdmin] = useState(false)

  const handleLogOut = () => {
    localStorage.removeItem('token')
    router.push('/sign-in')
  }

  useEffect(() => {
    if (token) {
      const decoded = jwt.decode(token)
      if (decoded.admin) {
        setAdmin(true)
      } else {
        setAdmin(false)
      }
    }
  },[])


  return (
    <Box sx={{ flexGrow : 1 }}>
    <AppBar sx={{ backgroundColor: "#1a2138", height: "4rem" }}>
    <Toolbar>
       <Typography variant="h6" sx={{ flexGrow: 1 }}> 
          <Link href='/'>
          <Image src="/logo192.png" alt="" width={100} height={100} style={{  top: '0.5rem', position: 'relative' }}/>
          </Link>
        </Typography>
        <Button component={Link} href='/' color="inherit" endIcon={<PlayLessonIcon sx={{ transform: 'rotate(180deg)' }} />}>
          שיעורים
        </Button>
        {
          admin &&
          <>  
        <Button component={Link} href='/tokens' color="inherit" endIcon={<TokenIcon/>}>
          אסימונים
        </Button>
        <Button component={Link} href='/users' color="inherit" endIcon={<GroupIcon/>}>
          משתמשים
        </Button>
          </>
        }
        <Button onClick={handleLogOut} color="inherit" endIcon={<LogoutIcon sx={{ transform: 'rotate(180deg)' }} />}>
          התנתקות
        </Button>
      </Toolbar>
    </AppBar>
    </Box>
  );
};

export default Header;
