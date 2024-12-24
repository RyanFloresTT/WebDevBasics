export default function WeatherCard(props) {
  var pubDate = new Date(props.time * 1000).toDateString();
  return (
    <div className="weather-card">
      <h1>{pubDate.slice(4, 10)}</h1>
      <h3>{props.temperature}&deg;</h3>
    </div>
  );
}
