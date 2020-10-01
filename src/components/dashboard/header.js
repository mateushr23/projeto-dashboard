import React from "react";
import { IconButton } from "@material-ui/core";
import Export from "./exportCsv";
import "./style.css";
import DateDialog from "./dateDialog";

function Header() {
  return (
    <section className="cabeçalho">
      <div className="box">
        <header>
          <h3>Produtos</h3>
          <div>
            <IconButton>
              <DateDialog />
            </IconButton>
            <IconButton>
              <Export />
            </IconButton>
          </div>
        </header>
        <div>
          <div className="info-box">
            <strong>1000</strong>
            <span>Aguardando Pagamento</span>
          </div>

          <div className="info-box">
            <strong>150</strong>
            <span>Aguardando Envio</span>
          </div>

          <div className="info-box">
            <strong>350</strong>
            <span>Em Transporte</span>
          </div>

          <div className="info-box">
            <strong>2500</strong>
            <span>Entregue</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Header;
