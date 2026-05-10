export default function WaterBackground({ theme }) {
  const isLight = theme === 'light';

  return (
    <div className={`fixed inset-0 -z-10 water-bg ${isLight ? 'water-bg-light' : ''}`} aria-hidden="true">
      <div className="water-sheen" />
    </div>
  );
}
