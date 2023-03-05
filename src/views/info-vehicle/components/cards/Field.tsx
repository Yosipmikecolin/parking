import "./Card.css";

export const Field = ({ title, value }: Props) => {
  return (
    <>
      <div className="row-card">
        <h5> {title} </h5>
        <h5 className="title-5"> {value} </h5>
      </div>
    </>
  );
};

interface Props {
  title?: string;
  value?: string;
}
