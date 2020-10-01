import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie, PieChart, ResponsiveContainer, Legend, Tooltip } from "recharts";

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
      width={730}
      height={250}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <PieChart>
        <Legend iconType="square" verticalAlign="top" align="right" />
        <Pie
          data={data}
          dataKey="delivered"
          isAnimationActive={false}
          fill="green"
          label
        />
        {/* <Pie
                data={data}
                dataKey="transport"
                isAnimationActive={false}
                cx={200}
                cy={200}
                outerRadius={80}
                fill="red"
                label
              />
              <Pie
                data={data}
                dataKey="transport"
                isAnimationActive={false}
                cx={200}
                cy={200}
                outerRadius={80}
                fill="blue"
                label
              />
              <Pie
                data={data}
                dataKey="waiting"
                isAnimationActive={false}
                cx={200}
                cy={200}
                outerRadius={80}
                fill="orange"
                label
              /> */}
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
