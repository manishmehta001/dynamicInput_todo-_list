const MyWorld = ({ Children }) => {
  return <div>{Children}</div>;
};

const World = () => {
  return (
    <MyWorld>
      <h1>Hello world !</h1>
      <p>This is my world</p>
    </MyWorld>
  );
};

export default World;
