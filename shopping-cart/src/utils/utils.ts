export default function formatCurrency(value: number) {
  return '$' + Number(value.toFixed(2)).toLocaleString();
}