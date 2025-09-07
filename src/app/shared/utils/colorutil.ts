export function getRandomBrightPastelColor(): string {
    const r = Math.floor(Math.random() * 106 + 150); // 150–255 → pastel range
    const g = Math.floor(Math.random() * 106 + 150);
    const b = Math.floor(Math.random() * 106 + 150);
    return `rgb(${r}, ${g}, ${b})`;
}