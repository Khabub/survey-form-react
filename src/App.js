import classes from "./App.module.scss";
import Form from "./components/Form";

const App = () => {
  return (
    <div className={classes.container}>
      <h1>freeCodeCamp Survey Form</h1>
      <p>Thank you for taking the time to help us improve the platform</p>
      <Form />
    </div>
  );
};

export default App;
