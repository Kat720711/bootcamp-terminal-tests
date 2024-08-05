// mostProfitableDepartment.js
export default function mostProfitableDepartment(departments) {
    // Implement the function logic here
    // For example:
    let maxProfit = 0;
    let bestDepartment = '';
    for (const department of departments) {
        if (department.profit > maxProfit) {
            maxProfit = department.profit;
            bestDepartment = department.name;
        }
    }
    return bestDepartment;
}
