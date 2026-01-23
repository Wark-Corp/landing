// Madrid School Calendar 2025-2026 (Approximate/Placeholder)
// Term ends: June 19, 2026
// Hours: 08:15 - 14:30

const SCHOOL_END_DATE = new Date('2026-06-19T14:30:00');
const SCHOOL_START_HOUR = 8;
const SCHOOL_START_MINUTE = 15;
const SCHOOL_END_HOUR = 14;
const SCHOOL_END_MINUTE = 30;

// 0 = Sunday, 1 = Monday, ..., 6 = Saturday
const WEEKEND = [0, 6];

// Format: YYYY-MM-DD
const HOLIDAYS = [
    '2026-01-01', // New Year
    '2026-01-06', // Epiphany
    '2026-03-19', // San José (Example)
    '2026-03-30', // Holy Week - Monday
    '2026-03-31', // Holy Week - Tuesday
    '2026-04-01', // Holy Week - Wednesday
    '2026-04-02', // Maundy Thursday
    '2026-04-03', // Good Friday
    '2026-05-01', // Labor Day
    '2026-05-02', // Madrid Community Day
    // Add more holidays here
];

export const isSchoolDay = (date: Date): boolean => {
    const dayOfWeek = date.getDay();
    if (WEEKEND.includes(dayOfWeek)) return false;

    const dateString = date.toISOString().split('T')[0];
    if (HOLIDAYS.includes(dateString)) return false;

    return true;
};

export const getRemainingSchoolTime = () => {
    const now = new Date();

    // If we are past the end date
    if (now >= SCHOOL_END_DATE) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            totalSchoolHours: 0,
            totalSchoolMinutes: 0,
            totalSchoolSeconds: 0,
            remainingMs: 0,
            isComplete: true
        };
    }

    // 2. Check if TODAY is a school day and we are currently during/before school hours
    if (isSchoolDay(now)) {
        const todayStart = new Date(now);
        todayStart.setHours(SCHOOL_START_HOUR, SCHOOL_START_MINUTE, 0, 0);

        const todayEnd = new Date(now);
        todayEnd.setHours(SCHOOL_END_HOUR, SCHOOL_END_MINUTE, 0, 0);

        // This block was just checking conditions, the actual calculation happens below in 'Re-calculating cleanly'
        // We can keep it if we need logic here, but for now the lint complained about unused vars.
        // The logic is fully handled in the 'totalSchoolMs' calculation loop below.
    }

    // Calculate Total School Hours
    // Full days * (Hours per day)
    const msPerSchoolDay = (SCHOOL_END_HOUR * 60 + SCHOOL_END_MINUTE - (SCHOOL_START_HOUR * 60 + SCHOOL_START_MINUTE)) * 60 * 1000;

    // Correction: If we counted today in schoolDays, we should handle it carefully.
    // Let's refine:
    // "Días restantes": Simple count of school dates from Now to End.
    // If now is 10:00 on school day, and school ends 14:30. Today is a day.

    // Re-calculating cleanly
    let totalSchoolDays = 0;
    // Scan day by day
    // If today is school day and we haven't passed 14:30, count it?

    // Let's stick to the user Request: "número grande... días restantes"
    // And "contador de las horas de colegio que quedan"

    // Total School Duration in MS
    let totalSchoolMs = 0;

    const iterDate = new Date(now);

    // Handle Today specifically
    if (isSchoolDay(iterDate)) {
        const todayStart = new Date(iterDate);
        todayStart.setHours(SCHOOL_START_HOUR, SCHOOL_START_MINUTE, 0, 0);
        const todayEnd = new Date(iterDate);
        todayEnd.setHours(SCHOOL_END_HOUR, SCHOOL_END_MINUTE, 0, 0);

        if (iterDate < todayStart) {
            totalSchoolMs += (todayEnd.getTime() - todayStart.getTime());
        } else if (iterDate < todayEnd) {
            totalSchoolMs += (todayEnd.getTime() - iterDate.getTime());
        }
    }

    // Move to tomorrow start
    iterDate.setDate(iterDate.getDate() + 1);
    iterDate.setHours(0, 0, 0, 0);

    // Count future days
    const hardEnd = new Date(SCHOOL_END_DATE);
    hardEnd.setHours(0, 0, 0, 0); // Just compare dates

    while (iterDate <= hardEnd) {
        if (isSchoolDay(iterDate)) {
            // If it's the LAST day (June 19), does it end at 14:30? Yes.
            // Is regular day length same as last day? Assuming yes based on prompt.
            totalSchoolMs += msPerSchoolDay;
            totalSchoolDays++;
        }
        iterDate.setDate(iterDate.getDate() + 1);
    }

    // Adjust Total Days to include today if applicable for the BIG DISPLAY
    // Use a simple metric for the big number: "School Days" (dates) containing valid school hours.
    let displayDays = totalSchoolDays;
    if (isSchoolDay(now)) {
        const todayEnd = new Date(now);
        todayEnd.setHours(SCHOOL_END_HOUR, SCHOOL_END_MINUTE, 0, 0);
        if (now < todayEnd) {
            displayDays++;
        }
    }

    return {
        days: displayDays,
        totalSchoolHours: Math.floor(totalSchoolMs / (1000 * 60 * 60)),
        totalSchoolMinutes: Math.floor((totalSchoolMs / (1000 * 60)) % 60),
        totalSchoolSeconds: Math.floor((totalSchoolMs / 1000) % 60),
        remainingMs: totalSchoolMs,
        isComplete: false
    };
};

