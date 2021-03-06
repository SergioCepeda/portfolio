import { AppBar, Toolbar , makeStyles, List, IconButton, Drawer, Divider, ListItem, ListItemIcon} from '@material-ui/core';
import React, { useState } from 'react';
import logo from "../images/myAvatar.png";
import {Link, animateScroll as scroll } from "react-scroll";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import BuildIcon from '@material-ui/icons/Build';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import BalanceIcon from '@mui/icons-material/Balance';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import { useTranslation} from "react-i18next";





const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [t, i18n] = useTranslation('global');
  
  const link = [
    {
      id:   "about",
      title: t("About.name"),
      icon: <PermIdentityIcon fontSize="large"  className={classes.yo}/>
    },
    {
      id:"skill",
      title:t("About.skill"),
      icon: <EmojiObjectsIcon fontSize="large" className={classes.light}/>
    },
  
    {
      id:"mywork",
      title:t("About.work") ,
      icon: <BuildIcon fontSize="large"  className={classes.work}/>
    },
    {
    
      id: "ta" ,
      title: t("About.ta"),
      icon: <AccessibilityNewIcon fontSize="large" className={classes.ta}/>
      

    },
    {
     id: "nivel",
     title: t("About.level") ,
     icon:<BakeryDiningIcon fontSize="large" className={classes.nivel}/>

    },
    {
      id: "fullstack",
      title: t("About.stack"),
      icon: <CloseFullscreenIcon  fontSize='large' className={classes.stack} />
    },
    {
      id: "mobile",
      title: t("About.mobile"),
      icon: <MobileScreenShareIcon fontSize='large' className={classes.mobile} />

    },
    {
      id: "habilidades",
      title: t("About.Habilidades"),
      icon: <BalanceIcon fontSize='large' className={classes.ability} /> 

    },
    {
      id: "experiencia",
      title: t("About.experiencia"),
      icon: <AssuredWorkloadIcon fontSize='large' className={classes.experiencia} />
    },
    {
      id:"contact",
      title: t("About.contactame"),
      icon: <ContactMailIcon  fontSize="large"  className={classes.contacto}/>
    }
  ]
  
  const scrollToTop =  () => {
    scroll.scrollToTop()
  }

  return (
    <>
    <AppBar  position= "sticky" className=  {classes.root}>
    <Toolbar className ={classes.Toolbar}>
        <img  
        src={logo} 
        className={classes.logo} 
        alt="Logo" 
        onClick={scrollToTop}
        />
       <List className ={classes.menu}>
       { 
        link.map(({ id, title }, index) => (
              <Link key={index} 
               to={id} 
               spy={true} 
               activeClass="active"
                smooth={ true }
                 duration={ 500 }
                  offset={-70} >
                  {title}
                  </Link>
            ))
          }
       </List>
       <IconButton   edge="end" 
        className={classes.menubutton}
        onClick={()=>setOpen(!open)}
        >

       <MenuIcon  fontSize="large" />
       </IconButton>
       
    </Toolbar>
    </AppBar>

    <Drawer anchor='right' open={open} onClose={()=>setOpen(false)} >
      <IconButton   onClick={()=>setOpen(false)} className={classes.cancelicon}>
        <CancelIcon  fontSize="large" />
      </IconButton>
     <Divider />
     { 
        link.map(({ id, title, icon }, index) => (
              <Link key={index} 
              className={classes.sidebar}
               to={id} 
               spy={true} 
               activeClass="active"
                smooth={ true }
                 duration={ 500 }
                  offset={-70} >
                  <ListItem component="h5">
                    <span>
                    <ListItemIcon>
                     {icon}
                    </ListItemIcon>
                    </span>{title}
                  </ListItem>
                  </Link>
            ))
          }
    </Drawer>
    </> 
  )
}
const useStyles = makeStyles((theme) => ({
  root:{
    background: "#fff",
    color:"black",
    top:0,
    left:0,
    right:0,
    zIndex:999,
  },
  toolbar:{
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"center"
  },
logo: {
height: "3.5rem",
objectFit:"contain",
"&:hover":{
  cursor:"pointer"
}
},
ability: {
  color: "#CC0099",
},
mobile:{
  color:"#9999FF"
},
contacto:{
  color:"#00ffff"
},
yo:{
  color:"#00ff00"
},
stack:{
  color:"#0066ff"
},
experiencia:{
  color:"#99CCFF"
},
nivel:{
  color:"#006666"
},
ta:{
  color:"tomato"
},

work:{
  color:"#000fff"
},
light:{
  color:"#fff000",
},
menu:{
  [theme.breakpoints.down("sm")]:{
    display:"none",
   

  },
  "& a": {
    color: "#333",
    fontSize: "1.4rem",
    fontWeight: "bold",
    marginLeft: theme.spacing(3)
 

  },
  "& a:hover":{
    cursor:"pointer",
    color: "#296cbc",
    borderBottom: "3px solid #296cbc",
  },
},

menubutton :{
  display: "none",
  [theme.breakpoints.down("sm")] : {
    display:"block",
    color: "tomato",
    position: "absolute",
    top:0,
    right: 10,
  }
},
cancelicon:{
  color:"red",
  position:"absolute",
  top:0,
  right:10,

},
sidebar:{
  width:"40vw",
  [theme.breakpoints.down("sm")]:{
    width:"60vw",
  },
  "& h5":{
    margin: theme.spacing(10,0,0,4),
    fontSize: "1.4rem",
    color: "#333",
    fontWeight:"bold",
  },
  "& h5:hover":{
    color: "tomato",
    cursor:"pointer"
  }
}

}))



export default Navbar