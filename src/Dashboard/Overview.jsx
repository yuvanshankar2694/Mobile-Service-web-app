import React from 'react'
import SideNav from './SideNav'
import ReactApexChart from 'react-apexcharts'
const Overview = () => {
   const chartData = {
     options: {
       chart: {
         type: 'line',
         zoom: {
           enabled: false,
         },
       },
       stroke: { 
         curve: 'smooth',
       },
       xaxis: {
         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
       },
       fill: {
         type: 'gradient',
         gradient: {
           shade: 'dark',
           type: 'vertical',
           shadeIntensity: 0.5,
           gradientToColors: ['#FDD835'],
           inverseColors: false,
           opacityFrom: 1,
           opacityTo: 0.8,
           stops: [0, 100],
         },
       },
     },
     series: [
       {
         name: 'RepairDone',
         data: [30, 40, 45, 50, 49],
       },
     ],
   }
  
   const piechartData = {
     options: {
       chart: {
         type: 'donut',
       },
       labels: ['Category A', 'Category B', 'Category C'],
     },
     series: [44, 55, 13],
   }

   const BarChart = {
     options: {
       chart: {
         type: 'bar',
         toolbar: {
           show: false,
         },
       },
       xaxis: {
         categories: ['Category A', 'Category B', 'Category C'],
       },
     },
     series: [
       {
         name: 'Data',
         data: [44, 55, 13],
       },
     ],
   }
  return (
    <>
      <div className="d-flex">
        <div className="col-auto">
          <SideNav />
        </div>
        <div className="container pt-5 mx-5 ">
          <h2 className="text-center pb-5">Overview content</h2>
          <div className="row text-left">
            <div className="col">
              <div className="card rounded">
                <div className="card-body">
                  <h4 className="text-center">300</h4>
                  <div className="d-flex align-items-center">
                    <p className="px-3 my-3 text-center">Mobile Repair Done</p>
                    <i class="bi bi-tools fs-4 text-success"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card ">
                <div className="card-body">
                  <h4 className="text-center">1200</h4>
                  <div className="d-flex align-items-center">
                    <p className="mx-3 my-3 text-center">Total customers</p>
                    <i class="bi bi-people fs-4 text-success"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h4 className="text-center">150</h4>
                  <div className="d-flex align-items-center">
                    <p className="mx-3 my-3 text-center">Repair in Process</p>
                    <i class="bi bi-clock-history fs-4 text-success"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h4 className="text-center"><span className='text-success'>$</span>200</h4>
                  <div className="d-flex align-items-center">
                    <p className="mx-3 my-3 text-center">Total Profit</p>
                    <i class="bi bi-wallet2 fs-4 text-success"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <h3 className="text-center">Chart Analysis</h3>
          <div className="row text-center pt-1">
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="text-center">Mobile Repair Done</h4>
                  <div className="chart">
                    <ReactApexChart
                      options={chartData.options}
                      series={chartData.series}
                      type="line"
                      height={220}
                    />
                    <div className="d-flex">
                      <p className="mx-1 ">Total Mobile Repair Done </p>
                      <p>Today : 28</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="text-center">Total Revenue</h4>
                  <div className="chart">
                    <ReactApexChart
                      options={piechartData.options}
                      series={piechartData.series}
                      type="donut"
                      height={400}
                    />
                    <div className="d-flex">
                      <p className="mx-3 text-success">Apple</p>
                      <p className="mx-3 text-warning">Samsung</p>
                      <p className="mx-3 text-primary">OnePlus</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 text-center">
              <div className="card">
                <div className="card-body">
                  <h4 className="text-center">Repair in Process</h4>
                  <div className="chart">
                    <ReactApexChart
                      options={BarChart.options}
                      series={BarChart.series}
                      type="bar"
                      height={220}
                    />
                    <div className="d-flex text-center">
                      <p className="mx-3 text-success">Apple</p>
                      <p className="mx-3 text-warning">Samsung</p>
                      <p className="mx-3 text-primary">OnePlus</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Overview