const SCHOOL_START_DATE = new Date('2025-09-08T08:15:00');

// Calculate ONLY ONCE the total milliseconds of the entire school year for percentage
const calculateTotalYearMs = () => {
    let totalMs = 0;
    const msPerSchoolDay = (SCHOOL_END_HOUR * 60 + SCHOOL_END_MINUTE - (SCHOOL_START_HOUR * 60 + SCHOOL_START_MINUTE)) * 60 * 1000;

    // Iterate from Start to End
    const iter = new Date(SCHOOL_START_DATE);
    const end = new Date(SCHOOL_END_DATE);

    while (iter <= end) {
        if (isSchoolDay(iter)) {
            totalMs += msPerSchoolDay;
        }
        iter.setDate(iter.getDate() + 1);
    }
    return totalMs;
};

const TOTAL_YEAR_MS = calculateTotalYearMs();

export const getSchoolYearProgress = (remainingMs: number) => {
    if (remainingMs <= 0) return 100;
    if (remainingMs >= TOTAL_YEAR_MS) return 0;
    const elapsed = TOTAL_YEAR_MS - remainingMs;
    return (elapsed / TOTAL_YEAR_MS) * 100;
};

// --- SUBJECT SCHEDULE LOGIC ---

type Subject = 'Lengua' | 'Ed. Física' | 'Digitalización' | 'Tecnología' | 'Inglés' | 'Matemáticas' | 'Historia' | 'Física y Química' | 'Religión' | 'Cultura Clásica' | 'Tutoría' | string;

interface TimeSlot {
    start: [number, number]; // [Hour, Minute]
    end: [number, number];
    subject: Subject;
}

// 0: Mon, 1: Tue, ... 4: Fri
// Based on provided image
const SCHEDULE: Record<number, TimeSlot[]> = {
    1: [ // Mondy
        { start: [8, 15], end: [9, 15], subject: 'Lengua' },
        { start: [9, 15], end: [10, 15], subject: 'Ed. Física' },
        { start: [10, 15], end: [11, 15], subject: 'Digitalización' },
        { start: [11, 15], end: [11, 45], subject: 'Recreo' },
        { start: [11, 45], end: [12, 40], subject: 'Tecnología' },
        { start: [12, 40], end: [13, 35], subject: 'Inglés' },
        { start: [13, 35], end: [14, 30], subject: 'Matemáticas' },
    ],
    2: [ // Tuesday
        { start: [8, 15], end: [9, 15], subject: 'Historia' },
        { start: [9, 15], end: [10, 15], subject: 'Inglés' },
        { start: [10, 15], end: [11, 15], subject: 'Física y Química' },
        { start: [11, 15], end: [11, 45], subject: 'Recreo' },
        { start: [11, 45], end: [12, 40], subject: 'Lengua' },
        { start: [12, 40], end: [13, 35], subject: 'Matemáticas' },
        { start: [13, 35], end: [14, 30], subject: 'Digitalización' },
    ],
    3: [ // Wednesday
        { start: [8, 15], end: [9, 15], subject: 'Historia' },
        { start: [9, 15], end: [10, 15], subject: 'Religión' },
        { start: [10, 15], end: [11, 15], subject: 'Tecnología' },
        { start: [11, 15], end: [11, 45], subject: 'Recreo' },
        { start: [11, 45], end: [12, 40], subject: 'Matemáticas' },
        { start: [12, 40], end: [13, 35], subject: 'Física y Química' },
        { start: [13, 35], end: [14, 30], subject: 'Lengua' },
    ],
    4: [ // Thursday
        { start: [8, 15], end: [9, 15], subject: 'Cultura Clásica' },
        { start: [9, 15], end: [10, 15], subject: 'Ed. Física' },
        { start: [10, 15], end: [11, 15], subject: 'Tutoría' },
        { start: [11, 15], end: [11, 45], subject: 'Recreo' },
        { start: [11, 45], end: [12, 40], subject: 'Religión' },
        { start: [12, 40], end: [13, 35], subject: 'Lengua' },
        { start: [13, 35], end: [14, 30], subject: 'Digitalización' },
    ],
    5: [ // Friday
        { start: [8, 15], end: [9, 15], subject: 'Cultura Clásica' },
        { start: [9, 15], end: [10, 15], subject: 'Historia' },
        { start: [10, 15], end: [11, 15], subject: 'Matemáticas' },
        { start: [11, 15], end: [11, 45], subject: 'Recreo' },
        { start: [11, 45], end: [12, 40], subject: 'Física y Química' },
        { start: [12, 40], end: [13, 35], subject: 'Tecnología' },
        { start: [13, 35], end: [14, 30], subject: 'Inglés' },
    ],
};

