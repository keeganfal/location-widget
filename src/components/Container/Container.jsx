import './Container.scss';

const Container = ({text}) => {

  return (
    <div className="container">
        <p>{text}</p> 
    </div>
  );
};

export default Container;