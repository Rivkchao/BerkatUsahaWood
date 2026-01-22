tailwind.config = {
    theme: {
        extend: {
            fontFamily: { sans: ['Plus Jakarta Sans', 'sans-serif'] },
            colors: {
                primary: '#6B4226',
                secondary: '#A97142',
                accent: '#D4A373',
                cream: '#FAF7F2',
                dark: '#1A1A1A',
            }
        }
    }
}

document.addEventListener('alpine:init', () => {
    Alpine.data('mainData', () => ({
        // State UI
        openModal: false,
        selectedProduct: {},
        scrolled: false,
        activeFaq: null,
        products: [
            {
                name: 'Meja Makan Jati Scandinavian',
                code: 'MM-JT-SC-01',
                price: 'Mulai 2Jt-an',
                img: 'img/mejascandinavian.jpg',
                desc: 'Material Jati tua dengan finishing natural doff yang menonjolkan serat kayu asli.',
                waktuPengerjaan: '7-10 hari kerja',
                jenisBahan: 'Kayu Jati',
                ukuran: '120x70x75 cm'
            },
            {
                name: 'Kursi Kayu Ergonomis',
                code: 'KU-ERG-01',
                price: 'Rp 850.000',
                img: 'img/kursikayuergonomis.jpg',
                desc: 'Didesain khusus dengan sandaran melengkung untuk kenyamanan kerja jangka panjang.',
                waktuPengerjaan: '5-7 hari kerja',
                jenisBahan: 'Kayu Mahoni',
                ukuran: '50x50x80 cm'
            },
            {
                name: 'Lemari Minimalis 2 Pintu',
                code: 'LM-MN-2P-01',
                price: 'Rp 4.200.000',
                img: 'img/lemariminimalis.jpg',
                desc: 'Penyimpanan luas dengan sistem sliding door yang sangat hemat ruang.',
                waktuPengerjaan: '10-14 hari kerja',
                jenisBahan: 'Kayu Jati',
                ukuran: '120x50x180 cm'
            }
        ]
    }));
});