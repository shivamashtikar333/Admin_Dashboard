import React from "react";
import {
  BsCurrencyDollar,
  BsFillGrid3X3GapFill,
  BsBank,
  BsArrowDown,
  BsBasket,
  BsCashCoin,
  BsArrowUp,
  BsChevronDown
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector
} from "recharts";
import Body from "./Body";

function Home() {
  // const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const data1 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
  ];
  const data = [
    {
      name: "Jan",

      amt: 2400
    },
    {
      name: "Feb",

      amt: 1398
    },
    {
      name: "Mar",

      amt: 9800
    },
    {
      name: "Apr",

      amt: 3908
    },
    {
      name: "May",

      amt: 4800
    },
    {
      name: "Jun",

      amt: 3800
    },
    {
      name: "Jul",

      amt: 4300
    },
    {
      name: "Aug",

      amt: 4300
    },
    {
      name: "Sep",

      amt: 4300
    },
    {
      name: "Oct",

      amt: 4300
    },
    {
      name: "Nov",

      amt: 4300
    },
    {
      name: "Dec",

      amt: 4300
    }
  ];

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>EARNING</h3>
            <BsCashCoin className="card_icon" />
          </div>
          <h1>
            {" "}
            <BsCurrencyDollar />
            300K
          </h1>
          <p>
            {" "}
            <BsArrowUp />
            <span>37.8%</span> This month
          </p>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Order</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>2.4K</h1>
          <p>
            {" "}
            <BsArrowDown />
            <span>2%</span> This month
          </p>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Balance</h3>
            <BsBank className="card_icon" />
          </div>
          <h1>2.4K</h1>
          <p>
            {" "}
            <BsArrowDown />
            <span>2%</span> This month
          </p>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Total Sales</h3>
            <BsBasket className="card_icon" />
          </div>
          <h1>
            {" "}
            <BsCurrencyDollar />
            89K
          </h1>
          <p>
            {" "}
            <BsArrowUp />
            <span>11%</span> This month
          </p>
        </div>
      </div>

      <div className="charts">
        <div className="chart1-container">
          <h3>Overview</h3>
          <p>Monthly Earning</p>
          <button>
            Quarterly <BsChevronDown />
          </button>
          <ResponsiveContainer width="100%" height="80%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 15
              }}
            >
              <XAxis dataKey="name" />
              <Tooltip />
              <Bar dataKey="amt" fill="#82ca9d" />} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart2-container">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                data={data1}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={60}
                fill="#8884d8"
              />
              <Pie
                data={data}
                dataKey="amt"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                fill="#82ca9d"
                label
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="Footer">
        <Body />
      </div>
    </main>
  );
}

export default Home;
