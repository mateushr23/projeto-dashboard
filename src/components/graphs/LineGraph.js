import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

export default function LineGraph() {
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
      <LineChart data={data}>
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
        <Line
          dot={false}
          type="monotone"
          name="Entregue"
          dataKey="delivered"
          stroke="green"
          strokeWidth={2}
          activeDot={{ r: 6 }}
        />
        <Line
          dot={false}
          type="monotone"
          name="Aguardando Pagamento"
          dataKey="payment"
          stroke="red"
          strokeWidth={2}
          activeDot={{ r: 6 }}
        />
        <Line
          dot={false}
          type="monotone"
          name="Em Transporte"
          dataKey="transport"
          stroke="blue"
          strokeWidth={2}
          activeDot={{ r: 6 }}
        />
        <Line
          dot={false}
          type="monotone"
          name="Aguardando Envio"
          dataKey="waiting"
          stroke="orange"
          strokeWidth={2}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
