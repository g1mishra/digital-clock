import { useEffect, useState } from "react";
import "./styles.css";

const getMinuteAndSeconds = (counter) => {
  let hour = `0${Math.floor(counter / 3600)}`.slice(-2) || "00";
  counter = counter % 3600;
  let minute = `0${Math.floor(counter / 60)}`.slice(-2) || "00";
  let sec = `0${counter % 60}`.slice(-2);
  return `${hour} : ${minute} : ${sec}`;
};

export default function App() {
  let d = new Date();
  let cur_Sec = d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
  const [counter, setCounter] = useState(cur_Sec);

  // setTimeout, setInterval

  // useEffect(() => {
  //   let timer = setTimeout(() => {
  //     setCounter((prev) => prev + 1);
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, [counter]);

  useEffect(() => {
    let timer = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // setInterval(()=> {setCounter(prev => prev + 1)}, 1000)
  // setTimeout(()=> {setCounter(prev => prev + 1)}, 1000)

  return (
    <div className="App">
      <p> {getMinuteAndSeconds(counter)} </p>
    </div>
  );
}
