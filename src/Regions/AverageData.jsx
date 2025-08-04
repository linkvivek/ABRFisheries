const AverageData = ({ label, amount, total, unit = "" }) => {

  const average = (amount/total).toFixed(2);

  return (
    <div className='avg-info'>
      <h3>{label}</h3>
      <span>{`${average} ${unit}`}</span>
    </div>
  );
};

export default AverageData;