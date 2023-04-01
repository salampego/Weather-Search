export const FormSearch = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="WeatherInput" />
      <button type="submit">Submit</button>
    </form>
  );
};
