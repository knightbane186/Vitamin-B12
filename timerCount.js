import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

function CountdownTimer() {
  const [countdown, setCountdown] = useState(null);

  // So im trying tio get the actual time here and deduct it with the (now) that is present time
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  const timeUntilMidnight = midnight - now;

  // basically convert
  const hours = Math.floor(timeUntilMidnight / 1000 / 60 / 60);
  const minutes = Math.floor((timeUntilMidnight / 1000 / 60) % 60);
  const seconds = Math.floor((timeUntilMidnight / 1000) % 60);

  // updating counter every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown({ hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [hours, minutes, seconds]);

  // If the countdown is nu display a loading message
  if (countdown === null) {
    return <Text>Loading countdown...</Text>;
  }

  // If the countdown has ended, reset the timer and display a message
  if (hours === 0 && minutes === 0 && seconds === 0) {
    setCountdown(null);
    return <Text>Countdown has ended. Resetting...</Text>;
  }

  // Otherwise, display the countdown
  return (
    <View>
      <Text>
        {countdown.hours.toString().padStart(2, '0')}:
        {countdown.minutes.toString().padStart(2, '0')}:
        {countdown.seconds.toString().padStart(2, '0')}
      </Text>
    </View>
  );
}

export default CountdownTimer;
