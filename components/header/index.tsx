import React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import IconsMaterial from "../../commons/MaterialIcons";
import styles from "./Header.module.css";
import MenuDrawer from "../drawerMenu";
import Button from "@mui/material/Button";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const [drawerOpen, setdrawerOpen] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleOpenDrawrMenu = () => {
    setdrawerOpen(true);
  };
  const handleCloseDrawrMenu = () => {
    setdrawerOpen(false);
  };

  const menuId = "primary-search-account-menu";


  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={1} color="error">
            {IconsMaterial.cart}
          </Badge>
        </IconButton>
        <p>Ver carrito</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          {IconsMaterial.account}
        </IconButton>
        <p>Mi cuenta</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className={styles.header}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={handleOpenDrawrMenu}
            >
              {IconsMaterial.menu}
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "none", md: "block" } }}
            >
              ALEXA
            </Typography>

            <div className={styles.searchContiner}>
              <Search>
                <SearchIconWrapper>{IconsMaterial.search}</SearchIconWrapper>
                <StyledInputBase
                  placeholder="Buscar un producto..."
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </div>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="small"
                aria-label="show 4 new mails"
                color="inherit"
                className={styles.buttonsPadding}
              >
                <Badge badgeContent={1} color="error">
                  Carrito
                  {IconsMaterial.cart}
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                className={styles.buttonsPadding}

              >
                {IconsMaterial.account}
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                {IconsMaterial.more}
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}

        <MenuDrawer
          open={drawerOpen}
          onClose={handleCloseDrawrMenu}
          onOpen={handleOpenDrawrMenu}
        />
      </Box>

      <Box
        sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}
        className={styles.headerListOptions}
      >
        <Button size="small" color="inherit" sx={{ flexGrow: 1 }}>
          Ofertas del dia
        </Button>
        <Button size="small" color="inherit" sx={{ flexGrow: 1 }}>
          Lo mas vendido
        </Button>
        <Button size="small" color="inherit" sx={{ flexGrow: 1 }}>
          Servicio al cliente
        </Button>
      </Box>
    </>
  );
};

export default Header;
