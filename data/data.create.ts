export interface SystemData {
  cpuUsage: number;
}

// Simulating normal system behavior (CPU usage)
export const generateNormalData = (): SystemData[] => {
  return Array.from({ length: 100 }, (_, i) => ({
    cpuUsage: Math.random() * 10 + 30,  // 30% to 40% CPU usage
  }));
};

// Simulating anomalies (sudden spike in CPU usage)
export const generateAnomalousData = (): SystemData[] => {
  return Array.from({ length: 10 }, (_, i) => ({
    cpuUsage: Math.random() * 50 + 100,  // 100% to 150% CPU usage
  }));
};

// Combine normal and anomalous data
export const generateData = (): SystemData[] => {
  const normalData = generateNormalData();
  const anomalousData = generateAnomalousData();
  return [...normalData, ...anomalousData];
};
