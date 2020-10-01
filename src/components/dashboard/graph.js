import React from "react";
import DateDialog from "./dateDialog";
import LineGraph from "../graphs/LineGraph";
import BarGraph from "../graphs/BarGraph";
import PieGraph from "../graphs/PieGraph";
import "./style.css";

export default function Graph() {
  return (
    <section className="cabeçalho">
      <div className="box">
        <header>
          <h3>Situação</h3>
          <div>
            <DateDialog />
          </div>
        </header>
        <div className="chart-wrapper">
          <LineGraph />
        </div>
      </div>
      <div className="box">
        <header>
          <h3>Situação</h3>
          <div>
            <DateDialog />
          </div>
        </header>
        <div className="chart-wrapper">
          <BarGraph />
        </div>
      </div>
      {/* ESPERANDO DADOS DO BD PARA ARRUMAR O GRÁFICO DE PIZZA */}
      <div className="box">
        <header>
          <h3>Situação</h3>
          <div>
            <DateDialog />
          </div>
        </header>
        <div className="chart-wrapper">
          <PieGraph />
        </div>
      </div>
    </section>
  );
}
