export default function MetricCard({ value, label, suffix = '' }) {
  return (
    <div className="text-center p-6 bg-white border border-gray-200 rounded-sm">
      <div className="text-4xl md:text-5xl font-bold text-navy-primary mb-2">
        {value}
        {suffix && <span className="text-gold-primary">{suffix}</span>}
      </div>
      <div className="text-sm text-gray-600 font-medium">{label}</div>
    </div>
  );
}
