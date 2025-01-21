import { useState, useEffect } from 'react';
import moment from 'moment';

function useCountdownTimer(targetDate: string) {
    const [timeLeft, setTimeLeft] = useState<{ days: number, hours: number, minutes: number, seconds: number } | string>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const endDate = moment(targetDate);
        if (!endDate.isValid()) {
            throw new Error('Invalid date format');
        }

        const interval = setInterval(() => {
            const now = moment();
            const duration = moment.duration(endDate.diff(now));

            if (duration.asMilliseconds() <= 0) {
                clearInterval(interval);
                setTimeLeft('Countdown finished');
                return;
            }

            const days = Math.floor(duration.asDays());
            const hours = Math.floor(duration.asHours() % 24);
            const minutes = duration.minutes();
            const seconds = duration.seconds();

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return timeLeft;
}

export default useCountdownTimer;
