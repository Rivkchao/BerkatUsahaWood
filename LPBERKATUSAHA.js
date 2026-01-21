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
        activeFaq: 0,
        products: [
            {
                name: 'Meja Makan Jati Scandinavian',
                code: 'MM-JT-SC-01',
                price: 'Mulai 2Jt-an',
                img: 'img/mejascandinavian.jpg',
                desc: 'Material Jati tua dengan finishing natural doff yang menonjolkan serat kayu asli.'
            },
            {
                name: 'Kursi Kayu Ergonomis',
                code: 'KU-ERG-01',
                price: 'Rp 850.000',
                img: 'img/kursikayuergonomis.jpg',
                desc: 'Didesain khusus dengan sandaran melengkung untuk kenyamanan kerja jangka panjang.'
            },
            {
                name: 'Lemari Minimalis 2 Pintu',
                code: 'LM-MN-2P-01',
                price: 'Rp 4.200.000',
                img: 'img/lemariminimalis.jpg',
                desc: 'Penyimpanan luas dengan sistem sliding door yang sangat hemat ruang.'
            }
        ],
        faqs: [
            { q: 'Apakah bisa membawa desain custom untuk furniture kayu?', a: 'Tentu. Sekitar 80% klien kami membawa referensi desain sendiri untuk furniture kayu custom.Kami akan membantu menyesuaikan desain, ukuran, serta jenis kayu yang paling sesuai dengan kebutuhan ruang Anda.' },
            { q: 'Jenis kayu apa saja yang digunakan untuk custom furniture?', a: 'Kami menyediakan beberapa pilihan kayu seperti jati, mahoni, dan kayu lokal pilihan sesuai kebutuhan custom furniture di Sei Guntung dan sekitarnya.' },
            { q: 'Apakah finishing aman untuk dapur atau makanan?', a: 'Kami menyediakan opsi finishing Natural Oil (food grade) yang aman untuk meja makan dan dapur.' },
            { q: 'Bagaimana sistem harga custom furniture kayu?', a: 'Harga menyesuaikan jenis kayu, ukuran, desain, dan finishing sesuai desain dan kebutuhan furniture kayu custom. Silakan hubungi kami via WhatsApp untuk estimasi.' },
            { q: 'Bagaimana sistem pembayarannya?', a: 'Pembayaran dilakukan dengan DP di awal, dan pelunasan setelah barang selesai sebelum pengiriman.' },
            { q: 'Berapa lama proses pengerjaan?', a: 'Estimasi pengerjaan 7–21 hari kerja tergantung tingkat kesulitan dan jumlah pesanan.' },
            { q: 'Apakah bisa survei atau ukur langsung ke lokasi?', a: 'Untuk area tertentu, kami dapat membantu survei lokasi. Silakan konsultasikan via WhatsApp.' },
            { q: 'Apakah melayani pengiriman furniture ke luar pulau?', a: 'Saat ini fokus utama kami Sei Guntung dan sekitar Tembilahan, namun kami bisa bantu koordinasi ekspedisi kargo untuk luar pulau.' },
            { q: 'Apakah ada garansi untuk produk furniture?', a: 'Tentu. Kami memberikan garansi konstruksi selama 6 bulan untuk pemakaian normal.' }
        ]
    }));
});