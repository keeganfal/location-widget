import './Container.scss';

function Container({text}) {
  return (
    <div className="container">
        <p>{text}</p> 
    </div>
  );
}

export default Container;