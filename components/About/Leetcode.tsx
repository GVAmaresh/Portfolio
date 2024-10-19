import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import { LEETCODE_DETAILS } from "@/api/Leetcode_API/fetchAPI";
import { useColor } from "@/app/ColorContext";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ILeetcode {
  totalProblems: number;
  solvedProblems: number;
  totalEasy: number;
  totalMedium: number;
  totalHard: number;
  solvedEasy: number;
  solvedMedium: number;
  solvedHard: number;
}

const Leetcode = () => {
  const { theme } = useColor();
  const [leetcodeData, setLeetcodeData] = useState<ILeetcode | null>(null);
  const [series, setSeries] = useState<number[]>([0, 0, 0]);
  const [options, setOptions] = useState<ApexOptions>({
    chart: {
      height: 390,
      type: "radialBar"
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: "30%",
          background: "transparent",
          image: undefined
        },
        dataLabels: {
          name: { show: false },
          value: { show: false }
        },
        barLabels: {
          enabled: true,
          useSeriesColors: true,
          offsetX: -8,
          fontSize: "16px",
          formatter: function (
            seriesName: string,
            opts: { seriesIndex: number; w: { globals: { series: number[] } } }
          ) {
            return (
              seriesName + ":  " + `${opts.w.globals.series[opts.seriesIndex]}%`
            );
          }
        }
      }
    },
    colors: [theme.easyColor, theme.mediumColor, theme.hardColor],
    labels: ["Easy", "Medium", "Hard"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: { show: false }
        }
      }
    ]
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await LEETCODE_DETAILS();

        const updatedLeetcodeData: ILeetcode = {
          totalProblems: data.totalQuestions,
          solvedProblems: data.totalSolved,
          totalEasy: data.totalEasy,
          totalMedium: data.totalMedium,
          totalHard: data.totalHard,
          solvedEasy: data.easySolved,
          solvedMedium: data.mediumSolved,
          solvedHard: data.hardSolved
        };

        setLeetcodeData(updatedLeetcodeData);

        const easyPercentage = updatedLeetcodeData.totalEasy
          ? Math.round(
              (updatedLeetcodeData.solvedEasy / updatedLeetcodeData.totalEasy) *
                100
            )
          : 0;
        const mediumPercentage = updatedLeetcodeData.totalMedium
          ? Math.round(
              (updatedLeetcodeData.solvedMedium /
                updatedLeetcodeData.totalMedium) *
                100
            )
          : 0;
        const hardPercentage = updatedLeetcodeData.totalHard
          ? Math.round(
              (updatedLeetcodeData.solvedHard / updatedLeetcodeData.totalHard) *
                100
            )
          : 0;

        setSeries([easyPercentage, mediumPercentage, hardPercentage]);
      } catch (error) {
        console.error("Error fetching LeetCode details:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="">
      <div
        className="text-3xl font-bold mt-12 mb-4"
        style={{ color: theme.heading }}
      >
        Leetcode
      </div>
      <div className="" style={{ boxShadow: theme.boxShadow }}>
        <div className="">
        </div>
        <div className="flex flex-col md:flex-row justify-center">
          <div id="chart">
            <ApexCharts
              options={options}
              series={series}
              type="radialBar"
              height={390}
            />
          </div>
          <div className="mt-8 gap-3">
            <div className="mt-2 p-3 bg-slate-500 text-white rounded-lg">
              <span className="text-cyan-400 font-extrabold">Easy:{"  "}</span>
              {leetcodeData ? leetcodeData.solvedEasy : "00"}/
              {leetcodeData ? leetcodeData.totalEasy : "000"}
            </div>
            <div className="mt-2 p-3 bg-slate-500 text-white rounded-lg">
              <span className="text-amber-500 font-extrabold">Medium:{"  "}</span>
              {leetcodeData ? leetcodeData.solvedMedium : "000"}/
              {leetcodeData ? leetcodeData.totalMedium : "000"}
            </div>
            <div className="mt-2 p-3 bg-slate-500 text-white rounded-lg">
              <span className="text-red-700 font-extrabold">Hard:{"  "}</span>
              {leetcodeData ? leetcodeData.solvedHard : "00"}/
              {leetcodeData ? leetcodeData.totalHard : "000"}
            </div>
            <div className="mt-2 p-3 bg-slate-500 text-white rounded-lg">
              <span className="text-green-500 font-extrabold">Total:{"  "}</span>
              {leetcodeData ? leetcodeData.solvedProblems : "00"}/
              {leetcodeData ? leetcodeData.totalProblems : "000"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leetcode;
