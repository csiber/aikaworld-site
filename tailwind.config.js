/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
    safelist: ['bg-accentA', 'bg-accentB', 'bg-accentC', 'bg-accentD', 'bg-accentE', 'bg-accentF'],
    theme: {
        extend: {
            colors: {
                bg: '#0B0F17',
                ink: '#E6EDF7',
                accentA: '#FF6A3D', // Akari (tűz)
                accentB: '#4DB3FF', // Komi (víz)
                accentC: '#8FF7C8', // Yui (szél)
                accentD: '#A78BFA', // Hina (penge)
                accentE: '#FFD166', // Miyu (heal)
                accentF: '#6C63FF'  // AIKA (void)
            }
        }
    },
    plugins: []
};
