export function chunkArray<T>(array: T[], chunkSize: number = 6): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

export function getResponsiveChunkSize(width: number): number {
  if (width >= 1400) {
    // xxl
    return 6;
  } else if (width >= 1200) {
    // xl
    return 4;
  } else if (width >= 768) {
    // md
    return 2;
  }
  // sm & xs
  return 1;
}
