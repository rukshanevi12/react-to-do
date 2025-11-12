interface Props {
  totalTodos: number;
}

const Footer = ({ totalTodos }: Props) => {
  return (
    <div className="bg-info p-4 row">
      <div className="col-6">
        <h1 className="text-dark text-center">Total To DOs : {totalTodos}</h1>
      </div>
      <div className="col-6">
        <h1 className="text-dark text-center">Completed To DOs : 1</h1>
      </div>
    </div>
  );
};

export default Footer;
