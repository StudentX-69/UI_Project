

const FloatingCard = ({ title, description, value, trend, trendColor, positionClasses }) => {
  const trendClasses =
    trendColor === "red"
      ? "text-red-500 bg-red-50"
      : "text-green-500 bg-green-50";

  return (
     
    <div className={`absolute ${positionClasses} bg-white rounded-2xl p-5 shadow-sm border border-gray-100 min-w-50`}>
       <h1 className="text-sm font-medium mb-1">{title}</h1> 
      <p className="text-xs text-gray-500 mb-1">{description}</p>
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold">{value}</span>
        {/* You can add logic here to show up/down arrows based on the trend prop */}
        <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${trendClasses}`}>
          {trend}
        </span>
      </div>
    </div>
  );
};

export default FloatingCard;
