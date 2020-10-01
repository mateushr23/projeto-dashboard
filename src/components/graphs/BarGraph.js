import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

export default function BarGraph() {
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
    <ResponsiveContainer
      width="100%"
      height={400}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend
          iconType="square"
          verticalAlign="top"
          height={36}
          align="right"
        />
        <Bar name="Entregue" dataKey="delivered" fill="green" />
        <Bar name="Aguardando Pagamento" dataKey="payment" fill="red" />
        <Bar name="Em Transporte" dataKey="transport" fill="blue" />
        <Bar name="Aguardando Envio" dataKey="waiting" fill="orange" />
      </BarChart>
    </ResponsiveContainer>
  );
}
