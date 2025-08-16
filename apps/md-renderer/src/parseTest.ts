// Test code to import and use parseCSV in main.ts
import parseCSV from '../../../packages/src/parseDSL';

// Example CSV content and info string for testing
const csvContent = `Date,Sales\n2021-01-01,100\n2021-01-02,20`;
const infoString = 'title="Test CSV" type="sales"';

const parsed = parseCSV(csvContent, infoString);
console.log('Parsed CSV:', parsed);
