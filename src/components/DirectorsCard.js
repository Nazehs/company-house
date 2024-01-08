const DirectorsCard = ({ director }) => {
  return (
    <div className="row">
      <div>Name: {director.name}</div>
      <p>Role: {director.officer_role}</p>
    </div>
  );
};

export default DirectorsCard;
