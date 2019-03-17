const debounceEvent = (callback, time) => {
  let interval;
  return (...args) => {
    clearTimeout(interval);
    interval = setTimeout(() => {
      interval = null;
      callback(...args);
    }, time);
  };
};

const adjustVhUnits = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

const handleResize = debounce(adjustVhUnits, 10)
window.addEventListener('resize', handleResize)
adjustVhUnits();
