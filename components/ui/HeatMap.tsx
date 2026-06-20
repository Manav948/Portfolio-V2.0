"use client";

import React, { useEffect, useState } from "react";
import { Info } from "lucide-react";
import axios from "axios";

interface ContributionDay {
    date: string;
    count: number;
    level: number;
}

interface GitHubData {
    total: Record<string, number>;
    contributions: ContributionDay[];
}

export const HeatMap: React.FC = () => {
    const [data, setData] = useState<GitHubData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await axios.get("/api/github");
                setData(res.data);
            } catch (err: any) {
                console.error("Error fetching GitHub contributions:", err);
                setError(err.message || "Failed to load contributions");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <HeatMapSkeleton />;
    }

    if (error || !data) {
        return (
            <div className="w-full py-8 text-center border border-dashed border-neutral-200 dark:border-neutral-800 rounded-2xl">
                <Info className="mx-auto h-8 w-8 text-neutral-400 dark:text-neutral-500 mb-2" />
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">Could not load GitHub contributions</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Please try reloading or check again later.</p>
            </div>
        );
    }

    // 1. Sort data oldest to newest
    const chronological = [...data.contributions].sort((a, b) => a.date.localeCompare(b.date));

    // Get the Saturday of the current week
    const today = new Date();
    const dayOfWeek = today.getDay();
    const daysToSaturday = 6 - dayOfWeek;
    const saturday = new Date(today.getTime() + daysToSaturday * 24 * 60 * 60 * 1000);

    // Format Saturday string locally to prevent timezone offset shifts
    const satYear = saturday.getFullYear();
    const satMonth = String(saturday.getMonth() + 1).padStart(2, "0");
    const satDate = String(saturday.getDate()).padStart(2, "0");
    const saturdayStr = `${satYear}-${satMonth}-${satDate}`;

    // Find the index of this Saturday in the  data
    let satIndex = chronological.findIndex((c) => c.date === saturdayStr);
    if (satIndex === -1) {
        // Fallback to the latest available date in the dataset if Saturday is not found
        satIndex = chronological.length - 1;
    }

    // Slice exactly 371 days (53 weeks * 7 days) ending on this Saturday
    const startIdx = satIndex - 370;
    const displayDays = chronological.slice(startIdx >= 0 ? startIdx : 0, satIndex + 1);

    // Group display days into 53 weeks (columns) of 7 days each
    const weeks: ContributionDay[][] = [];
    for (let i = 0; i < 53; i++) {
        const week = displayDays.slice(i * 7, (i + 1) * 7);
        if (week.length === 7) {
            weeks.push(week);
        }
    }

    // Sum actual counts in displayDays to get the total contributions for the display
    const totalContributions = displayDays.reduce((sum, d) => sum + d.count, 0);


    const monthLabelsMap = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const getMonthLabelForWeek = (week: ContributionDay[], weekIndex: number) => {
        if (week.length === 0) return null;
        const date = new Date(week[0].date + "T00:00:00");
        const monthName = monthLabelsMap[date.getMonth()];

        if (weekIndex === 0) {
            return monthName;
        }

        const prevWeek = weeks[weekIndex - 1];
        if (prevWeek && prevWeek.length > 0) {
            const prevDate = new Date(prevWeek[0].date + "T00:00:00");
            const prevMonthName = monthLabelsMap[prevDate.getMonth()];
            if (monthName !== prevMonthName) {
                return monthName;
            }
        }

        return null;
    };


    const getColorClass = (level: number) => {
        switch (level) {
            case 0:
                return "bg-[#f4f4f5] dark:bg-[#161b22] border border-neutral-200/20 dark:border-neutral-800/40 hover:border-neutral-300 dark:hover:border-neutral-700";
            case 1:
                return "bg-[#ffedd5] dark:bg-[#431407]/50 hover:scale-110";
            case 2:
                return "bg-[#fed7aa] dark:bg-[#7c2d12]/70 hover:scale-110";
            case 3:
                return "bg-[#fb923c] dark:bg-[#c2410c]/90 hover:scale-110";
            case 4:
                return "bg-[#e18845] dark:bg-[#fec195] hover:scale-110";
            default:
                return "bg-[#f4f4f5] dark:bg-[#161b22]";
        }
    };

    const formatDate = (dateStr: string) => {
        const d = new Date(dateStr + "T00:00:00");
        return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    };

    return (
        <div className="w-full flex flex-col gap-4 select-none transition-all duration-300 mt-2 heatmap-container">
            <style>{`
                .heatmap-container {
                    --square-size: 10px;
                    --square-gap: 3px;
                }
                @media (max-width: 768px) {
                    .heatmap-container {
                        --square-size: 8px;
                        --square-gap: 2px;
                    }
                }
                @media (max-width: 600px) {
                    .heatmap-container {
                        --square-size: 6px;
                        --square-gap: 1.5px;
                    }
                }
                @media (max-width: 450px) {
                    .heatmap-container {
                        --square-size: 5px;
                        --square-gap: 1px;
                    }
                }
            `}</style>


            <div className="w-full overflow-hidden flex justify-center pb-2">
                <div className="flex flex-col gap-1.5">

                    <div style={{ gap: "var(--square-gap)" }} className="flex text-[10px] text-neutral-400 dark:text-neutral-500 font-semibold h-4">
                        <div className="w-5 pr-1.5" />
                        {weeks.map((week, weekIndex) => {
                            const label = getMonthLabelForWeek(week, weekIndex);
                            return (
                                <div key={weekIndex} style={{ width: "var(--square-size)" }} className="relative">
                                    {label && (
                                        <span className="absolute left-0 bottom-0 whitespace-nowrap text-[9px] font-bold text-neutral-400 dark:text-neutral-500">
                                            {label}
                                        </span>
                                    )}
                                </div>
                            );
                        })}
                    </div>


                    <div style={{ gap: "var(--square-gap)" }} className="flex">

                        <div style={{ gap: "var(--square-gap)" }} className="flex flex-col text-[9px] font-bold text-neutral-400 dark:text-neutral-500 w-5 pr-1.5 select-none text-right">
                            <div style={{ height: "var(--square-size)" }} className="flex items-center justify-end"></div>
                            <div style={{ height: "var(--square-size)" }} className="flex items-center justify-end">Mon</div>
                            <div style={{ height: "var(--square-size)" }} className="flex items-center justify-end"></div>
                            <div style={{ height: "var(--square-size)" }} className="flex items-center justify-end">Wed</div>
                            <div style={{ height: "var(--square-size)" }} className="flex items-center justify-end"></div>
                            <div style={{ height: "var(--square-size)" }} className="flex items-center justify-end">Fri</div>
                            <div style={{ height: "var(--square-size)" }} className="flex items-center justify-end"></div>
                        </div>


                        <div style={{ gap: "var(--square-gap)" }} className="flex">
                            {weeks.map((week, weekIndex) => (
                                <div key={weekIndex} style={{ gap: "var(--square-gap)" }} className="flex flex-col">
                                    {week.map((day) => (
                                        <div
                                            key={day.date}
                                            onMouseEnter={() => setHoveredDay(day)}
                                            onMouseLeave={() => setHoveredDay(null)}
                                            style={{ width: "var(--square-size)", height: "var(--square-size)" }}
                                            className={`rounded-[2px] ${getColorClass(day.level)} transition-all duration-150 hover:scale-125 hover:z-10 cursor-pointer`}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>


            <div className="flex flex-wrap items-center justify-between text-xs border-t border-neutral-100 dark:border-neutral-850/60 pt-3 gap-3">
                <div className="text-neutral-500 dark:text-neutral-400 font-semibold min-h-[16px]">
                    {hoveredDay ? (
                        <span className="text-neutral-700 dark:text-neutral-300">
                            {hoveredDay.count} contribution{hoveredDay.count === 1 ? "" : "s"} on {formatDate(hoveredDay.date)}
                        </span>
                    ) : (
                        <span>
                            {totalContributions.toLocaleString()} contributions in the last year
                        </span>
                    )}
                </div>


                <div className="flex items-center gap-1 text-[10px] text-neutral-400 dark:text-neutral-500 font-bold">
                    <span>Less</span>
                    <div style={{ width: "var(--square-size)", height: "var(--square-size)" }} className="rounded-[2px] bg-[#f4f4f5] dark:bg-[#161b22] border border-neutral-250/20 dark:border-neutral-800/40" />
                    <div style={{ width: "var(--square-size)", height: "var(--square-size)" }} className="rounded-[2px] bg-[#ffedd5] dark:bg-[#431407]/50" />
                    <div style={{ width: "var(--square-size)", height: "var(--square-size)" }} className="rounded-[2px] bg-[#fed7aa] dark:bg-[#7c2d12]/70" />
                    <div style={{ width: "var(--square-size)", height: "var(--square-size)" }} className="rounded-[2px] bg-[#fb923c] dark:bg-[#c2410c]/90" />
                    <div style={{ width: "var(--square-size)", height: "var(--square-size)" }} className="rounded-[2px] bg-[#e18845] dark:bg-[#fec195]" />
                    <span>More</span>
                </div>
            </div>

        </div>
    );
};

// loader
const HeatMapSkeleton: React.FC = () => {
    return (
        <div className="w-full flex flex-col gap-4 animate-pulse mt-4">
            <div className="flex flex-col gap-1.5 w-full">
                <div className="h-4 w-52 bg-neutral-200 dark:bg-neutral-800 rounded mb-1" />
                <div className="flex gap-[3px] h-[88px] w-full overflow-hidden">
                    <div className="w-5" />
                    <div className="flex gap-[3px]">
                        {Array.from({ length: 45 }).map((_, colIdx) => (
                            <div key={colIdx} className="flex flex-col gap-[3px]">
                                {Array.from({ length: 7 }).map((_, rowIdx) => (
                                    <div
                                        key={rowIdx}
                                        className="w-[10px] h-[10px] rounded-[2px] bg-neutral-200 dark:bg-neutral-800/50"
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between border-t border-neutral-100 dark:border-neutral-850/60 pt-3">
                <div className="h-4 w-48 bg-neutral-200 dark:bg-neutral-850 rounded" />
                <div className="h-4 w-24 bg-neutral-200 dark:bg-neutral-850 rounded" />
            </div>
        </div>
    );
};

export default HeatMap;