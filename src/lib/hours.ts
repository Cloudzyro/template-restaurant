import type { Day } from "../data/site";

/** "17:00" becomes "5pm", "10:30" becomes "10:30am". */
export function formatTime(t: string): string {
  const [h, m] = t.split(":").map(Number);
  const suffix = h >= 12 ? "pm" : "am";
  const hr = h % 12 || 12;
  return m ? `${hr}:${String(m).padStart(2, "0")}${suffix}` : `${hr}${suffix}`;
}

export function describeDay(d: Day): string {
  if (d.closed || d.services.length === 0) return "Closed";
  return d.services.map((s) => `${formatTime(s.open)} to ${formatTime(s.close)}`).join(", ");
}

const toMin = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};

/** A short sentence about today's hours, for the visitor's current moment. */
export function todayStatus(hours: Day[], timeZone: string, now = new Date()): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const dayIndex = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  const minutes = Number(get("hour")) * 60 + Number(get("minute"));
  const today = hours.find((d) => d.day === dayIndex);

  if (today && !today.closed) {
    for (const s of today.services) {
      if (minutes >= toMin(s.open) && minutes < toMin(s.close)) {
        return `Open now for ${s.label.toLowerCase()} until ${formatTime(s.close)}`;
      }
      if (minutes < toMin(s.open)) {
        return `Opens today at ${formatTime(s.open)} for ${s.label.toLowerCase()}`;
      }
    }
  }
  for (let i = 1; i <= 7; i++) {
    const next = hours.find((d) => d.day === (dayIndex + i) % 7);
    if (next && !next.closed && next.services.length) {
      const when = i === 1 ? "tomorrow" : next.name;
      const lead = today && !today.closed ? "Closed for the night" : "Closed today";
      return `${lead}. Opens ${when} at ${formatTime(next.services[0].open)}`;
    }
  }
  return "See our hours below";
}