const getMinutes = (start: [number, number], end: [number, number]): number => {
    return (end[0] * 60 + end[1]) - (start[0] * 60 + start[1]);
};

// Calculate total minutes per subject for the WHOLE YEAR
const TOTAL_SUBJECT_MINUTES: Record<string, number> = {};

const calculateTotalSubjectMinutes = () => {
    const iter = new Date(SCHOOL_START_DATE);
    const end = new Date(SCHOOL_END_DATE);

    while (iter <= end) {
        if (isSchoolDay(iter)) {
            const dayOfWeek = iter.getDay(); // 1=Mon, 5=Fri
            if (SCHEDULE[dayOfWeek]) {
                SCHEDULE[dayOfWeek].forEach(slot => {
                    const duration = getMinutes(slot.start, slot.end);
                    TOTAL_SUBJECT_MINUTES[slot.subject] = (TOTAL_SUBJECT_MINUTES[slot.subject] || 0) + duration;
                });
            }
        }
        iter.setDate(iter.getDate() + 1);
    }
};

calculateTotalSubjectMinutes();

export const getSubjectStats = () => {
    const now = new Date();
    // Start count from tomorrow, adding today's remaining part if applicable is complex.
    // For simplicity and performance, we'll iterate from "now" until end.

    // Optimization: Calculate "Remaining Minutes"
    const remainingMinutes: Record<string, number> = {};

    // Initialize
    Object.keys(TOTAL_SUBJECT_MINUTES).forEach(s => remainingMinutes[s] = 0);

    if (now >= SCHOOL_END_DATE) {
        // All 0
        return Object.keys(TOTAL_SUBJECT_MINUTES).map(subject => ({
            subject,
            remainingHours: 0,
            progress: 100
        }));
    }

    const iter = new Date(now);
    const end = new Date(SCHOOL_END_DATE);

    // Handle Today specially?
    // If today is school day, check slots that haven't passed
    if (isSchoolDay(iter)) {
        const dayOfWeek = iter.getDay();
        const currentTotalMinutes = iter.getHours() * 60 + iter.getMinutes();

        if (SCHEDULE[dayOfWeek]) {
            SCHEDULE[dayOfWeek].forEach(slot => {
                const slotEndMinutes = slot.end[0] * 60 + slot.end[1];
                const slotStartMinutes = slot.start[0] * 60 + slot.start[1];

                if (currentTotalMinutes < slotStartMinutes) {
                    // Full slot remaining
                    remainingMinutes[slot.subject] = (remainingMinutes[slot.subject] || 0) + (slotEndMinutes - slotStartMinutes);
                } else if (currentTotalMinutes < slotEndMinutes) {
                    // Partial slot remaining
                    remainingMinutes[slot.subject] = (remainingMinutes[slot.subject] || 0) + (slotEndMinutes - currentTotalMinutes);
                }
            });
        }
    }

    // Start full days from tomorrow
    iter.setDate(iter.getDate() + 1);
    iter.setHours(0, 0, 0, 0);

    while (iter <= end) {
        if (isSchoolDay(iter)) {
            const dayOfWeek = iter.getDay();
            if (SCHEDULE[dayOfWeek]) {
                SCHEDULE[dayOfWeek].forEach(slot => {
                    remainingMinutes[slot.subject] = (remainingMinutes[slot.subject] || 0) + getMinutes(slot.start, slot.end);
                });
            }
        }
        iter.setDate(iter.getDate() + 1);
    }

    // Format output
    return Object.keys(TOTAL_SUBJECT_MINUTES).map(subject => {
        const total = TOTAL_SUBJECT_MINUTES[subject];
        const remaining = remainingMinutes[subject] || 0;
        const progress = total > 0 ? ((total - remaining) / total) * 100 : 100;

        return {
            subject,
            remainingHours: Math.ceil(remaining / 60), // Show hours
            progress
        };
    }).sort((a, b) => a.subject.localeCompare(b.subject));
};
