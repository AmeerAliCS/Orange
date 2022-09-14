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
import { display, Stack } from "@mui/system";
//import Image from "next/image";
const logoPath = "/Logo.svg";

const drawerWidth = 240;
// const logoPath = "/Logo.svg";

const navItems = [
  { id: 0, title: "من نحن", url: "/about" },
  { id: 1, title: "مشاريعنا", url: "/projects" },
  { id: 2, title: "خدماتنا", url: "/#service" },
];
function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link href="/">
        <Box
          sx={{
            height: 60,
            width: 150,
            maxHeight: { xs: 70, md: 60 },
            maxWidth: { xs: 150, md: 145 },
            ml: { xs: 5 },
          }}
        >
          <img src={logoPath} layout="responsive" alt="Orange" />
        </Box>
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link href={item.url}>
                <ListItemText primary={item.title} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Link href="/contact">
        <Typography variant="h6" sx={{ my: 2 }}>
          تواصل معنا
        </Typography>
      </Link>
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
          color: "gray",
          boxShadow: 1,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            sx={{
              mr: 10,
              ml: 10,
            }}
            width={1}
          >
            <Link href="/contact">
              <Button
                sx={{ color: "black", display: { xs: "none", sm: "block" } }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", sm: "block" },

                    fontSize: "1rem",
                  }}
                >
                  تواصل معنا
                </Typography>
              </Button>
            </Link>
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                color: "black",
              }}
            >
              {navItems.map((item) => (
                <Link key={item.id} href={item.url}>
                  <Button
                    sx={{
                      color: "black",
                      mr: 2,
                      ml: 2,
                      xs: "none",
                      md: "block",
                      fontSize: "1rem",
                    }}
                  >
                    {item.title}
                  </Button>
                </Link>
              ))}
            </Box>
            <Link href="/">
              <Button
                sx={{
                  color: "transparent",
                  "&:hover": {
                    background: "none",
                  },
                }}
              >
                <Box
                  component="img"
                  src={logoPath}
                  alt="Orange"
                  sx={{
                    height: { md: 90, xs: 1 },
                    width: { md: 145, xs: 110 },
                    maxHeight: { xs: 60, md: 60 },
                    maxWidth: { xs: 200, md: 145 },
                    display: { xs: "block" },
                    alignItems: { xs: "center" },
                  }}
                />
                {/* <img src={logoPath} layout="responsive" alt="Orange" /> */}
              </Button>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box component="nav">
        <Drawer
          container={container}
          anchor="left"
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
