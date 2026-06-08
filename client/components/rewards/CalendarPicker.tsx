import { useState } from 'react';

interface CalendarPickerProps {
  onRangeChange?: (from: string | null, to: string | null) => void;
}

const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

function getMonthDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  return { firstDay, daysInMonth };
}

function formatIso(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export function CalendarPicker({ onRangeChange }: CalendarPickerProps) {
  const now = new Date();
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  const months = [
    { year: now.getFullYear(), month: now.getMonth() },
    { year: now.getFullYear(), month: now.getMonth() + 1 },
    { year: now.getFullYear(), month: now.getMonth() + 2 },
  ].map(({ year, month }) => ({
    year: year + Math.floor(month / 12),
    month: month % 12,
  }));

  const handleDayClick = (iso: string) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(iso);
      setEndDate(null);
      onRangeChange?.(iso, null);
    } else {
      if (iso < startDate) {
        setEndDate(startDate);
        setStartDate(iso);
        onRangeChange?.(iso, startDate);
      } else {
        setEndDate(iso);
        onRangeChange?.(startDate, iso);
      }
    }
  };

  const isInRange = (iso: string) => {
    if (!startDate || !endDate) return false;
    return iso > startDate && iso < endDate;
  };

  const isSelected = (iso: string) => iso === startDate || iso === endDate;

  return (
    <div className="px-4 pb-4">
      {months.map(({ year, month }) => {
        const { firstDay, daysInMonth } = getMonthDays(year, month);
        const cells: (number | null)[] = [...Array(firstDay).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];

        return (
          <div key={`${year}-${month}`} className="mb-6">
            <h3 className="text-gray-900 text-base font-bold mb-3">
              {MONTHS[month]} {year}
            </h3>
            <div className="grid grid-cols-7 gap-0 mb-1">
              {DAYS.map((d, i) => (
                <div key={i} className="text-center text-gray-400 text-xs py-1">{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-0">
              {cells.map((day, i) => {
                if (!day) return <div key={i} />;
                const iso = formatIso(year, month, day);
                const selected = isSelected(iso);
                const inRange = isInRange(iso);
                return (
                  <button
                    key={i}
                    onClick={() => handleDayClick(iso)}
                    className={`aspect-square flex items-center justify-center text-sm transition-colors rounded-full mx-0.5 my-0.5 ${
                      selected
                        ? 'bg-gray-900 text-white font-semibold'
                        : inRange
                        ? 'bg-gray-100 text-gray-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
