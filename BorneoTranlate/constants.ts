
import { Language, NewsItem, Review, Comment } from './types';

export const LANGUAGES: { value: Language; label: string }[] = [
  { value: Language.Indonesian, label: 'Indonesia' },
  { value: Language.Bakumpai, label: 'Bakumpai' },
  { value: Language.Ngaju, label: 'Ngaju' },
];

export const MOCK_NEWS_DATA: NewsItem[] = [
  {
    id: 1,
    title: "Festival Budaya Borneo: Merayakan Keragaman",
    content: "Festival tahunan ini kembali digelar, menampilkan tarian tradisional, musik, dan kuliner khas dari berbagai suku di Borneo, termasuk Bakumpai dan Ngaju.",
    imageUrl: "https://picsum.photos/seed/borneo1/600/400",
    date: "12 Agustus 2024"
  },
  {
    id: 2,
    title: "Upaya Pelestarian Bahasa Daerah di Kalimantan",
    content: "Pemerintah daerah meluncurkan program baru untuk mendorong penggunaan bahasa Bakumpai dan Ngaju di kalangan generasi muda melalui aplikasi digital.",
    imageUrl: "https://picsum.photos/seed/borneo2/600/400",
    date: "10 Agustus 2024"
  },
  {
    id: 3,
    title: "Ekspedisi Hutan Hujan Tropis: Menemukan Flora Baru",
    content: "Tim peneliti internasional berhasil mengidentifikasi beberapa spesies tanaman baru di jantung hutan Borneo, memberikan harapan baru bagi konservasi.",
    imageUrl: "https://picsum.photos/seed/borneo3/600/400",
    date: "08 Agustus 2024"
  }
];

export const MOCK_REVIEWS: Review[] = [
  {
    id: 1,
    username: "Budi",
    email: "budi@example.com",
    message: "Aplikasi ini sangat membantu saya belajar bahasa daerah. Tampilannya juga keren!",
    rating: 5,
    date: "2024-08-10T10:00:00Z"
  },
  {
    id: 2,
    username: "Siti",
    email: "siti@example.com",
    message: "Terjemahannya cukup akurat, tapi kadang masih ada beberapa kata yang kurang pas. Overall, bagus!",
    rating: 4,
    date: "2024-08-09T14:30:00Z"
  },
  {
    id: 3,
    username: "Joko",
    email: "joko@example.com",
    message: "Fitur berita sangat informatif. Saya jadi tahu perkembangan terbaru di Borneo.",
    rating: 5,
    date: "2024-08-08T08:15:00Z"
  }
];

export const MOCK_COMMENTS: Comment[] = [
  {
    newsId: 1,
    id: 1,
    username: "Andi",
    email: "andi@example.com",
    message: "Festivalnya seru sekali! Tahun depan harus datang lagi.",
    date: "2024-08-12T14:00:00Z"
  },
  {
    newsId: 1,
    id: 2,
    username: "Citra",
    email: "citra@example.com",
    message: "Saya suka stand kuliner khas Dayak. Enak-enak semua!",
    date: "2024-08-12T15:30:00Z"
  },
  {
    newsId: 2,
    id: 3,
    username: "Eko",
    email: "eko@example.com",
    message: "Semoga program digitalisasi bahasa ini berhasil. Penting untuk generasi mendatang.",
    date: "2024-08-11T09:00:00Z"
  }
];
