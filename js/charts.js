/**
 * Canvas-based chart rendering (no external dependencies)
 */
const Charts = (() => {
  const COLORS = {
    primary: '#6366f1',
    secondary: '#8b5cf6',
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444',
    info: '#06b6d4',
    grid: 'rgba(255,255,255,0.06)',
    text: '#94a3b8'
  };

  /** Draw a bar chart */
  function barChart(canvas, labels, data, options = {}) {
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    ctx.scale(dpr, dpr);

    const W = rect.width;
    const H = rect.height;
    const padding = { top: 20, right: 20, bottom: 40, left: 50 };
    const chartW = W - padding.left - padding.right;
    const chartH = H - padding.top - padding.bottom;

    ctx.clearRect(0, 0, W, H);

    const maxVal = Math.max(...data, 1);
    const barWidth = chartW / data.length * 0.6;
    const gap = chartW / data.length;

    // Grid lines
    ctx.strokeStyle = COLORS.grid;
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = padding.top + (chartH / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(W - padding.right, y);
      ctx.stroke();

      ctx.fillStyle = COLORS.text;
      ctx.font = '11px Inter, sans-serif';
      ctx.textAlign = 'right';
      const val = Math.round(maxVal - (maxVal / 4) * i);
      ctx.fillText(val, padding.left - 8, y + 4);
    }

    // Bars
    data.forEach((val, i) => {
      const barH = (val / maxVal) * chartH;
      const x = padding.left + gap * i + (gap - barWidth) / 2;
      const y = padding.top + chartH - barH;

      const gradient = ctx.createLinearGradient(x, y, x, y + barH);
      gradient.addColorStop(0, COLORS.primary);
      gradient.addColorStop(1, COLORS.secondary);

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.roundRect(x, y, barWidth, barH, [4, 4, 0, 0]);
      ctx.fill();

      // Label
      ctx.fillStyle = COLORS.text;
      ctx.font = '10px Inter, sans-serif';
      ctx.textAlign = 'center';
      const label = labels[i] || '';
      ctx.fillText(label, x + barWidth / 2, H - padding.bottom + 16);
    });
  }

  /** Draw a line chart */
  function lineChart(canvas, labels, data, options = {}) {
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    ctx.scale(dpr, dpr);

    const W = rect.width;
    const H = rect.height;
    const padding = { top: 20, right: 20, bottom: 40, left: 50 };
    const chartW = W - padding.left - padding.right;
    const chartH = H - padding.top - padding.bottom;

    ctx.clearRect(0, 0, W, H);

    const maxVal = Math.max(...data, 1);
    const points = data.map((val, i) => ({
      x: padding.left + (chartW / (data.length - 1 || 1)) * i,
      y: padding.top + chartH - (val / maxVal) * chartH
    }));

    // Grid
    ctx.strokeStyle = COLORS.grid;
    for (let i = 0; i <= 4; i++) {
      const y = padding.top + (chartH / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(W - padding.right, y);
      ctx.stroke();
    }

    // Area fill
    if (points.length > 1) {
      const gradient = ctx.createLinearGradient(0, padding.top, 0, padding.top + chartH);
      gradient.addColorStop(0, 'rgba(99, 102, 241, 0.3)');
      gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(points[0].x, padding.top + chartH);
      points.forEach(p => ctx.lineTo(p.x, p.y));
      ctx.lineTo(points[points.length - 1].x, padding.top + chartH);
      ctx.closePath();
      ctx.fill();
    }

    // Line
    ctx.strokeStyle = COLORS.primary;
    ctx.lineWidth = 2.5;
    ctx.lineJoin = 'round';
    ctx.beginPath();
    points.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
    ctx.stroke();

    // Dots
    points.forEach(p => {
      ctx.fillStyle = COLORS.primary;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fill();
    });

    // Labels
    ctx.fillStyle = COLORS.text;
    ctx.font = '10px Inter, sans-serif';
    ctx.textAlign = 'center';
    labels.forEach((label, i) => {
      if (points[i]) {
        ctx.fillText(label, points[i].x, H - padding.bottom + 16);
      }
    });
  }

  /** Draw a doughnut chart */
  function doughnutChart(canvas, labels, data) {
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    ctx.scale(dpr, dpr);

    const W = rect.width;
    const H = rect.height;
    ctx.clearRect(0, 0, W, H);

    const total = data.reduce((a, b) => a + b, 0) || 1;
    const cx = W / 2;
    const cy = H / 2 - 10;
    const radius = Math.min(W, H) / 2 - 40;
    const innerRadius = radius * 0.6;

    const palette = [COLORS.primary, COLORS.secondary, COLORS.success, COLORS.warning, COLORS.info, COLORS.danger];
    let startAngle = -Math.PI / 2;

    data.forEach((val, i) => {
      const sliceAngle = (val / total) * Math.PI * 2;
      ctx.fillStyle = palette[i % palette.length];
      ctx.beginPath();
      ctx.arc(cx, cy, radius, startAngle, startAngle + sliceAngle);
      ctx.arc(cx, cy, innerRadius, startAngle + sliceAngle, startAngle, true);
      ctx.closePath();
      ctx.fill();
      startAngle += sliceAngle;
    });

    // Center text
    ctx.fillStyle = '#f1f5f9';
    ctx.font = 'bold 24px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${Math.round((data[0] / total) * 100)}%`, cx, cy + 4);

    ctx.font = '11px Inter, sans-serif';
    ctx.fillStyle = COLORS.text;
    ctx.fillText('Complete', cx, cy + 20);

    // Legend
    let legendY = H - 20;
    labels.forEach((label, i) => {
      ctx.fillStyle = palette[i % palette.length];
      ctx.fillRect(20 + i * 100, legendY, 10, 10);
      ctx.fillStyle = COLORS.text;
      ctx.font = '10px Inter, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(label, 34 + i * 100, legendY + 9);
    });
  }

  /** Draw horizontal bar chart for topic rankings */
  function horizontalBarChart(canvas, labels, data) {
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    ctx.scale(dpr, dpr);

    const W = rect.width;
    const H = rect.height;
    ctx.clearRect(0, 0, W, H);

    const maxVal = Math.max(...data, 1);
    const barHeight = Math.min(24, (H - 20) / data.length - 8);
    const padding = { left: 120, right: 30, top: 10 };

    data.forEach((val, i) => {
      const y = padding.top + i * (barHeight + 8);
      const barW = ((W - padding.left - padding.right) * val) / maxVal;

      ctx.fillStyle = COLORS.text;
      ctx.font = '11px Inter, sans-serif';
      ctx.textAlign = 'right';
      const label = labels[i].length > 16 ? labels[i].substring(0, 14) + '…' : labels[i];
      ctx.fillText(label, padding.left - 8, y + barHeight / 2 + 4);

      const gradient = ctx.createLinearGradient(padding.left, 0, padding.left + barW, 0);
      gradient.addColorStop(0, COLORS.primary);
      gradient.addColorStop(1, COLORS.secondary);

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.roundRect(padding.left, y, barW, barHeight, 4);
      ctx.fill();
    });
  }

  /** Get last N weeks of XP data */
  function getWeeklyXPData(weeks = 8) {
    const state = Storage.getState();
    const labels = [];
    const data = [];

    for (let i = weeks - 1; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i * 7);
      const key = Storage.getWeekKey(d);
      labels.push(`W${weeks - i}`);
      data.push(state.weeklyProgress[key] || 0);
    }
    return { labels, data };
  }

  /** Get last N months of XP data */
  function getMonthlyXPData(months = 6) {
    const state = Storage.getState();
    const labels = [];
    const data = [];

    for (let i = months - 1; i >= 0; i--) {
      const d = new Date();
      d.setMonth(d.getMonth() - i);
      const key = Storage.getMonthKey(d);
      labels.push(d.toLocaleString('default', { month: 'short' }));
      data.push(state.monthlyProgress[key] || 0);
    }
    return { labels, data };
  }

  /** Get daily study minutes for last 7 days */
  function getDailyStudyData() {
    const state = Storage.getState();
    const labels = [];
    const data = [];

    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = Storage.getDateKey(d);
      labels.push(d.toLocaleString('default', { weekday: 'short' }));
      data.push(Math.round((state.dailyStudyMinutes[key] || 0) / 60 * 10) / 10);
    }
    return { labels, data };
  }

  return {
    barChart,
    lineChart,
    doughnutChart,
    horizontalBarChart,
    getWeeklyXPData,
    getMonthlyXPData,
    getDailyStudyData
  };
})();
