export function getMean(data:any[],property:string): { [alcohol: string]: number }{
    
    const alcoholStats: { [alcohol: string]: { sum: number, count: number } } = {};

    // Iterate over the data array
    for (let i = 0; i < data.length; i++) {
        const alcoholValue = data[i].Alcohol.toString(); // Convert Alcohol value to string

        // Initialize sum and count for the current Alcohol value if not already present
        if (!alcoholStats[alcoholValue]) {
            alcoholStats[alcoholValue] = { sum: 0, count: 0 };
        }

        // Add property value to the sum and increment count for the current Alcohol value
        alcoholStats[alcoholValue].sum += parseFloat(data[i][property]);
        alcoholStats[alcoholValue].count++;
    }

    // Calculate the mean for each value of "Alcohol" and store it in a result object
    const result: { [alcohol: string]: number } = {};
    for (const alcoholValue in alcoholStats) {
        if (alcoholStats.hasOwnProperty(alcoholValue)) {
            result[alcoholValue] = alcoholStats[alcoholValue].sum / alcoholStats[alcoholValue].count;
        }
    }
    return result;
}