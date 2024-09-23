"use client";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import useGetAllStats from "@/hooks/guestHook/useGetAllStats";

const options: ApexOptions = {
  chart: {
    width: 380,
    type: "pie",
  },
  labels: [
    "Total Campaigns Created",
    "Total Organisations",
    "Total Students",
    "Total Mentors",
    "Total Campaign Attended",
    "Total NFTs Minted",
  ],
  colors: ["#064e3b", "#725D1D", "#f59e0b", "#557ab5", "#e4732c", "#374151"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 340,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
  legend: {
    position: "bottom",
  },
};

const Piechart = () => {
  const initialData = {
    series: [42, 47, 52, 58, 65, 72],
  };

  const [data, setData] = useState(initialData);

  const { statsData, isLoading } = useGetAllStats();

  useEffect(() => {
    if (!isLoading) {
      setData({
        series: [
          statsData?.totalCampaignsCreated,
          statsData?.totalOrganisations,
          statsData?.totalStudents,
          statsData?.totalMentors,
          statsData?.totalCampaignsAttended,
          statsData?.totalNFTsMinted,
        ],
      });
    }
  }, [
    statsData?.totalCampaignsCreated,
    statsData?.totalOrganisations,
    statsData?.totalStudents,
    statsData?.totalMentors,
    statsData?.totalCampaignsAttended,
    statsData?.totalNFTsMinted,
    isLoading,
  ]);

  return (
    <div className="w-full">
      <ReactApexChart
        options={options}
        series={data.series}
        type="pie"
        height={380}
      />
    </div>
  );
};

export default Piechart;
