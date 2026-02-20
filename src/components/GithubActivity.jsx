"use client";

// import ActivityCalendar from "react-activity-calendar";
import dynamic from "next/dynamic";
const ActivityCalendar = dynamic(
  () => import("react-activity-calendar").then((mod) => mod.ActivityCalendar),
  {
    ssr: false,
    loading: () => <p>Loading heatmap...</p>,
  },
);
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function GithubActivity() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setMounted(true);
    // Fetch data from public API
    fetch(
      "https://github-contributions-api.jogruber.de/v4/azzamfarrasruslani?y=last",
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.contributions) {
          // Flatten the contributions object (year -> days) into an array of days if needed,
          // but react-activity-calendar v2+ usually takes simpler data.
          // Let's check the API response format.
          // The API returns { contributions: [ { date, count, level } ... ] } for 'year=last'
          setData(res.contributions);
        }
      })
      .catch((err) => console.error("Error fetching GitHub data:", err));
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  // Custom theme colors for the calendar
  const themeColors = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 w-full">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        <span className="text-lime-500">📊</span> GitHub Contributions
      </h3>

      <div className="w-full overflow-x-auto flex justify-center">
        {data.length > 0 ? (
          <ActivityCalendar
            data={data}
            colorScheme={currentTheme === "dark" ? "dark" : "light"}
            blockSize={12}
            blockMargin={4}
            fontSize={14}
            theme={themeColors}
            labels={{
              legend: {
                less: "Less",
                more: "More",
              },
              totalCount: "{{count}} contributions in the last year",
            }}
          />
        ) : (
          <p className="text-gray-500 dark:text-gray-400">
            Loading contributions...
          </p>
        )}
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
        Code never sleeps! Check out my latest commits on{" "}
        <a
          href="https://github.com/azzamfarrasruslani"
          target="_blank"
          className="text-lime-600 dark:text-lime-400 font-semibold hover:underline"
        >
          GitHub
        </a>
        .
      </p>
    </div>
  );
}
