import React from "react";
import styles from "./footer.module.css";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";

const Footer = () => {
  const handleGoToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      <Divider className={styles.divider} />

      <div className={styles.backToTop}>
        <Button size="large" color="inherit" sx={{ flexGrow: 1 }} fullWidth onClick={handleGoToTop}>
          Inicio de Página
        </Button>
      </div>
      <div className={styles.content}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Conócenos</h3>
            <a href="#">Sobre nosotros</a>
            <a href="#">Nuestra historia</a>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Podemos Ayudarte</h3>
            <a href="#">Ayuda</a>
            <a href="#">Políticas</a>
            <a href="#">Devoluciones</a>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Contactanos</h3>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">WhatsApp</a>
          </div>
        </div>
        <Divider className={styles.divider} />

        <div className={styles.copy}>
          &copy; 2022, Alexa Venta de Ropa Americana o sus afiliados
        </div>
      </div>
    </footer>
  );
};

export default Footer;
