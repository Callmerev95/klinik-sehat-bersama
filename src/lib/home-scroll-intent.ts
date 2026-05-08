/**
 * Menandai niat navigasi ke beranda bagian atas (bukan #lokasi-kami).
 * Dipakai lintas halaman sebelum Next.js menyelesaikan transisi klien.
 */
let pendingScrollHomeTop = false;

export function markPendingHomeTopScroll() {
  pendingScrollHomeTop = true;
}

export function consumePendingHomeTopScroll(): boolean {
  if (!pendingScrollHomeTop) return false;
  pendingScrollHomeTop = false;
  return true;
}
