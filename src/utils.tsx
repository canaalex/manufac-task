export function getStats(data: any[], property: string): { [alcohol: string]: { mean: number, mode: number, median: number } } {
    // Object to store the sums and counts for each value of "Alcohol"
    const alcoholStats: { [alcohol: string]: { sum: number, count: number, values: number[] } } = {};

   
    for (let i = 0; i < data.length; i++) {
        const alcoholValue = data[i].Alcohol.toString(); 

        // Initialize sum, count, and values array for the current Alcohol value if not already present
        if (!alcoholStats[alcoholValue]) {
            alcoholStats[alcoholValue] = { sum: 0, count: 0, values: [] };
        }

      
        const value = parseFloat(data[i][property]);
        alcoholStats[alcoholValue].sum += value;
        alcoholStats[alcoholValue].count++;
        alcoholStats[alcoholValue].values.push(value);
    }

    // Calculate the mean, mode, and median for each value of "Alcohol" and store them in a result object
    const result: { [alcohol: string]: { mean: number, mode: number, median: number } } = {};
    for (const alcoholValue in alcoholStats) {
        if (alcoholStats.hasOwnProperty(alcoholValue)) {
            const stats = alcoholStats[alcoholValue];
            const mean = stats.sum / stats.count;
            const mode = getMode(stats.values);
            const median = getMedian(stats.values);
            result[alcoholValue] = { mean, mode, median };
        }
    }

    return result;
}

// Function to calculate mode of an array
function getMode(values: number[]): number {
    const counts: { [value: number]: number } = {};
    let maxCount = 0;
    let mode = NaN;

    for (const value of values) {
        counts[value] = (counts[value] || 0) + 1;
        if (counts[value] > maxCount) {
            maxCount = counts[value];
            mode = value;
        }
    }

    return mode;
}

// Function to calculate median of an array
function getMedian(values: number[]): number {
    const sortedValues = values.slice().sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedValues.length / 2);
    if (sortedValues.length % 2 === 0) {
        return (sortedValues[middleIndex - 1] + sortedValues[middleIndex]) / 2;
    } else {
        return sortedValues[middleIndex];
    }
}

export function getGammaStats(data: any[]): { [alcohol: string]: { mean: number, mode: number, median: number } } {
    // Object to store the sums and counts for each value of "Alcohol"
    const alcoholStats: { [alcohol: string]: { sum: number, count: number, values: number[] } } = {};

    // Calculate gamma value for each data point and group by alcohol value
    for (let i = 0; i < data.length; i++) {
        const alcoholValue = data[i].Alcohol.toString();
        const gamma = (data[i].Hue * data[i].Ash) / data[i].Magnesium;

        // Initialize sum, count, and values array for the current Alcohol value if not already present
        if (!alcoholStats[alcoholValue]) {
            alcoholStats[alcoholValue] = { sum: 0, count: 0, values: [] };
        }

        alcoholStats[alcoholValue].sum += gamma;
        alcoholStats[alcoholValue].count++;
        alcoholStats[alcoholValue].values.push(gamma);
    }

    // Calculate the mean, mode, and median for each value of "Alcohol" based on gamma values
    const result: { [alcohol: string]: { mean: number, mode: number, median: number } } = {};
    for (const alcoholValue in alcoholStats) {
        if (alcoholStats.hasOwnProperty(alcoholValue)) {
            const stats = alcoholStats[alcoholValue];
            const mean = stats.sum / stats.count;
            const mode = getMode(stats.values);
            const median = getMedian(stats.values);
            result[alcoholValue] = { mean, mode, median };
        }
    }

    return result;
}
