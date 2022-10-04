import { useEffect, useState } from 'react';

function Countdown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date('10/31/2022 23:59:59');

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="coming-soon text-white">
      <div>
        <div className="countdown space-x-6 mt-4">
          <div className="container-day ">
            <h3 className="day text-xl font-bold nm:text-xl rounded-3xl border-2 px-5 py-5 bg-edei-200">{days}</h3>
            <h3 className="text-base mt-2">Días</h3>
          </div>
          <div className="container-hour ">
            <h3 className="hour text-xl font-bold nm:text-xl rounded-3xl border-2 px-5 py-5 bg-edei-200">{hours}</h3>
            <h3 className="text-base mt-2">Horas</h3>
          </div>
          <div className="container-minute">
            <h3 className="minute text-xl font-bold nm:text-xl rounded-3xl border-2 px-3 py-5 bg-edei-200">{minutes}</h3>
            <h3 className="text-base mt-2">Minutos</h3>
          </div>
          <div className="container-second">
            <div className="second text-xl font-bold  nm:text-xl rounded-3xl border-2 py-5 bg-edei-200">
              <h3 className="second ">{seconds}</h3>
            </div>
            <h3 className="text-[0.93rem] mt-2">Segundos</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
