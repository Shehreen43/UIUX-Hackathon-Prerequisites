const CountdownTimer = () => {
  const timeUnits = [
    { label: 'Days', value: '03' },
    { label: 'Hours', value: '23' },
    { label: 'Minutes', value: '19' },
    { label: 'Seconds', value: '56' },
  ];

  return (
    <div className="flex items-center gap-4">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex items-center">
          <div className="text-center">
            <p className="font-poppins text-[12px] leading-[18px] text-text2">{unit.label}</p>
            <div className="font-bold font-poppins tracking-[4%] text-text2">{unit.value}</div>
          </div>
          {index < timeUnits.length - 1 && (
            <span className="text-secondary2 font-bold text-xl mx-2">:</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
