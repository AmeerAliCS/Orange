import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

const drawerWidth = 240;
const navItems = [{id:0,title:"من نحن",url:"/about"}, {id:1,title:"مشاريعنا",url:"/about"},{id:2,title: "خدماتنا",url:"/about"}];
function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        component="img"
        sx={{
          height: 60,
          width: 145,
          maxHeight: { xs: 70, md: 60 },
          maxWidth: { xs: 150, md: 145 },
        }}
        alt="Logo"
        src="orange.svg"
      />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Typography variant="h6" sx={{ my: 2 }}>
        تواصل معنا
      </Typography>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        component="nav"
        sx={{
          justifyContent: "space-between",
          bgcolor: "background.paper",
          color: "black",
          boxShadow: 3,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            تواصل معنا
          </Typography>
          <Box
            sx={{
              mr: "30%",

              display: { xs: "none", sm: "block" },
              color: "black",
            }}
          >
            {navItems.map((item) => (
              <Link key={item.id} href={item.url}>
              <Button
                sx={{
                  color: "black",
                  fontSize: 17,
                  mr: 2,
                  ml: 2,
                  xs: "none",
                  md: "block",
                }}
              >
                {item.title}
              </Button>
              </Link>
            ))}
          </Box>
          <Box
            component="img"
            sx={{
              height: { md: 90, xs: 40 },
              width: { md: 145, xs: 1 },
              maxHeight: { xs: 50, md: 60 },
              maxWidth: { xs: 1, md: 145 },
              display: { xs: "flex" },
              alignItems: { xs: "center" },
            }}
            alt="Logo"
            src="orange.svg"
          />
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
