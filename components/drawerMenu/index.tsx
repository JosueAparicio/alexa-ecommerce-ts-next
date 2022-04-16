import React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconsMaterial from "../../commons/MaterialIcons";
import styles from "./drawerMenu.module.css";
import { IconButton, Typography } from "@mui/material";

interface Props {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const MenuDrawer: React.FC<Props> = ({ open, onClose, onOpen }) => {
  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
    >
      <Box sx={{ flexGrow: 1 }} className={styles.header}>
        <IconButton size="large" color="inherit">
          {IconsMaterial.account}
        </IconButton>
        <Typography variant="h6" component="div">
          Hola, identificate
        </Typography>
      </Box>
      <Box sx={{ width: 300}} role="presentation" className={styles.body}>
        <Typography
          variant="subtitle1"
          component="div"
          className={styles.padding}
        >
          General
        </Typography>
        <List>
          {["Carrito", "Lo mas vendido", "Ofertas del dia", "Descuentos"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon className={styles.icons}>
                  {index % 2 === 0 ? IconsMaterial.inbox : IconsMaterial.mail}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
        <Divider className={styles.bold} />
        <Typography
          variant="subtitle1"
          component="div"
          className={styles.padding}
        >
          Buscar por categorias
        </Typography>
        <List>
          {["Ropa para caballero", "Ropa para dama", "Ropa para ninos"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon className={styles.icons}> 
                  {index % 2 === 0 ? IconsMaterial.inbox : IconsMaterial.mail}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
        <Divider className={styles.bold} />
        <Typography
          variant="subtitle1"
          component="div"
          className={styles.padding}
        >
          Ayuda
        </Typography>
        <List>
          {["Mi cuenta", "Servicio al cliente", "Acerca de"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon className={styles.icons}>
                  {index % 2 === 0 ? IconsMaterial.inbox : IconsMaterial.mail}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
      </Box>
    </SwipeableDrawer>
  );
};

MenuDrawer.defaultProps = {
  open: false,
  onClose: () => {},
  onOpen: () => {},
};

export default MenuDrawer;
