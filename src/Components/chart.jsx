import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const Example = ({ data }) => {
  const processedData = data.map(item => {
    let count = item.count;

    if (typeof count === 'string') {
      if (count.toUpperCase().includes('M')) {
        count = parseFloat(count) * 1_000_000;
      } else if (count.toUpperCase().includes('K')) {
        count = parseFloat(count) * 1_000;
      } else {
        count = parseFloat(count);
      }
    }

    return { ...item, count };
  });

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={processedData}
          margin={{ top: 20, right: 30, left: 60, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis dataKey="name" type="category" />
          <XAxis type="number" />
          <Tooltip
            formatter={(value) => {
              if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
              if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
              return value;
            }}
          />
          <Bar dataKey="count" fill="#8884d8" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Example;
