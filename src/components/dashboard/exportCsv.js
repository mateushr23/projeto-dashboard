import MoreVertIcon from "@material-ui/icons/MoreVert";
import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { IconButton } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import "./style.css";
import { CSVLink } from "react-csv";
import axios from "axios";

const headers = [
  { label: "Dia", key: "day" },
  { label: "Entregue", key: "delivered" },
  { label: "Em Transporte", key: "transport" },
  { label: "Aguardando Envio", key: "waiting" },
  { label: "Aguardando Pagamento", key: "payment" },
];

export default function DateDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
    axios
      .get("http://localhost:8000/data")
      .then((result) => {
        setData(result.data);
      })
      .catch(console.error);
  }, [setData]);
  return (
    <div>
      <IconButton variant="outlined" onClick={handleClickOpen}>
        <MoreVertIcon />
      </IconButton>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" align="center">
          {"Exportar como CSV"}
        </DialogTitle>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            autoFocus
            align="center"
          >
            <CSVLink
              style={{
                margin: "0 50px",
                border: "1px solid blue",
                backgroundColor: "blue",
                color: "white",
                borderRadius: "5px",
                padding: "5px",
              }}
              data={data}
              headers={headers}
              color="primary"
              filename="data.csv"
            >
              Exportar
            </CSVLink>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
