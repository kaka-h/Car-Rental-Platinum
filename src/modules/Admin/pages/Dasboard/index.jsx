import MainLayout from "../../layouts/MainLayout"
import MENU_LISTS from "../../constants/menuLists"
import axios from "axios";
import './style.scss'
import { Breadcrumb } from "../../components/Breadcrumb";
import { useEffect, useState, React } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import TableData from "./tableData/table";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


function Dashboard() {
  const [chartData, setChartData] = useState([])
  const [date, setDate] = useState({
    from: "",
    until: ""
  })

  useEffect(() => {
    getData()
  }, [])

  const getData = async (params = { from: "2023-06-01", until: "2023-06-30" }) => {
    try {
      const token = localStorage.getItem("token")
      const response = await axios.get("https://api-car-rental.binaracademy.org/admin/order/reports",
        {
          params,
          headers: {
            access_token: `${token}`
          }
        })
      setChartData(response)
      return response.data
    } catch (error) {
      alert('Terjadi kesalahan pada server')
    }
  }

  const option = [
    { label: "January-2023" },
    { label: "February-2023" },
    { label: "March-2023" },
    { label: "April-2023" },
    { label: "May-2023" },
    { label: "June-2023" },
    { label: "July-2023" },
    { label: "August-2023" },
    { label: "September-2023" },
    { label: "October-2023" },
    { label: "November-2023" },
    { label: "Desember-2023" },
  ]

  const handleOnChange = (event) => {
    const { value } = event.target;
    let from, until;
    switch (value) {
      case "January-2023":
        from = "2023-01-01"
        until = "2023-01-31"
        break;
      case "February-2023":
        from = "2023-02-01"
        until = "2023-02-28"
        break;
      case "March-2023":
        from = "2023-03-01"
        until = "2023-03-31"
        break;
      case "April-2023":
        from = "2023-04-01"
        until = "2023-04-30"
        break;
      case "May-2023":
        from = "2023-05-01"
        until = "2023-05-31"
        break;
      case "June-2023":
        from = "2023-06-01"
        until = "2023-06-30"
        break;
      case "July-2023":
        from = "2023-07-01"
        until = "2023-07-31"
        break;
      case "August-2023":
        from = "2023-08-01"
        until = "2023-08-31"
        break;
      case "September-2023":
        from = "2023-09-01"
        until = "2023-09-30"
        break;
      case "October-2023":
        from = "2023-10-01"
        until = "2023-10-31"
        break;
      case "November-2023":
        from = "2023-11-01"
        until = "2023-11-30"
        break;
      case "Desember-2023":
        from = "2023-12-01"
        until = "2023-12-31"
        break;
      default:
        from = "2023-08-01"
        until = "2023-08-31"
        break;
    }
    setDate({
      ...date,
      from,
      until
    })
  }

  const handleClickDate = async (params) => {
    await getData(params = { from: date.from, until: date.until })
  }
  return (
    <MainLayout menu={MENU_LISTS[0]}>
      <Breadcrumb currentLink="Dashboard" previousLink="Dashboard" />

      <section className="dashboard">
        <h3 className="sub-title">Rented Car Visualization</h3>

        <div className="input">
          <p>Month</p>
          <select onChange={handleOnChange}>
            <option value="">Select Month</option>
            {option.map((item, index) => (
              <option key={index} value={item.label}>{item.label}</option>
            )
            )}
          </select>
          <button onClick={handleClickDate}>Go</button>
        </div>

        <Bar options={{
          indexAxis: "x",
          responsive: true,
          aspectRatio: 3, // Atur aspectRatio sesuai kebutuhan Anda
          scales: {
            y: {
              title: {
                display: true,
                text: "Amount of Car Rented",
                font: {
                  family: "Arial",
                  style: "normal",
                  weight: 400,
                  size: 12,
                },
              },
            },
            x: {
              title: {
                display: true,
                text: "Date",
                font: {
                  family: "Arial",
                  style: "normal",
                  weight: 400,
                  size: 12,
                },
              },
              type: "category",
              ticks: {
                stepSize: 1,
                callback: function(value, index, values) {
                  if (
                    index <= 10 ||
                    index === values.length - 1 ||
                    index % 2 === 0
                  ) {
                    return value;
                  }
                  return "";
                },
              },
            },
          },
          plugins: {
            legend: {
              display: false, // Menyembunyikan legenda
            },
          },
        }}
          data={{
            labels: chartData?.data?.map((data) => data.day),
            datasets: [
              {
                data: chartData?.data?.map((data) => data.orderCount),
                backgroundColor: "#586B90",
              },
            ],
          }} />

        <div className="table">
          <h2>Dashboard</h2>
          <h3 className="sub-title">List Order</h3>
          <TableData />
        </div>
      </section>


    </MainLayout>
  )

}


export default Dashboard
