(() => {
  performance.setResourceTimingBufferSize(20000);
  const found = new Set();
  const scan = () => performance.getEntriesByType('resource')
    .map(e => e.name)
    .filter(n => /\.(m3u8|ts)(\?|$)/i.test(n))
    .forEach(n => found.add(n));

  scan();
  new PerformanceObserver(scan).observe({ type: 'resource', buffered: true });

  window.__dump = () => {
    scan();
    const a = [...found];
    console.table(a);
    copy(a.join('\n'));
    return a;
  };
  window.__dump();
})();
