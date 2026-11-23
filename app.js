/**
 * PustakaKu - Sistem Perpustakaan & Peminjaman Online
 * Controller Logika Alur Peminjaman & Dashboard Admin ACC
 */

// ================= DATA ANGGOTA & AKUN DEMO (ALUR 1) =================
const DEFAULT_MEMBERS = [
  {
    id: "2205099",
    name: "Ahmad Fikri",
    role: "member",
    phone: "0812-9988-7766",
    password: "123"
  },
  {
    id: "2205011",
    name: "Budi Santoso",
    role: "member",
    phone: "0812-3456-7890",
    password: "123"
  },
  {
    id: "2205034",
    name: "Siti Rahmawati",
    role: "member",
    phone: "0813-9876-5432",
    password: "123"
  },
  {
    id: "2205088",
    name: "Ahmad Fauzi",
    role: "member",
    phone: "0857-1122-3344",
    password: "123"
  },
  {
    id: "PETUGAS-01",
    name: "Petugas",
    role: "admin",
    phone: "0811-2233-4455",
    password: "admin"
  }
];

// ================= KOLEKSI BUKU PERPUSTAKAAN (BUKU ASLI BERLISENSI & POPULER) =================
const DEFAULT_BOOKS = [
  // --- KATEGORI 1: SASTRA & FIKSI ---
  {
    id: "BK-01",
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    authorBio: "Novelis kenamaan Indonesia asal Belitung, karyanya telah diterjemahkan ke dalam 40+ bahasa asing dan diadaptasi ke layar lebar.",
    category: "Sastra & Fiksi",
    rack: "Rak SF-01 (Lantai 1)",
    stock: 5,
    borrowed: 1,
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    desc: "Kisah inspiratif tentang perjuangan sepuluh anak di Belitung (Laskar Pelangi) dan dua guru berdedikasi tinggi di sekolah SD Muhammadiyah yang serba kekurangan, penuh nilai persahabatan dan keajaiban tekad meraih mimpi.",
    audience: "Pelajar, mahasiswa, guru, dan seluruh kalangan masyarakat penikmat sastra inspiratif."
  },
  {
    id: "BK-02",
    title: "Bumi Manusia",
    author: "Pramoedya Ananta Toer",
    authorBio: "Sastrawan legendaris Indonesia yang telah dinominasikan berulang kali untuk Hadiah Nobel Sastra dunia.",
    category: "Sastra & Fiksi",
    rack: "Rak SF-02 (Lantai 1)",
    stock: 4,
    borrowed: 0,
    cover: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=600&q=80",
    desc: "Karya agung Tetralogi Buru. Mengisahkan Minke, pemuda pribumi terpelajar di era Hindia Belanda, dan pergulatan asmaranya dengan Annelies Mellema di tengah diskriminasi hukum kolonial.",
    audience: "Peminat sastra klasik, mahasiswa sejarah dan sastra, serta pembaca novel berbobot."
  },
  {
    id: "BK-03",
    title: "Hujan",
    author: "Tere Liye",
    authorBio: "Novelis produktif paling digemari di Indonesia dengan puluhan karya novel fiksi best-seller nasional.",
    category: "Sastra & Fiksi",
    rack: "Rak SF-03 (Lantai 1)",
    stock: 6,
    borrowed: 2,
    cover: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80",
    desc: "Novel fiksi ilmiah romansa berlatar tahun 2042 setelah bumi dilanda bencana alam dahsyat. Mengangkat tema persahabatan, cinta tulus, pengorbanan, dan keputusan untuk memeluk atau melupakan kenangan.",
    audience: "Remaja, mahasiswa, dan pembaca umum penyuka novel emosional dan futuristik."
  },

  // --- KATEGORI 2: PENGEMBANGAN DIRI ---
  {
    id: "BK-04",
    title: "Filosofi Teras: Menjadi Tenang & Tangguh",
    author: "Henry Manampiring",
    authorBio: "Praktisi periklanan dan komunikasi, penulis buku Mega Best-Seller Book of the Year di Indonesia.",
    category: "Pengembangan Diri",
    rack: "Rak PD-01 (Lantai 1)",
    stock: 5,
    borrowed: 1,
    cover: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
    desc: "Penerapan filsafat Yunani-Romawi Kuno (Stoisisme) yang dikemas santai untuk mengatasi kekhawatiran berlebihan (overthinking), mengelola emosi negatif, dan membangun ketangguhan mental sehari-hari.",
    audience: "Mahasiswa, pekerja muda, dan siapa saja yang sering mengalami cemas atau overthinking."
  },
  {
    id: "BK-05",
    title: "Atomic Habits: Perubahan Kecil, Hasil Luar Biasa",
    author: "James Clear",
    authorBio: "Pakar pembentukan kebiasaan kelas dunia dan pembicara reguler di Fortune 500 dan universitas ternama.",
    category: "Pengembangan Diri",
    rack: "Rak PD-02 (Lantai 1)",
    stock: 6,
    borrowed: 1,
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    desc: "Panduan praktis tentang bagaimana perbaikan kecil 1% setiap hari dapat menghasilkan transformasi hidup luar biasa melalui sistem 4 hukum pembentukan kebiasaan positif jangka panjang.",
    audience: "Siapa pun yang ingin membangun disiplin diri, produktivitas, dan menghentikan kebiasaan buruk."
  },
  {
    id: "BK-06",
    title: "Sebuah Seni untuk Bersikap Bodo Amat",
    author: "Mark Manson",
    authorBio: "Penulis dan konsultan pengembangan diri asal New York, buku-bukunya terjual lebih dari 15 juta eksemplar di seluruh dunia.",
    category: "Pengembangan Diri",
    rack: "Rak PD-03 (Lantai 1)",
    stock: 4,
    borrowed: 0,
    cover: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=600&q=80",
    desc: "Pendekatan realistis tanpa ilusi kepositifan palsu tentang bagaimana kita menyortir hal-hal mana saja yang berharga untuk dipedulikan, dan menerima keterbatasan diri dengan jujur.",
    audience: "Generasi muda, pekerja, dan pembaca yang mencari perspektif realistis menghadapi tantangan hidup."
  },

  // --- KATEGORI 3: BISNIS & FINANSIAL ---
  {
    id: "BK-07",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    authorBio: "Mantan jurnalis The Wall Street Journal dan partner investasi di Collaborative Fund.",
    category: "Bisnis & Finansial",
    rack: "Rak BF-01 (Lantai 2)",
    stock: 5,
    borrowed: 1,
    cover: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80",
    desc: "Mengupas 19 cerita pendek tentang bagaimana perilaku, psikologi, ego, dan rasa syukur manusia jauh lebih menentukan kesuksesan finansial daripada rumus matematika atau kecerdasan analitis.",
    audience: "Pencari literasi keuangan, mahasiswa ekonomi, investor pemula, dan profesional muda."
  },
  {
    id: "BK-08",
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    authorBio: "Investor properti, pendiri Rich Dad Company, dan penulis buku literasi finansial terlaris sepanjang masa.",
    category: "Bisnis & Finansial",
    rack: "Rak BF-02 (Lantai 2)",
    stock: 4,
    borrowed: 0,
    cover: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&q=80",
    desc: "Pelajaran abadi tentang perbedaan pola pikir orang kaya dan kelas menengah: pentingnya membangun portofolio aset, memahami arus kas, dan bagaimana membuat uang bekerja untuk kita.",
    audience: "Masyarakat umum, pemula yang ingin melek investasi, dan calon wirausahawan."
  },
  {
    id: "BK-09",
    title: "Zero to One: Catatan tentang Startup",
    author: "Peter Thiel (bersama Blake Masters)",
    authorBio: "Co-founder PayPal, investor pertama Facebook, dan tokoh venture capital terkemuka Silicon Valley.",
    category: "Bisnis & Finansial",
    rack: "Rak BF-03 (Lantai 2)",
    stock: 3,
    borrowed: 0,
    cover: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    desc: "Kunci membangun bisnis bernilai masa depan: bagaimana menemukan monopoli kreatif yang mengubah peradaban dari 0 ke 1 (orisinal), daripada sekadar meniru dari 1 ke n.",
    audience: "Founder startup, pebisnis teknologi, dan mahasiswa manajemen inovasi."
  },

  // --- KATEGORI 4: TEKNOLOGI & KOMPUTER ---
  {
    id: "BK-10",
    title: "Clean Code: Panduan Menulis Kode Bersih",
    author: "Robert C. Martin (Uncle Bob)",
    authorBio: "Software Engineer legendaris & salah satu penandatangan Agile Manifesto dengan pengalaman 40+ tahun.",
    category: "Teknologi & Komputer",
    rack: "Rak TK-01 (Lantai 2)",
    stock: 5,
    borrowed: 1,
    cover: "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&w=600&q=80",
    desc: "Prinsip menulis kode program yang rapi, bermakna, dan mudah dirawat. Menjelaskan refactoring, fungsi yang ramping, dan penanganan error tanpa mengorbankan stabilitas arsitektur.",
    audience: "Mahasiswa Informatika, programmer, web developer, dan software engineer profesional."
  },
  {
    id: "BK-11",
    title: "The Pragmatic Programmer",
    author: "David Thomas & Andrew Hunt",
    authorBio: "Pionir arsitektur perangkat lunak modern dan pendiri Pragmatic Bookshelf.",
    category: "Teknologi & Komputer",
    rack: "Rak TK-02 (Lantai 2)",
    stock: 4,
    borrowed: 0,
    cover: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    desc: "Tips berharga coding profesional: prinsip DRY (Don't Repeat Yourself), fleksibilitas kode, debugging sistematis, dan manajemen karir di industri rekayasa perangkat lunak modern.",
    audience: "Pengembang software pemula hingga mahir, serta mahasiswa RPL yang bersiap masuk industri kerja."
  },
  {
    id: "BK-12",
    title: "Python Crash Course",
    author: "Eric Matthes",
    authorBio: "Pendidik dan programmer yang telah melatih ratusan ribu programmer Python di seluruh dunia.",
    category: "Teknologi & Komputer",
    rack: "Rak TK-03 (Lantai 2)",
    stock: 6,
    borrowed: 1,
    cover: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&q=80",
    desc: "Panduan berbasis proyek paling populer untuk menguasai Python: mulai dari dasar sintaksis, struktur data, pengolahan file, hingga proyek web app dan analisis data interaktif.",
    audience: "Pemula yang baru belajar coding, data scientist, dan pengembang otomasi/web."
  },

  // --- KATEGORI 5: SAINS & PENGETAHUAN ---
  {
    id: "BK-13",
    title: "Sapiens: Riwayat Singkat Umat Manusia",
    author: "Yuval Noah Harari",
    authorBio: "Sejarawan terkemuka lulusan Oxford University dan profesor di Hebrew University of Jerusalem.",
    category: "Sains & Pengetahuan",
    rack: "Rak SP-01 (Lantai 3)",
    stock: 5,
    borrowed: 1,
    cover: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80",
    desc: "Petualangan menakjubkan menyusuri sejarah 70.000 tahun manusia: bagaimana makhluk primata tak berarti berevolusi menjadi penguasa bumi lewat Revolusi Kognitif, Pertanian, dan Sains.",
    audience: "Masyarakat umum, peminat sains populer, sejarah peradaban, filsafat, dan antropologi."
  },
  {
    id: "BK-14",
    title: "Kosmos: Menjelajahi Sains & Alam Semesta",
    author: "Carl Sagan",
    authorBio: "Astronom dunia, penerima Medali Kesejahteraan Publik NASA, dan komunikator sains legendaris.",
    category: "Sains & Pengetahuan",
    rack: "Rak SP-02 (Lantai 3)",
    stock: 4,
    borrowed: 0,
    cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    desc: "Penjelajahan sains antariksa yang puitis dan mendalam: asal-usul bintang, misteri waktu dan galaksi, serta tanggung jawab peradaban manusia dalam menjaga bumi di tengah samudra kosmik.",
    audience: "Pecinta astronomi, sains antariksa, pelajar, dan masyarakat umum."
  },
  {
    id: "BK-15",
    title: "Matematika Diskrit & Logika Komputasi",
    author: "Dr. Ir. Rinaldi Munir, M.T.",
    authorBio: "Dosen senior Sekolah Teknik Elektro dan Informatika (STEI) ITB, penulis buku teks sains rujukan nasional.",
    category: "Sains & Pengetahuan",
    rack: "Rak SP-03 (Lantai 3)",
    stock: 5,
    borrowed: 0,
    cover: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80",
    desc: "Fondasi logika matematika komputasi di Indonesia: membahas logika proposisi, teori himpunan, relasi fungsi, kombinatorika, teori graf, hingga pohon ekspresi yang menjadi dasar algoritma.",
    audience: "Mahasiswa ilmu komputer, matematika murni & terapan, serta peminat logika algoritma."
  }
];

function getDateOffset(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}

// ================= DATA TRANSAKSI PEMINJAMAN (ALUR 4, 5, 6) =================
const DEFAULT_LOANS = [
  {
    id: "BK-8901",
    bookId: "BK-04",
    bookTitle: "Filosofi Teras: Menjadi Tenang & Tangguh",
    rack: "Rak PD-01 (Lantai 1)",
    memberId: "2205099",
    memberName: "Ahmad Fikri",
    memberPhone: "0812-9988-7766",
    pickupLocation: "Loket Sirkulasi (Lantai 1)",
    quantity: 1,
    durationDays: 7,
    status: "borrowed", // 'pending' | 'ready' | 'borrowed' | 'returned' | 'rejected'
    bookingDate: getDateOffset(-4),
    pickupDeadline: null,
    borrowDate: getDateOffset(-4),
    dueDate: getDateOffset(3), // Masih 3 hari lagi (bisa perpanjang)
    returnDate: null,
    fineAmount: 0,
    renewed: false
  },
  {
    id: "BK-8902",
    bookId: "BK-01",
    bookTitle: "Laskar Pelangi",
    rack: "Rak SF-01 (Lantai 1)",
    memberId: "2205099",
    memberName: "Ahmad Fikri",
    memberPhone: "0812-9988-7766",
    pickupLocation: "Smart Locker (24 Jam)",
    quantity: 1,
    durationDays: 7,
    status: "borrowed",
    bookingDate: getDateOffset(-10),
    pickupDeadline: null,
    borrowDate: getDateOffset(-10),
    dueDate: getDateOffset(-3), // Telat 3 hari (Denda Rp 3.000)
    returnDate: null,
    fineAmount: 3000,
    finePaid: false
  },
  {
    id: "BK-8903",
    bookId: "BK-10",
    bookTitle: "Clean Code: Panduan Menulis Kode Bersih",
    rack: "Rak TK-01 (Lantai 2)",
    memberId: "2205099",
    memberName: "Ahmad Fikri",
    memberPhone: "0812-9988-7766",
    pickupLocation: "Smart Locker (24 Jam)",
    quantity: 1,
    durationDays: 7,
    status: "ready", // Siap diambil di locker!
    bookingDate: getDateOffset(-1),
    pickupDeadline: getDateOffset(1),
    borrowDate: null,
    dueDate: null,
    returnDate: null,
    fineAmount: 0
  },
  {
    id: "BK-8904",
    bookId: "BK-07",
    bookTitle: "The Psychology of Money",
    rack: "Rak BF-01 (Lantai 2)",
    memberId: "2205099",
    memberName: "Ahmad Fikri",
    memberPhone: "0812-9988-7766",
    pickupLocation: "Loket Sirkulasi (Lantai 1)",
    quantity: 1,
    durationDays: 14,
    status: "pending", // Menunggu ACC petugas!
    bookingDate: getDateOffset(0),
    pickupDeadline: null,
    borrowDate: null,
    dueDate: null,
    returnDate: null,
    fineAmount: 0
  },
  {
    id: "BK-8905",
    bookId: "BK-02",
    bookTitle: "Bumi Manusia",
    rack: "Rak SF-02 (Lantai 1)",
    memberId: "2205011",
    memberName: "Budi Santoso",
    memberPhone: "0812-3456-7890",
    pickupLocation: "Loket Sirkulasi (Lantai 1)",
    quantity: 1,
    durationDays: 7,
    status: "returned",
    bookingDate: getDateOffset(-15),
    pickupDeadline: null,
    borrowDate: getDateOffset(-15),
    dueDate: getDateOffset(-8),
    returnDate: getDateOffset(-8),
    fineAmount: 0,
    finePaid: true,
    paidAmount: 0
  }
];

const FINE_PER_DAY = 1000;
const CATALOG_SCHEMA_VERSION = "v4_fines_and_renewals";

// State Aplikasi
let appState = {
  members: [],
  currentMember: null,
  books: [],
  loans: [],
  currentTab: 'catalog',
  filterCategory: 'all',
  filterAvailability: 'all',
  searchQuery: '',
  userLoanFilter: 'all',
  adminActiveFilter: 'all',
  adminBookSearchQuery: '',
  adminSubtab: 'requests'
};

// ================= STORAGE & INIT =================
function initApp() {
  const savedMembers = localStorage.getItem('pk_members');
  const savedCurrent = localStorage.getItem('pk_current_member');
  const savedLoans = localStorage.getItem('pk_loans');
  const currentVersion = localStorage.getItem('pk_catalog_version');
  const isAdminPage = window.location.pathname.includes('admin.html');

  appState.members = savedMembers ? JSON.parse(savedMembers) : [...DEFAULT_MEMBERS];

  // Pastikan akun default demo (termasuk Ahmad Fikri) selalu terdaftar
  DEFAULT_MEMBERS.forEach(def => {
    if (!appState.members.some(m => m.id.toLowerCase() === def.id.toLowerCase() || m.name.toLowerCase() === def.name.toLowerCase())) {
      appState.members.push(def);
    }
  });

  // Refresh katalog buku jika ada pembaruan dataset buku asli atau belum tersimpan
  if (currentVersion !== CATALOG_SCHEMA_VERSION) {
    appState.books = [...DEFAULT_BOOKS];
    appState.loans = [...DEFAULT_LOANS];
    localStorage.setItem('pk_catalog_version', CATALOG_SCHEMA_VERSION);
  } else {
    const savedBooks = localStorage.getItem('pk_books');
    appState.books = savedBooks ? JSON.parse(savedBooks) : [...DEFAULT_BOOKS];
    appState.loans = savedLoans ? JSON.parse(savedLoans) : [...DEFAULT_LOANS];
  }

  if (!appState.members || appState.members.length === 0) appState.members = [...DEFAULT_MEMBERS];
  if (!appState.books || appState.books.length === 0) appState.books = [...DEFAULT_BOOKS];
  if (!appState.loans || appState.loans.length === 0) appState.loans = [...DEFAULT_LOANS];

  // Cek apakah user sudah login — hanya redirect jika berada di halaman user (index.html)
  if (!isAdminPage) {
    if (savedCurrent) {
      appState.currentMember = JSON.parse(savedCurrent);
      // Jika akun admin mengakses index.html, redirect ke admin.html
      if (appState.currentMember.role === 'admin') {
        window.location.href = 'admin.html';
        return;
      }
    } else {
      // Belum login — redirect ke halaman login
      window.location.href = 'login.html';
      return;
    }
  } else {
    // Di admin.html, cukup load data tanpa redirect (admin.html punya auth sendiri)
    if (savedCurrent) {
      appState.currentMember = JSON.parse(savedCurrent);
    }
  }

  
  appState.members.forEach(m => {
    if (m.role === 'admin' || m.id === 'PETUGAS-01') {
      m.name = 'Petugas';
    }
  });
  if (appState.currentMember && (appState.currentMember.role === 'admin' || appState.currentMember.id === 'PETUGAS-01')) {
    appState.currentMember.name = 'Petugas';
    saveCurrentMember();
  }

  saveMembers();
  saveBooks();
  saveLoans();

  updateUserPillUI();
  setupEventListeners();
  renderCatalog();
  renderUserLoans();
  renderAdminPanels();
  updateCounters();
}

function saveMembers() { localStorage.setItem('pk_members', JSON.stringify(appState.members)); }
function saveCurrentMember() { localStorage.setItem('pk_current_member', JSON.stringify(appState.currentMember)); }
function saveBooks() { localStorage.setItem('pk_books', JSON.stringify(appState.books)); }
function saveLoans() { localStorage.setItem('pk_loans', JSON.stringify(appState.loans)); }

// ================= NAVIGASI & TAB =================
function navigateToTab(tabId) {
  appState.currentTab = tabId;

  // Update navbar buttons
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  if (tabId === 'catalog') document.getElementById('navBtnCatalog')?.classList.add('active');
  if (tabId === 'my-loans') document.getElementById('navBtnMyLoans')?.classList.add('active');
  if (tabId === 'admin') document.getElementById('navBtnAdmin')?.classList.add('active');

  // Update views
  document.querySelectorAll('.page-view').forEach(view => view.classList.remove('active'));
  const activeView = document.getElementById(`view-${tabId}`);
  if (activeView) activeView.classList.add('active');

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Refresh tab
  if (tabId === 'catalog') renderCatalog();
  if (tabId === 'my-loans') renderUserLoans();
  if (tabId === 'admin') renderAdminPanels();
}

function toggleAdminMode() {
  const adminMember = appState.members.find(m => m.role === 'admin') || DEFAULT_MEMBERS[3];

  if (appState.currentMember.role === 'admin') {
    // Switch to Budi Santoso (Member)
    const memberUser = appState.members.find(m => m.role === 'member') || DEFAULT_MEMBERS[0];
    appState.currentMember = memberUser;
    saveCurrentMember();
    updateUserPillUI();
    showToast(`Beralih ke mode Anggota: ${memberUser.name}`, 'info');
    navigateToTab('catalog');
  } else {
    // Switch to Admin
    appState.currentMember = adminMember;
    saveCurrentMember();
    updateUserPillUI();
    showToast(`Beralih ke Meja Kerja Petugas: ${adminMember.name}`, 'info');
    navigateToTab('admin');
  }
}

function updateUserPillUI() {
  const user = appState.currentMember;
  if (!user) return;

  const nameEl = document.getElementById('pillName');
  const subEl = document.getElementById('pillSub');
  const avatarEl = document.getElementById('pillAvatar');
  const adminBtnText = document.getElementById('adminToggleText');
  const adminStaffName = document.getElementById('adminStaffName');

  if (adminStaffName && user.role === 'admin') {
    adminStaffName.innerText = user.name;
  }

  if (user.role === 'admin') {
    if (nameEl) nameEl.innerText = user.name;
    if (subEl) subEl.innerText = "Petugas Perpustakaan";
    if (avatarEl) {
      avatarEl.style.backgroundColor = "#0f172a";
      avatarEl.innerHTML = '<i class="fa-solid fa-user-shield"></i>';
    }
    if (adminBtnText) adminBtnText.innerText = "Kembali ke Anggota";

    document.querySelectorAll('.user-only').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.admin-only').forEach(el => el.style.display = 'flex');
  } else {
    if (nameEl) nameEl.innerText = user.name;
    if (subEl) subEl.innerText = `No. Anggota: ${user.id}`;
    if (avatarEl) {
      avatarEl.style.backgroundColor = "var(--primary)";
      avatarEl.innerHTML = '<i class="fa-solid fa-user"></i>';
    }
    if (adminBtnText) adminBtnText.innerText = "Mode Petugas (ACC)";

    document.querySelectorAll('.user-only').forEach(el => el.style.display = 'flex');
    document.querySelectorAll('.admin-only').forEach(el => el.style.display = 'none');
  }

  // Greeting in user loans
  const greetingEl = document.getElementById('userGreetingText');
  if (greetingEl) {
    greetingEl.innerText = `Halo, ${user.name} (No. Anggota: ${user.id}). Pantau status pesanan dan jadwal pengembalian buku Anda.`;
  }
}

// ================= ALUR 1: LOGIN & LOGOUT =================
// Login sekarang ditangani oleh login.html — fungsi ini hanya untuk redirect
function openLoginModal() {
  window.location.href = 'login.html';
}

function logoutUser() {
  // Hapus sesi aktif dan redirect ke login
  localStorage.removeItem('pk_current_member');
  appState.currentMember = null;
  window.location.href = 'login.html';
}

// Beralih ke Meja Petugas secara cepat tanpa login ulang
function switchToAdminPortal() {
  const savedLastAdmin = localStorage.getItem('pk_last_admin');
  let adminUser = null;
  if (savedLastAdmin) {
    try { adminUser = JSON.parse(savedLastAdmin); } catch (e) { }
  }
  if (!adminUser || adminUser.role !== 'admin') {
    adminUser = (appState.members || []).find(m => m.role === 'admin') || {
      id: "PETUGAS-01",
      name: "Petugas",
      role: "admin",
      phone: "0811-2233-4455",
      password: "admin"
    };
  }
  // Simpan akun anggota aktif saat ini agar saat kembali langsung ingat
  if (appState.currentMember && appState.currentMember.role === 'member') {
    localStorage.setItem('pk_last_member', JSON.stringify(appState.currentMember));
  }
  localStorage.setItem('pk_current_member', JSON.stringify(adminUser));
  localStorage.setItem('pk_last_admin', JSON.stringify(adminUser));
  window.location.href = 'admin.html';
}

// Beralih ke Portal Anggota secara cepat tanpa login ulang
function switchToMemberPortal() {
  const savedLastMember = localStorage.getItem('pk_last_member');
  let targetMember = null;
  if (savedLastMember) {
    try { targetMember = JSON.parse(savedLastMember); } catch (e) { }
  }
  if (!targetMember || targetMember.role === 'admin') {
    targetMember = (appState.members || []).find(m => m.role === 'member') || {
      id: "2205099",
      name: "Ahmad Fikri",
      role: "member",
      phone: "0812-9988-7766",
      password: "123"
    };
  }
  const currentAdmin = localStorage.getItem('pk_current_member');
  if (currentAdmin) {
    localStorage.setItem('pk_last_admin', currentAdmin);
  }
  localStorage.setItem('pk_current_member', JSON.stringify(targetMember));
  localStorage.setItem('pk_last_member', JSON.stringify(targetMember));
  window.location.href = 'index.html';
}

window.switchToAdminPortal = switchToAdminPortal;
window.switchToMemberPortal = switchToMemberPortal;

// Fungsi switchAuthMode, renderQuickUsersList, deleteUserAccount, selectQuickUser, handleManualLogin, handleRegisterSubmit
// sudah dipindahkan ke login.html — tidak lagi diperlukan di app.js

// ================= ALUR 2 & 3: KATALOG OPAC & CEK KETERSEDIAAN =================
function renderCatalog() {
  const grid = document.getElementById('booksGrid');
  if (!grid) return;

  const search = (appState.searchQuery || '').toLowerCase();
  const cat = appState.filterCategory || 'all';
  const avail = appState.filterAvailability || 'all';

  const filtered = appState.books.filter(b => {
    const matchSearch = (b.title && b.title.toLowerCase().includes(search)) ||
      (b.author && b.author.toLowerCase().includes(search)) ||
      (b.category && b.category.toLowerCase().includes(search));
    const matchCat = (cat === 'all') || (b.category === cat);

    const isAvail = (b.stock - b.borrowed) > 0;
    let matchAvail = true;
    if (avail === 'available') matchAvail = isAvail;

    return matchSearch && matchCat && matchAvail;
  });

  const countEl = document.getElementById('catalogResultCount');
  if (countEl) {
    countEl.innerText = `Menampilkan ${filtered.length} judul buku yang dapat Anda pinjam`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <i class="fa-solid fa-book-skull" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.4;"></i>
        <h3>Buku tidak ditemukan</h3>
        <p>Coba gunakan kata kunci lain atau pilih tombol "Semua Kategori".</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(b => {
    const availableStock = Math.max(0, b.stock - b.borrowed);
    const isAvailable = availableStock > 0;

    return `
      <div class="book-card">
        <div class="book-cover-wrap">
          <img src="${b.cover}" alt="${b.title}" class="book-cover-img" onerror="this.src='https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80'">
          <span class="book-badge-status ${isAvailable ? 'available' : 'unavailable'}">
            <i class="fa-solid ${isAvailable ? 'fa-circle-check' : 'fa-circle-xmark'}"></i>
            ${isAvailable ? 'Dapat Dipinjam' : 'Sedang Dipinjam'}
          </span>
        </div>

        <div class="book-card-content">
          <span class="book-category-label">${b.category}</span>
          <h4 class="book-title-text">${b.title}</h4>
          <p class="book-author-text"><i class="fa-solid fa-feather"></i> Penulis: <strong>${b.author}</strong></p>

          <div class="book-rack-info">
            <i class="fa-solid fa-location-dot" style="color:var(--primary);"></i>
            <span>Lokasi: <strong>${b.rack}</strong></span>
          </div>

          <div class="book-card-actions">
            <div class="stock-count-text">
              Stok: <strong>${availableStock}</strong> dari ${b.stock}
            </div>
            <div style="display:flex; gap:0.5rem; align-items:center;">
              <button class="btn-book-detail" onclick="openBookDetailModal('${b.id}')" title="Lihat Penjelasan Buku">
                <i class="fa-solid fa-circle-info"></i> Detail
              </button>
              <button class="btn-book-action" onclick="openBookingModal('${b.id}')" ${!isAvailable ? 'disabled' : ''}>
                <i class="fa-solid fa-bookmark"></i> ${isAvailable ? 'Pinjam' : 'Habis'}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function setCategoryFilter(category) {
  appState.filterCategory = category;
  document.querySelectorAll('.cat-pill').forEach(btn => {
    const text = btn.innerText.trim();
    if (category === 'all') {
      btn.classList.toggle('active', text.includes('Semua'));
    } else {
      btn.classList.toggle('active', text.toLowerCase() === category.toLowerCase());
    }
  });
  renderCatalog();
}

function setAvailabilityFilter(avail) {
  appState.filterAvailability = avail;
  const btnAll = document.getElementById('btnFilterAll');
  const btnAvail = document.getElementById('btnFilterAvailable');
  if (btnAll) btnAll.classList.toggle('active', avail === 'all');
  if (btnAvail) btnAvail.classList.toggle('active', avail === 'available');
  renderCatalog();
}

function clearOpacSearch() {
  const input = document.getElementById('opacSearchInput');
  if (input) input.value = '';
  const btnClear = document.getElementById('btnClearSearch');
  if (btnClear) btnClear.style.display = 'none';
  appState.searchQuery = '';
  renderCatalog();
}

// Quantity control function
function changeBookingQty(delta) {
  const qtyInput = document.getElementById('bookingQty');
  if (!qtyInput) return;
  let val = parseInt(qtyInput.value, 10) || 1;
  const bookId = document.getElementById('bookingBookId').value;
  const book = appState.books.find(b => b.id === bookId);
  const maxAvailable = book ? Math.min(3, Math.max(1, book.stock - book.borrowed)) : 3;

  val += delta;
  if (val < 1) val = 1;
  if (val > maxAvailable) {
    val = maxAvailable;
    showToast(`Maksimal ${maxAvailable} eksemplar buku dapat dipinjam sesuai stok tersedia.`, 'info');
  }
  qtyInput.value = val;
}

// Modal Detail Buku Lengkap
function openBookDetailModal(bookId) {
  const book = appState.books.find(b => b.id === bookId);
  if (!book) return;

  const available = Math.max(0, book.stock - book.borrowed);
  const isAvailable = available > 0;

  document.getElementById('bookDetailTitle').innerText = book.title;
  document.getElementById('bookDetailBody').innerHTML = `
    <div class="book-detail-grid">
      <div>
        <img src="${book.cover}" alt="${book.title}" class="detail-cover-img" onerror="this.src='https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80'">
        <div style="margin-top:0.75rem; text-align:center;">
          <span class="book-badge-status ${isAvailable ? 'available' : 'unavailable'}" style="position:static; display:inline-flex;">
            ${isAvailable ? `Tersedia (${available} eks)` : 'Habis'}
          </span>
        </div>
      </div>
      <div>
        <div class="detail-section-box">
          <div class="detail-section-title"><i class="fa-solid fa-book-open"></i> Buku Ini Tentang Apa?</div>
          <p class="detail-section-text">${book.desc}</p>
        </div>

        <div class="detail-section-box">
          <div class="detail-section-title"><i class="fa-solid fa-pen-nib"></i> Siapa Yang Membuat? (Penulis)</div>
          <p class="detail-section-text">
            <strong>${book.author}</strong><br>
            <span style="font-size:0.88rem; color:var(--text-muted);">${book.authorBio || 'Penulis dan praktisi berpengalaman di bidangnya.'}</span>
          </p>
        </div>

        <div class="detail-section-box">
          <div class="detail-section-title"><i class="fa-solid fa-bullseye"></i> Cocok Untuk Siapa?</div>
          <span class="target-audience-badge">
            <i class="fa-solid fa-users"></i> ${book.audience || 'Masyarakat umum, pelajar, dan mahasiswa.'}
          </span>
        </div>

        <div style="font-size:0.85rem; color:var(--text-muted); margin-top:0.5rem;">
          <i class="fa-solid fa-location-dot"></i> Lokasi Rak: <strong>${book.rack}</strong> &bull; Kategori: <strong>${book.category}</strong>
        </div>
      </div>
    </div>

    <div class="modal-actions-footer">
      <button type="button" class="btn-cancel" onclick="closeModal('bookDetailModal')">Tutup</button>
      <button type="button" class="btn-submit-lg" style="width:auto;" onclick="closeModal('bookDetailModal'); openBookingModal('${book.id}')" ${!isAvailable ? 'disabled' : ''}>
        <i class="fa-solid fa-bookmark"></i> ${isAvailable ? 'Pinjam Buku Ini' : 'Stok Habis'}
      </button>
    </div>
  `;

  openModal('bookDetailModal');
}

// ================= ALUR 4: PEMESANAN BUKU (BOOKING) =================
function openBookingModal(bookId) {
  // Pastikan sudah masuk
  if (!appState.currentMember || appState.currentMember.role === 'admin') {
    showToast('Silakan masuk dengan Nomor Anggota Anda terlebih dahulu untuk meminjam buku.', 'info');
    window.location.href = 'login.html';
    return;
  }

  const book = appState.books.find(b => b.id === bookId);
  if (!book) return;

  const available = book.stock - book.borrowed;
  if (available <= 0) {
    showToast('Maaf, stok buku ini sedang habis dipinjam anggota lain.', 'error');
    return;
  }

  document.getElementById('bookingBookId').value = book.id;
  document.getElementById('bookingMemberName').innerText = appState.currentMember.name;
  document.getElementById('bookingMemberId').innerText = `No. Anggota: ${appState.currentMember.id} (${appState.currentMember.phone})`;
  document.getElementById('bookingQty').value = "1";

  document.getElementById('selectedBookSummary').innerHTML = `
    <div style="display:flex; gap:1rem; align-items:center; background:#f8fafc; padding:1rem; border:1px solid #e2e8f0; border-radius:8px;">
      <img src="${book.cover}" style="width:48px; height:64px; object-fit:cover; border-radius:4px;">
      <div>
        <strong style="font-size:1.05rem; display:block;">${book.title}</strong>
        <span style="font-size:0.85rem; color:var(--text-muted);">${book.author} &bull; ${book.rack}</span>
        <span style="font-size:0.8rem; color:#15803d; font-weight:700; display:block; margin-top:0.2rem;">Tersedia di rak: ${available} eksemplar</span>
      </div>
    </div>
  `;

  // Pickup method click handler
  document.querySelectorAll('.pickup-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.pickup-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });

  openModal('bookingModal');
}

function handleBookingSubmit(e) {
  e.preventDefault();
  const bookId = document.getElementById('bookingBookId').value;
  const book = appState.books.find(b => b.id === bookId);
  if (!book) return;

  const qty = parseInt(document.getElementById('bookingQty').value, 10) || 1;
  const available = book.stock - book.borrowed;

  if (qty > available) {
    showToast(`Stok tidak mencukupi untuk meminjam ${qty} buku. Tersisa ${available} buku.`, 'error');
    return;
  }

  const duration = parseInt(document.getElementById('bookingDuration').value, 10);
  const pickupRadio = document.querySelector('input[name="pickupMethod"]:checked');
  const pickupMethod = pickupRadio ? pickupRadio.value : "Loket Sirkulasi (Lantai 1)";

  // Buat nomor tiket booking acak yang mudah diingat
  const bookingCode = "BK-" + Math.floor(1000 + Math.random() * 9000);

  const newLoan = {
    id: bookingCode,
    bookId: book.id,
    bookTitle: book.title,
    rack: book.rack,
    quantity: qty,
    memberId: appState.currentMember.id,
    memberName: appState.currentMember.name,
    memberPhone: appState.currentMember.phone,
    pickupLocation: pickupMethod,
    durationDays: duration,
    status: "pending", // ALUR 5: Menunggu konfirmasi ACC petugas
    bookingDate: getDateOffset(0),
    pickupDeadline: null,
    borrowDate: null,
    dueDate: null,
    returnDate: null,
    fineAmount: 0
  };

  // Kurangi stok fisik sejumlah qty yang dipinjam
  book.borrowed += qty;

  appState.loans.unshift(newLoan);
  saveLoans();
  saveBooks();

  closeModal('bookingModal');
  showToast(`Pemesanan buku "${book.title}" berhasil dikirim! Menunggu konfirmasi petugas.`, 'success');

  renderCatalog();
  renderUserLoans();
  renderAdminPanels();
  updateCounters();

  // Buka tiket bukti pemesanan langsung untuk pengguna
  openTicketModal(bookingCode);
}

// ================= ALUR 5 & 6: BUKTI PEMESANAN, PENGAMBILAN & PENGEMBALIAN =================
function openTicketModal(bookingId) {
  const loan = appState.loans.find(l => l.id === bookingId);
  if (!loan) return;

  let statusBadge = "";
  let statusPetunjuk = "";
  let step1Class = "done";
  let step2Class = "";
  let step3Class = "";

  const isLocker = (loan.pickupLocation || '').toLowerCase().includes('locker');

  if (loan.status === 'pending') {
    step2Class = "active";
    statusBadge = `<span class="status-badge-lg pending"><i class="fa-solid fa-hourglass-half"></i> Sedang Diproses (Menunggu ACC Petugas)</span>`;
    statusPetunjuk = isLocker
      ? `Permohonan pinjaman buku sedang menunggu persetujuan (ACC) petugas. Petugas akan mengambil buku dari rak ${loan.rack} dan meletakkannya di Smart Locker.`
      : `Buku sedang disiapkan dari rak ${loan.rack}. Begitu petugas menyetujui (ACC), Anda dapat langsung mengambil fisik buku di ${loan.pickupLocation}.`;
  } else if (loan.status === 'ready') {
    step2Class = "done";
    step3Class = "active";
    statusBadge = `<span class="status-badge-lg ready"><i class="fa-solid fa-bell"></i> Sudah Disetujui (ACC)! Siap Diambil</span>`;
    statusPetunjuk = isLocker
      ? `Buku telah dimasukkan ke dalam <strong>Smart Locker Unit #B-04</strong>! Scan QR Code di atas pada kamera mesin scanner Smart Locker untuk membuka pintu secara mandiri.`
      : `Buku sudah siap di <strong>${loan.pickupLocation}</strong>! Tunjukkan Kode Booking ini kepada kasir/petugas loket sirkulasi untuk serah terima buku.`;
  } else if (loan.status === 'borrowed') {
    step2Class = "done";
    step3Class = "done";
    statusBadge = `<span class="status-badge-lg active"><i class="fa-solid fa-box-check"></i> Buku Sudah Diambil (Masa Pinjam Aktif)</span>`;
    statusPetunjuk = `Buku telah resmi diambil pada tanggal <strong>${loan.borrowDate || 'hari ini'}</strong>. Batas pengembalian buku adalah tanggal <strong>${loan.dueDate}</strong> di Loket Perpustakaan atau Drop Box 24 Jam.`;
  } else if (loan.status === 'returned') {
    step2Class = "done";
    step3Class = "done";
    statusBadge = `<span class="status-badge-lg returned"><i class="fa-solid fa-circle-check"></i> Buku Selesai Dikembalikan</span>`;
    statusPetunjuk = `Peminjaman telah selesai. Buku telah dikembalikan ke perpustakaan dengan aman pada tanggal <strong>${loan.returnDate || '-'}</strong>. Terima kasih!`;
  } else if (loan.status === 'rejected') {
    statusBadge = `<span class="status-badge-lg overdue"><i class="fa-solid fa-circle-xmark"></i> Permohonan Ditolak</span>`;
    statusPetunjuk = `Permohonan pinjaman buku ini tidak disetujui petugas. Stok buku telah dipulihkan ke rak katalog.`;
  } else if (loan.status === 'cancelled') {
    statusBadge = `<span class="status-badge-lg" style="background:#f1f5f9; color:#64748b; border:1px solid #cbd5e1;"><i class="fa-solid fa-ban"></i> Pemesanan Dibatalkan</span>`;
    statusPetunjuk = `Pemesanan buku ini telah dibatalkan oleh pemustaka. Kuota buku telah dikembalikan ke katalog.`;
  }

  // Action buttons inside modal based on status
  let actionButtonsHtml = '';
  if (loan.status === 'pending') {
    actionButtonsHtml = `
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 0.75rem 1rem; margin-top: 1rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
        <span style="font-size: 0.85rem; color: #64748b;"><i class="fa-solid fa-circle-question"></i> Ingin membatalkan pesanan ini?</span>
        <button type="button" class="btn-reject" style="padding: 0.4rem 0.85rem; font-size: 0.82rem;" onclick="closeModal('ticketModal'); promptCancelBooking('${loan.id}')">
          <i class="fa-solid fa-ban"></i> Batalkan Pesanan
        </button>
      </div>
    `;
  } else if (loan.status === 'ready') {
    actionButtonsHtml = isLocker ? `
      <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 1rem; margin-top: 1rem; text-align: center;">
        <p style="font-size: 0.9rem; color: #1e40af; margin-bottom: 0.75rem; font-weight: 600;">
          <i class="fa-solid fa-box-open"></i> Sudah scan QR di Smart Locker dan mengambil fisik bukunya?
        </p>
        <button type="button" class="btn-submit-lg" style="background: #16a34a; border-color: #16a34a; width: 100%;" onclick="confirmMemberPickup('${loan.id}')">
          <i class="fa-solid fa-circle-check"></i> Konfirmasi Selesai Ambil dari Loker
        </button>
      </div>
    ` : `
      <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 1rem; margin-top: 1rem; text-align: center;">
        <p style="font-size: 0.9rem; color: #1e40af; margin-bottom: 0.75rem; font-weight: 600;">
          <i class="fa-solid fa-hand-holding-hand"></i> Sudah berada di depan kasir/petugas loket dan menerima bukunya?
        </p>
        <button type="button" class="btn-submit-lg" style="background: #16a34a; border-color: #16a34a; width: 100%;" onclick="confirmMemberPickup('${loan.id}')">
          <i class="fa-solid fa-circle-check"></i> Konfirmasi Selesai Ambil Buku
        </button>
      </div>
    `;
  } else if (loan.status === 'borrowed') {
    const today = new Date().toISOString().split('T')[0];
    const isOverdue = today > loan.dueDate;
    if (isOverdue && !loan.finePaid) {
      const daysLate = Math.max(1, Math.ceil((new Date(today) - new Date(loan.dueDate)) / (1000 * 60 * 60 * 24)));
      const fine = daysLate * FINE_PER_DAY;
      loan.fineAmount = fine;
      actionButtonsHtml = `
        <div style="background: #fff1f2; border: 1.5px solid #fecdd3; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <strong style="color: #9f1239; display: block; font-size: 0.95rem;"><i class="fa-solid fa-triangle-exclamation"></i> Keterlambatan: ${daysLate} Hari</strong>
              <span style="font-size: 0.85rem; color: #be123c;">Total Denda: <strong>Rp ${fine.toLocaleString('id-ID')}</strong> (Rp 1.000/hari)</span>
            </div>
            <button type="button" class="btn-book-action" style="background: #dc2626; border-color: #dc2626; padding: 0.45rem 0.85rem; font-size: 0.82rem;" onclick="closeModal('ticketModal'); openFinePaymentModal('${loan.id}')">
              <i class="fa-solid fa-qrcode"></i> Bayar Denda QRIS
            </button>
          </div>
          <button type="button" class="btn-cancel" style="width: 100%; border-color: #cbd5e1;" onclick="memberReturnBook('${loan.id}')">
            <i class="fa-solid fa-rotate-left"></i> Selesai & Kembalikan Buku ke Perpustakaan
          </button>
        </div>
      `;
    } else {
      actionButtonsHtml = `
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 1rem; margin-top: 1rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem;">
          <div>
            <strong style="color: #15803d; display: block; font-size: 0.95rem;"><i class="fa-solid fa-check-circle"></i> Status Peminjaman Aktif</strong>
            <span style="font-size: 0.85rem; color: #166534;">Batas pengembalian: ${loan.dueDate} ${loan.finePaid ? '• <b style="color:#15803d;">(Denda LUNAS)</b>' : ''}</span>
          </div>
          <button type="button" class="btn-book-action" style="background: #0f172a; padding: 0.5rem 1rem; font-size: 0.85rem;" onclick="memberReturnBook('${loan.id}')">
            <i class="fa-solid fa-rotate-left"></i> Kembalikan Buku
          </button>
        </div>
      `;
    }
  }

  const ticketContentEl = document.getElementById('ticketContent');
  if (!ticketContentEl) return;

  // Header kartu tiket: jika Smart Locker tampilkan QR Code asli!
  let ticketHeaderCard = '';
  if (isLocker) {
    ticketHeaderCard = `
      <div class="ticket-card-view" style="background: linear-gradient(135deg, #f8fafc, #eff6ff); border: 2px solid #bfdbfe; padding: 1.25rem 1rem; border-radius: 12px; margin-bottom: 1rem; text-align: center;">
        <div style="display:inline-flex; align-items:center; gap:0.4rem; background:#dbeafe; color:#1e40af; padding:0.25rem 0.75rem; border-radius:20px; font-size:0.78rem; font-weight:700; margin-bottom:0.6rem;">
          <i class="fa-solid fa-box-archive"></i> Smart Locker Mandiri (24 Jam)
        </div>
        
        <div style="font-size:0.78rem; font-weight:700; color:var(--text-muted); text-transform:uppercase;">KODE PEMESANAN LOKER</div>
        <div class="ticket-big-code" style="color:var(--primary); font-size:1.85rem; margin:0.2rem 0; letter-spacing:1px;">${loan.id}</div>

        <!-- Tampilan QR Code Smart Locker -->
        <div style="margin: 0.75rem auto; padding: 10px; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 18px rgba(0,0,0,0.08); display: inline-block; border: 1.5px solid #e2e8f0; max-width: 210px;">
          <img src="qr-locker.jpg" alt="QR Code Smart Locker" style="width: 100%; height: auto; max-height: 250px; object-fit: contain; display: block; border-radius: 6px;">
          <div style="font-size: 0.75rem; color: #475569; margin-top: 0.45rem; font-weight: 700; display:flex; align-items:center; justify-content:center; gap:0.35rem;">
            <i class="fa-solid fa-qrcode" style="color:var(--primary);"></i> Scan di Kamera Loker
          </div>
        </div>

        <div style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; margin-top: 0.35rem;">
          <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; padding: 0.3rem 0.65rem; font-size: 0.78rem;">
            <span style="color: #64748b;">Lokasi:</span> <strong style="color: #0f172a;">${loan.status === 'ready' || loan.status === 'borrowed' ? 'Loker Unit #B-04 (Lantai 1)' : 'Loker Mandiri 24 Jam'}</strong>
          </div>
          <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; padding: 0.3rem 0.65rem; font-size: 0.78rem;">
            <span style="color: #64748b;">PIN Cadangan:</span> <strong style="color: var(--primary);">${loan.id.replace('BK-', 'LCK-')}</strong>
          </div>
        </div>

        <p style="font-size: 0.8rem; color: #475569; margin-top: 0.65rem; line-height: 1.4;">
          ${loan.status === 'ready'
        ? '<strong style="color:#15803d;"><i class="fa-solid fa-circle-check"></i> Siap Diambil:</strong> Arahkan QR Code di atas ke scanner Smart Locker untuk membuka pintu secara otomatis.'
        : '<span style="color:#b45309; font-weight:600;"><i class="fa-solid fa-clock"></i> Menunggu Petugas:</span> Buku sedang diproses petugas untuk dimasukkan ke dalam unit loker.'}
        </p>
      </div>
    `;
  } else {
    ticketHeaderCard = `
      <div class="ticket-card-view">
        <div style="font-size:0.85rem; font-weight:800; color:var(--text-muted); text-transform:uppercase;">KODE PEMESANAN BUKU</div>
        <div class="ticket-big-code">${loan.id}</div>
        <div style="font-size:0.85rem; color:var(--text-muted);">Tunjukkan nomor ini di loket sirkulasi / kasir perpustakaan</div>
      </div>
    `;
  }

  ticketContentEl.innerHTML = `
    <!-- Step flow indicator -->
    <div class="ticket-step-flow">
      <div class="ticket-step-item ${step1Class}">
        <span class="ticket-step-num"><i class="fa-solid fa-check"></i></span>
        <span>1. Booking</span>
      </div>
      <div class="ticket-step-item ${step2Class}">
        <span class="ticket-step-num">2</span>
        <span>2. ACC Petugas</span>
      </div>
      <div class="ticket-step-item ${step3Class}">
        <span class="ticket-step-num">3</span>
        <span>3. Serah Terima</span>
      </div>
    </div>

    ${ticketHeaderCard}

    <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:1.25rem; margin-bottom:1rem;">
      <h4 style="font-size:1.15rem; margin-bottom:0.5rem;">${loan.bookTitle}</h4>
      <div style="font-size:0.9rem; color:var(--text-muted); display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem; margin-bottom: 0.75rem;">
        <div><i class="fa-solid fa-book"></i> Jumlah: <strong style="color:var(--primary);">${loan.quantity || 1} Eks</strong></div>
        <div><i class="fa-solid fa-location-dot"></i> Lokasi: <strong>${loan.pickupLocation}</strong></div>
        <div><i class="fa-solid fa-calendar"></i> Tgl Pesan: <strong>${loan.bookingDate}</strong></div>
        <div><i class="fa-solid fa-hourglass"></i> Durasi: <strong>${loan.durationDays || 7} Hari</strong></div>
      </div>
      <div style="margin-bottom:0.75rem;">${statusBadge}</div>
      <div style="font-size:0.9rem; background:#f8fafc; padding:0.75rem; border-radius:6px; border-left:3px solid var(--primary);">
        <i class="fa-solid fa-circle-info"></i> ${statusPetunjuk}
      </div>
      ${actionButtonsHtml}
    </div>
  `;

  openModal('ticketModal');
}

// Konfirmasi Serah Terima Buku Selesai di Loket Kasir
function confirmMemberPickup(loanId) {
  const loan = appState.loans.find(l => l.id === loanId);
  if (!loan) return;

  loan.status = "borrowed";
  loan.borrowDate = getDateOffset(0);
  loan.dueDate = getDateOffset(loan.durationDays || 7);

  saveLoans();
  showToast(`Buku "${loan.bookTitle}" telah selesai diambil di loket kasir! Selamat membaca.`, 'success');

  // Perbarui tampilan tiket dan list pinjaman
  openTicketModal(loanId);
  renderUserLoans();
  renderAdminPanels();
  updateCounters();
}

// Fitur Mengembalikan Buku oleh Anggota
function memberReturnBook(loanId) {
  const loan = appState.loans.find(l => l.id === loanId);
  if (!loan) return;

  loan.status = "returned";
  loan.returnDate = getDateOffset(0);

  // Kembalikan stok buku ke katalog
  const book = appState.books.find(b => b.id === loan.bookId);
  const qty = loan.quantity || 1;
  if (book && book.borrowed >= qty) {
    book.borrowed -= qty;
    saveBooks();
  }

  saveLoans();
  showToast(`Buku "${loan.bookTitle}" berhasil dikembalikan! Terima kasih telah meminjam di PustakaKu.`, 'success');

  openTicketModal(loanId);
  renderUserLoans();
  renderCatalog();
  renderAdminPanels();
  updateCounters();
}

// ================= HALAMAN 2: PINJAMAN SAYA =================
function setUserLoanFilter(filter) {
  appState.userLoanFilter = filter;
  document.querySelectorAll('.loan-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === filter);
  });
  renderUserLoans();
}
window.setUserLoanFilter = setUserLoanFilter;

function renewUserLoan(loanId) {
  const loan = appState.loans.find(l => l.id === loanId);
  if (!loan) return;

  const today = new Date().toISOString().split('T')[0];
  if (today > loan.dueDate) {
    showToast('Buku telah melewati jatuh tempo dan terkena denda. Harap lunasi denda dan kembalikan buku.', 'error');
    return;
  }

  if (loan.renewed) {
    showToast('Peminjaman buku ini sudah pernah diperpanjang sebelumnya (Maksimal 1 kali).', 'error');
    return;
  }

  const currentDue = new Date(loan.dueDate);
  currentDue.setDate(currentDue.getDate() + 7);
  loan.dueDate = currentDue.toISOString().split('T')[0];
  loan.renewed = true;

  saveLoans();
  showToast(`Masa pinjam "${loan.bookTitle}" berhasil diperpanjang +7 hari hingga ${loan.dueDate}!`, 'success');
  renderUserLoans();
  renderAdminPanels();
  updateCounters();
}
window.renewUserLoan = renewUserLoan;

function renderUserLoans() {
  const container = document.getElementById('userLoansContainer');
  const user = appState.currentMember;
  if (!user) return;

  const userLoans = appState.loans.filter(l => l.memberId === user.id);

  let pendingCount = 0;
  let readyCount = 0;
  let activeCount = 0;
  let overdueCount = 0;
  let returnedCount = 0;
  let totalFine = 0;

  const today = new Date().toISOString().split('T')[0];

  userLoans.forEach(l => {
    if (l.status === 'pending') pendingCount++;
    if (l.status === 'ready') readyCount++;
    if (l.status === 'borrowed') {
      activeCount++;
      if (today > l.dueDate) {
        overdueCount++;
        if (!l.finePaid) {
          const daysLate = Math.max(1, Math.ceil((new Date(today) - new Date(l.dueDate)) / (1000 * 60 * 60 * 24)));
          l.fineAmount = daysLate * FINE_PER_DAY;
          totalFine += l.fineAmount;
        } else {
          l.fineAmount = 0;
        }
      }
    }
    if (l.status === 'returned' || l.status === 'rejected' || l.status === 'cancelled') {
      returnedCount++;
    }
  });

  const countPendingEl = document.getElementById('userCountPending');
  if (countPendingEl) countPendingEl.innerText = pendingCount;
  const countReadyEl = document.getElementById('userCountReady');
  if (countReadyEl) countReadyEl.innerText = readyCount;
  const countActiveEl = document.getElementById('userCountActive');
  if (countActiveEl) countActiveEl.innerText = activeCount;
  const countFineEl = document.getElementById('userCountFine');
  if (countFineEl) countFineEl.innerText = 'Rp ' + totalFine.toLocaleString('id-ID');

  // Update counter badges di Filter bar
  const fcAll = document.getElementById('filterCountAll');
  if (fcAll) fcAll.innerText = userLoans.length;
  const fcPending = document.getElementById('filterCountPending');
  if (fcPending) fcPending.innerText = pendingCount;
  const fcReady = document.getElementById('filterCountReady');
  if (fcReady) fcReady.innerText = readyCount;
  const fcBorrowed = document.getElementById('filterCountBorrowed');
  if (fcBorrowed) fcBorrowed.innerText = activeCount;
  const fcOverdue = document.getElementById('filterCountOverdue');
  if (fcOverdue) fcOverdue.innerText = overdueCount;
  const fcReturned = document.getElementById('filterCountReturned');
  if (fcReturned) fcReturned.innerText = returnedCount;

  // Banner Peringatan Denda Keterlambatan
  const fineBanner = document.getElementById('userFineAlertBanner');
  if (fineBanner) {
    if (totalFine > 0) {
      const firstOverdue = userLoans.find(l => l.status === 'borrowed' && today > l.dueDate && !l.finePaid);
      fineBanner.style.display = 'flex';
      fineBanner.innerHTML = `
        <div style="display:flex; align-items:center; gap:0.85rem;">
          <div style="width:42px; height:42px; border-radius:50%; background:#fee2e2; color:#e11d48; display:flex; align-items:center; justify-content:center; font-size:1.35rem; flex-shrink:0;">
            <i class="fa-solid fa-triangle-exclamation"></i>
          </div>
          <div>
            <strong style="color:#9f1239; font-size:1.05rem; display:block;">Peringatan Denda Keterlambatan: Rp ${totalFine.toLocaleString('id-ID')}</strong>
            <span style="color:#475569; font-size:0.88rem;">Anda memiliki denda keterlambatan buku (Rp 1.000/hari). Silakan bayar secara mandiri via QRIS sekarang atau secara tunai di loket.</span>
          </div>
        </div>
        ${firstOverdue ? `
          <button type="button" class="btn-book-action" style="background:#e11d48; border-color:#e11d48; padding:0.55rem 1.15rem; font-size:0.88rem; white-space:nowrap;" onclick="openFinePaymentModal('${firstOverdue.id}')">
            <i class="fa-solid fa-qrcode"></i> Bayar Denda QRIS
          </button>
        ` : ''}
      `;
    } else {
      fineBanner.style.display = 'none';
      fineBanner.innerHTML = '';
    }
  }

  // Filter list sesuai filter yang dipilih
  let filteredLoans = userLoans;
  const filter = appState.userLoanFilter || 'all';
  if (filter === 'pending') {
    filteredLoans = userLoans.filter(l => l.status === 'pending');
  } else if (filter === 'ready') {
    filteredLoans = userLoans.filter(l => l.status === 'ready');
  } else if (filter === 'borrowed') {
    filteredLoans = userLoans.filter(l => l.status === 'borrowed');
  } else if (filter === 'overdue') {
    filteredLoans = userLoans.filter(l => l.status === 'borrowed' && today > l.dueDate);
  } else if (filter === 'returned') {
    filteredLoans = userLoans.filter(l => l.status === 'returned' || l.status === 'rejected' || l.status === 'cancelled');
  }

  if (filteredLoans.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; background: #ffffff; border: 2px dashed #cbd5e1; border-radius: var(--radius-md);">
        <i class="fa-solid fa-clipboard-list" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 0.75rem;"></i>
        <h3>Tidak Ada Pesanan pada Kategori Ini</h3>
        <p style="color: var(--text-muted); margin-bottom: 1rem;">Tidak ada catatan peminjaman dengan status "${filter}".</p>
        <button class="nav-btn" style="border:1px solid #cbd5e1;" onclick="setUserLoanFilter('all')">
          Tampilkan Semua Pesanan
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredLoans.map(l => {
    let badgeHtml = "";
    let actionBtn = "";

    const isLocker = (l.pickupLocation || '').toLowerCase().includes('locker');

    if (l.status === 'pending') {
      badgeHtml = `<span class="status-badge-lg pending"><i class="fa-solid fa-hourglass-half"></i> Menunggu ACC Petugas</span>`;
      actionBtn = `
        <div style="display:flex; flex-direction:column; gap:0.4rem; align-items:flex-end;">
          <button class="nav-btn" style="border:1px solid #cbd5e1;" onclick="openTicketModal('${l.id}')">
            <i class="fa-solid ${isLocker ? 'fa-qrcode' : 'fa-ticket'}"></i> ${isLocker ? 'Lihat QR Loker' : 'Lihat Bukti Booking'}
          </button>
          <button type="button" class="nav-btn" style="border:1px solid #dc2626; color:#dc2626; background:#fef2f2; font-size:0.82rem; padding:0.35rem 0.65rem;" onclick="promptCancelBooking('${l.id}')">
            <i class="fa-solid fa-ban"></i> Batalkan Pesanan
          </button>
        </div>
      `;
    } else if (l.status === 'ready') {
      badgeHtml = `<span class="status-badge-lg ready"><i class="fa-solid fa-bell"></i> Disetujui (ACC)! Siap Diambil di ${l.pickupLocation}</span>`;
      actionBtn = `
        <div style="display:flex; flex-direction:column; gap:0.4rem; align-items:flex-end;">
          <button type="button" class="btn-book-action" style="background:#15803d;" onclick="openTicketModal('${l.id}')">
            <i class="fa-solid fa-qrcode"></i> ${isLocker ? 'Buka QR Smart Locker' : 'Tunjukkan Tiket'}
          </button>
          <button type="button" class="nav-btn" style="border:1px solid #16a34a; color:#15803d; background:#f0fdf4; font-size:0.82rem; padding:0.35rem 0.65rem;" onclick="confirmMemberPickup('${l.id}')">
            <i class="fa-solid fa-circle-check"></i> ${isLocker ? 'Selesai Ambil dari Loker' : 'Selesai Ambil Buku'}
          </button>
        </div>
      `;
    } else if (l.status === 'borrowed') {
      const isOverdue = today > l.dueDate;
      if (isOverdue && !l.finePaid) {
        const daysLate = Math.max(1, Math.ceil((new Date(today) - new Date(l.dueDate)) / (1000 * 60 * 60 * 24)));
        badgeHtml = `<span class="status-badge-lg overdue"><i class="fa-solid fa-triangle-exclamation"></i> Terlambat ${daysLate} Hari! Denda: Rp ${l.fineAmount.toLocaleString('id-ID')} (Rp 1.000/hari)</span>`;
        actionBtn = `
          <div style="display:flex; flex-direction:column; gap:0.4rem; align-items:flex-end;">
            <button type="button" class="btn-book-action" style="background:#dc2626; border-color:#dc2626; font-size:0.82rem; padding:0.35rem 0.65rem;" onclick="openFinePaymentModal('${l.id}')">
              <i class="fa-solid fa-qrcode"></i> Bayar Denda via QRIS
            </button>
            <button type="button" class="nav-btn" style="border:1px solid #0f172a; color:#0f172a; background:#f8fafc; font-size:0.82rem; padding:0.35rem 0.65rem;" onclick="memberReturnBook('${l.id}')">
              <i class="fa-solid fa-rotate-left"></i> Kembalikan Buku
            </button>
          </div>
        `;
      } else if (isOverdue && l.finePaid) {
        badgeHtml = `<span class="status-badge-lg active" style="background:#f0fdf4; color:#15803d; border:1px solid #bbf7d0;"><i class="fa-solid fa-circle-check"></i> Denda LUNAS via QRIS (Batas: ${l.dueDate})</span>`;
        actionBtn = `
          <div style="display:flex; flex-direction:column; gap:0.4rem; align-items:flex-end;">
            <button type="button" class="nav-btn" style="border:1px solid #cbd5e1;" onclick="openTicketModal('${l.id}')">
              <i class="fa-solid fa-circle-info"></i> Info Pengembalian
            </button>
            <button type="button" class="nav-btn" style="border:1px solid #0f172a; color:#0f172a; background:#f8fafc; font-size:0.82rem; padding:0.35rem 0.65rem;" onclick="memberReturnBook('${l.id}')">
              <i class="fa-solid fa-rotate-left"></i> Kembalikan Buku
            </button>
          </div>
        `;
      } else {
        badgeHtml = `<span class="status-badge-lg active"><i class="fa-solid fa-box-check"></i> <strong>Buku sedang dipinjam</strong> (Batas: ${l.dueDate})</span>`;
        actionBtn = `
          <div style="display:flex; flex-direction:column; gap:0.4rem; align-items:flex-end;">
            ${!l.renewed ? `
              <button type="button" class="nav-btn" style="border:1px solid #2563eb; color:#2563eb; background:#eff6ff; font-size:0.82rem; padding:0.35rem 0.65rem;" onclick="renewUserLoan('${l.id}')">
                <i class="fa-solid fa-clock-rotate-left"></i> Perpanjang +7 Hari
              </button>
            ` : `
              <span style="font-size:0.75rem; color:#15803d; font-weight:700;"><i class="fa-solid fa-circle-check"></i> Sudah Diperpanjang</span>
            `}
            <button type="button" class="nav-btn" style="border:1px solid #cbd5e1;" onclick="openTicketModal('${l.id}')">
              <i class="fa-solid fa-circle-info"></i> Info Pengembalian
            </button>
            <button type="button" class="nav-btn" style="border:1px solid #0f172a; color:#0f172a; background:#f8fafc; font-size:0.82rem; padding:0.35rem 0.65rem;" onclick="memberReturnBook('${l.id}')">
              <i class="fa-solid fa-rotate-left"></i> Kembalikan Buku
            </button>
          </div>
        `;
      }
    } else if (l.status === 'returned') {
      badgeHtml = `<span class="status-badge-lg returned"><i class="fa-solid fa-circle-check"></i> Selesai Dikembalikan</span>`;
    } else if (l.status === 'rejected') {
      badgeHtml = `<span class="status-badge-lg overdue"><i class="fa-solid fa-xmark"></i> Pesanan Ditolak Petugas</span>`;
    } else if (l.status === 'cancelled') {
      badgeHtml = `<span class="status-badge-lg" style="background:#f1f5f9; color:#64748b; border:1px solid #cbd5e1;"><i class="fa-solid fa-ban"></i> Dibatalkan oleh Anda</span>`;
    }

    return `
      <div class="loan-ticket-card">
        <div class="ticket-code-badge">
          <span class="ticket-code-label">Kode Booking</span>
          <span class="ticket-code-val">${l.id}</span>
        </div>

        <div class="loan-details">
          <h4>${l.bookTitle}</h4>
          <div class="loan-meta-grid">
            <div class="loan-meta-item">Jumlah: <strong style="color:var(--primary);">${l.quantity || 1} Eksemplar</strong></div>
            <div class="loan-meta-item">Pengambilan: <strong>${l.pickupLocation}</strong></div>
            <div class="loan-meta-item">Tgl Pesan: <strong>${l.bookingDate}</strong></div>
            ${l.dueDate ? `<div class="loan-meta-item">Jatuh Tempo: <strong>${l.dueDate}</strong></div>` : ''}
          </div>
          <div style="margin-top:0.75rem;">${badgeHtml}</div>
        </div>

        <div>
          ${actionBtn}
        </div>
      </div>
    `;
  }).join('');
}

// ================= HALAMAN 3: ADMIN MEJA PETUGAS (ACC PINJAMAN) =================
function setAdminTab(subtab) {
  appState.adminSubtab = subtab;

  const btnReq = document.getElementById('subtabRequests');
  const btnAct = document.getElementById('subtabActiveLoans');
  const btnInv = document.getElementById('subtabInventory');

  if (btnReq) btnReq.classList.toggle('active', subtab === 'requests');
  if (btnAct) btnAct.classList.toggle('active', subtab === 'active');
  if (btnInv) btnInv.classList.toggle('active', subtab === 'inventory');

  const panReq = document.getElementById('adminPanelRequests');
  const panAct = document.getElementById('adminPanelActive');
  const panInv = document.getElementById('adminPanelInventory');

  if (panReq) panReq.classList.toggle('active', subtab === 'requests');
  if (panAct) panAct.classList.toggle('active', subtab === 'active');
  if (panInv) panInv.classList.toggle('active', subtab === 'inventory');

  renderAdminPanels();
}
window.setAdminSubtab = setAdminTab;

function renderAdminPanels() {
  renderAdminRequests();
  renderAdminActiveCirculation();
  renderAdminBooksTable();
  updateCounters();
}

function renderAdminRequests() {
  const container = document.getElementById('adminRequestsList');
  if (!container) return;

  const pendingRequests = appState.loans.filter(l => l.status === 'pending');

  if (pendingRequests.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2.5rem; background: #ffffff; border: 2px dashed #cbd5e1; border-radius: var(--radius-md);">
        <i class="fa-solid fa-check-double" style="font-size: 2.5rem; color: #15803d; margin-bottom: 0.5rem;"></i>
        <h3>Semua Permohonan Sudah Di-ACC!</h3>
        <p style="color: var(--text-muted);">Tidak ada antrean peminjaman buku yang tertunda saat ini.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = pendingRequests.map(l => {
    return `
      <div class="admin-request-card">
        <div class="admin-req-info">
          <span class="member-tag">
            <i class="fa-solid fa-user"></i> ${l.memberName} (No. Anggota: ${l.memberId})
          </span>
          <h4>${l.bookTitle}</h4>
          <div class="admin-req-meta">
            Jumlah: <strong style="color:var(--primary);">${l.quantity || 1} Eksemplar</strong> &bull;
            Lokasi Ambil: <strong>${l.pickupLocation}</strong> &bull; 
            Rak Buku: <strong>${l.rack}</strong> &bull; 
            Durasi: <strong>${l.durationDays} Hari</strong>
          </div>
        </div>

        <div class="admin-actions-group">
          <button type="button" class="btn-acc" onclick="adminAccLoan('${l.id}')">
            <i class="fa-solid fa-circle-check"></i> Setujui (ACC Pinjaman)
          </button>
          <button type="button" class="btn-reject" onclick="adminRejectLoan('${l.id}')">
            <i class="fa-solid fa-xmark"></i> Tolak
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function adminAccLoan(loanId) {
  const loan = appState.loans.find(l => l.id === loanId);
  if (!loan) return;

  loan.status = "ready";
  loan.pickupDeadline = getDateOffset(2); // Batas ambil 2x24 jam

  saveLoans();
  showToast(`Permohonan #${loan.id} (${loan.quantity || 1} buku) untuk ${loan.memberName} telah DI-ACC! Siap diambil di ${loan.pickupLocation}.`, 'success');
  renderAdminPanels();
  renderUserLoans();
  renderCatalog();
  updateCounters();
}

function adminRejectLoan(loanId) {
  const loan = appState.loans.find(l => l.id === loanId);
  if (!loan) return;

  // Ubah status loan menjadi ditolak
  loan.status = "rejected";

  // Kembalikan stok sesuai quantity
  const book = appState.books.find(b => b.id === loan.bookId);
  const qty = loan.quantity || 1;
  if (book && book.borrowed >= qty) {
    book.borrowed -= qty;
    saveBooks();
  }

  saveLoans();
  showToast(`Permohonan #${loan.id} untuk ${loan.memberName} telah DITOLAK. Stok buku dikembalikan.`, 'info');
  renderAdminPanels();
  renderUserLoans();
  renderCatalog();
  updateCounters();
}

function setAdminActiveFilter(filter) {
  appState.adminActiveFilter = filter;
  document.querySelectorAll('[data-admin-filter]').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-admin-filter') === filter);
  });
  renderAdminActiveCirculation();
}
window.setAdminActiveFilter = setAdminActiveFilter;

function renderAdminActiveCirculation() {
  const container = document.getElementById('adminActiveList');
  if (!container) return;

  const today = new Date().toISOString().split('T')[0];
  const allActiveLoans = appState.loans.filter(l => l.status === 'ready' || l.status === 'borrowed');

  let readyCount = 0;
  let borrowedCount = 0;
  let overdueCount = 0;

  allActiveLoans.forEach(l => {
    if (l.status === 'ready') readyCount++;
    if (l.status === 'borrowed') {
      borrowedCount++;
      if (today > l.dueDate) overdueCount++;
    }
  });

  // Update counters pada toolbar sirkulasi
  const ccAll = document.getElementById('adminCircCountAll');
  if (ccAll) ccAll.innerText = allActiveLoans.length;
  const ccReady = document.getElementById('adminCircCountReady');
  if (ccReady) ccReady.innerText = readyCount;
  const ccBorrowed = document.getElementById('adminCircCountBorrowed');
  if (ccBorrowed) ccBorrowed.innerText = borrowedCount;
  const ccOverdue = document.getElementById('adminCircCountOverdue');
  if (ccOverdue) ccOverdue.innerText = overdueCount;

  // Filter sesuai pilihan tab
  const filter = appState.adminActiveFilter || 'all';
  let filteredLoans = allActiveLoans;
  if (filter === 'ready') {
    filteredLoans = allActiveLoans.filter(l => l.status === 'ready');
  } else if (filter === 'borrowed') {
    filteredLoans = allActiveLoans.filter(l => l.status === 'borrowed');
  } else if (filter === 'overdue') {
    filteredLoans = allActiveLoans.filter(l => l.status === 'borrowed' && today > l.dueDate);
  }

  if (filteredLoans.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2.5rem; background: #ffffff; border: 2px dashed #cbd5e1; border-radius: var(--radius-md);">
        <h3>Tidak Ada Sirkulasi pada Kategori Ini</h3>
        <p style="color: var(--text-muted);">Tidak ditemukan data sirkulasi dengan filter "${filter}".</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredLoans.map(l => {
    const isReady = l.status === 'ready';
    const isOverdue = !isReady && today > l.dueDate;
    let daysLate = 0;
    let fineAmount = 0;
    let daysLeft = 0;

    if (isOverdue) {
      daysLate = Math.max(1, Math.ceil((new Date(today) - new Date(l.dueDate)) / (1000 * 60 * 60 * 24)));
      fineAmount = daysLate * FINE_PER_DAY;
      if (!l.finePaid) l.fineAmount = fineAmount;
    } else if (!isReady) {
      daysLeft = Math.max(0, Math.ceil((new Date(l.dueDate) - new Date(today)) / (1000 * 60 * 60 * 24)));
    }

    return `
      <div class="admin-request-card">
        <div class="admin-req-info">
          <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap; margin-bottom:0.35rem;">
            <span class="member-tag">
              <i class="fa-solid fa-user"></i> ${l.memberName} (ID: ${l.memberId})
            </span>
            <span style="font-size:0.8rem; color:#64748b; font-weight:600;">
              <i class="fa-solid fa-location-dot"></i> ${l.pickupLocation || 'Loket Sirkulasi'}
            </span>
          </div>

          <h4 style="margin: 0.2rem 0 0.5rem 0;">${l.bookTitle} <small style="color:var(--text-muted); font-weight:600;">(${l.quantity || 1} Eksemplar)</small></h4>
          
          <div class="admin-req-meta" style="display:flex; align-items:center; gap:0.6rem; flex-wrap:wrap;">
            ${isReady ? `
              <span class="admin-fine-badge on-time" style="background:#eff6ff; color:#2563eb; border-color:#bfdbfe;">
                <i class="fa-solid fa-bell"></i> Siap Diambil di ${l.pickupLocation} (Batas Ambil: ${l.pickupDeadline || '2 Hari'})
              </span>
            ` : isOverdue ? (
              l.finePaid ? `
                <span class="admin-fine-badge paid">
                  <i class="fa-solid fa-circle-check"></i> Terlambat ${daysLate} Hari — Denda Rp ${(l.paidAmount || fineAmount).toLocaleString('id-ID')} LUNAS via QRIS
                </span>
              ` : `
                <span class="admin-fine-badge overdue">
                  <i class="fa-solid fa-triangle-exclamation"></i> TERLAMBAT ${daysLate} HARI — Denda: Rp ${fineAmount.toLocaleString('id-ID')} (BELUM LUNAS)
                </span>
              `
            ) : `
              <span class="admin-fine-badge on-time">
                <i class="fa-solid fa-calendar-check"></i> Dipinjam • Sisa Waktu: ${daysLeft} Hari (Jatuh Tempo: ${l.dueDate})
              </span>
            `}

            ${l.renewed ? `<span style="font-size:0.75rem; color:#15803d; font-weight:700;"><i class="fa-solid fa-clock-rotate-left"></i> Diperpanjang 1x</span>` : ''}
          </div>
        </div>

        <div class="admin-actions-group">
          ${isReady ? `
            <button type="button" class="btn-finish-pickup" onclick="adminMarkPickedUp('${l.id}')">
              <i class="fa-solid fa-box-open"></i> Konfirmasi Buku Sudah Diambil
            </button>
          ` : `
            <button type="button" class="btn-return-book" onclick="adminProcessReturn('${l.id}')">
              <i class="fa-solid fa-box-archive"></i> Terima Pengembalian Buku
            </button>
          `}
        </div>
      </div>
    `;
  }).join('');
}

function adminMarkPickedUp(loanId) {
  const loan = appState.loans.find(l => l.id === loanId);
  if (!loan) return;

  loan.status = "borrowed";
  loan.borrowDate = getDateOffset(0);
  loan.dueDate = getDateOffset(loan.durationDays || 7);

  saveLoans();
  showToast(`Buku #${loan.id} telah diserahkan ke ${loan.memberName}. Masa pinjam aktif hingga ${loan.dueDate}.`, 'success');
  renderAdminPanels();
  renderUserLoans();
  renderCatalog();
  updateCounters();
}

function adminProcessReturn(loanId) {
  const loan = appState.loans.find(l => l.id === loanId);
  if (!loan) return;

  const today = new Date().toISOString().split('T')[0];

  // Periksa apakah buku terlambat dan denda belum dibayar
  if (today > loan.dueDate && !loan.finePaid) {
    const daysLate = Math.max(1, Math.ceil((new Date(today) - new Date(loan.dueDate)) / (1000 * 60 * 60 * 24)));
    const fineAmount = daysLate * FINE_PER_DAY;

    const confirmed = confirm(
      `[PEMBERITAHUAN KASIR DENDA SIRKULASI]\n\n` +
      `Buku: "${loan.bookTitle}"\n` +
      `Peminjam: ${loan.memberName} (${loan.memberId})\n` +
      `Status: Terlambat ${daysLate} hari\n` +
      `Total Denda: Rp ${fineAmount.toLocaleString('id-ID')}\n\n` +
      `Apakah denda tunai sebesar Rp ${fineAmount.toLocaleString('id-ID')} sudah diterima oleh Petugas di meja loket perpustakaan?`
    );

    if (!confirmed) {
      showToast('Pengembalian dibatalkan. Konfirmasi pembayaran denda terlebih dahulu.', 'error');
      return;
    }

    loan.finePaid = true;
    loan.paidAmount = fineAmount;
    loan.finePaymentMethod = 'Tunai di Meja Loket';
    loan.fineAmount = 0;
  }

  loan.status = "returned";
  loan.returnDate = getDateOffset(0);

  // Restorasi stok buku sesuai quantity
  const book = appState.books.find(b => b.id === loan.bookId);
  const qty = loan.quantity || 1;
  if (book && book.borrowed >= qty) {
    book.borrowed -= qty;
    saveBooks();
  }

  saveLoans();
  showToast(`Buku "${loan.bookTitle}" berhasil dikembalikan ke perpustakaan. Stok buku telah pulih.`, 'success');
  renderAdminPanels();
  renderUserLoans();
  renderCatalog();
  updateCounters();
}

// ================= ADMIN: INVENTARIS BUKU & PENCARIAN =================
function handleAdminBookSearch(query) {
  appState.adminBookSearchQuery = (query || '').trim();
  renderAdminBooksTable();
}
window.handleAdminBookSearch = handleAdminBookSearch;

function renderAdminBooksTable() {
  const tbody = document.getElementById('adminBooksTableBody');
  if (!tbody) return;

  let books = appState.books;
  if (appState.adminBookSearchQuery) {
    const q = appState.adminBookSearchQuery.toLowerCase();
    books = books.filter(b =>
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      b.category.toLowerCase().includes(q) ||
      b.rack.toLowerCase().includes(q)
    );
  }

  const countEl = document.getElementById('adminBooksCount');
  if (countEl) countEl.innerText = books.length;

  if (books.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align:center; padding:2rem; color:var(--text-muted);">
          Tidak ditemukan buku yang cocok dengan kata kunci pencarian.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = books.map(b => {
    const avail = Math.max(0, b.stock - b.borrowed);
    return `
      <tr>
        <td>
          <div style="display:flex; align-items:center; gap:0.75rem;">
            <img src="${b.cover}" style="width:36px; height:48px; object-fit:cover; border-radius:4px;">
            <strong>${b.title}</strong>
          </div>
        </td>
        <td>${b.category}</td>
        <td>${b.author}</td>
        <td><code>${b.rack}</code></td>
        <td>${b.stock} eks.</td>
        <td><strong style="color:${avail > 0 ? '#15803d' : '#b91c1c'};">${avail} eks.</strong></td>
        <td>
          <div style="display:flex; gap:0.4rem; align-items:center;">
            <button type="button" class="btn-book-action" style="padding:0.35rem 0.75rem; font-size:0.82rem; background:var(--primary); border-color:var(--primary);" onclick="adminEditBook('${b.id}')">
              <i class="fa-solid fa-pen-to-square"></i> Edit
            </button>
            <button type="button" class="btn-reject" style="padding:0.35rem 0.75rem; font-size:0.82rem;" onclick="adminDeleteBook('${b.id}')">
              <i class="fa-solid fa-trash-can"></i> Hapus
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// ================= ADMIN: CETAK LAPORAN SIRKULASI =================
function openPrintReportModal() {
  const area = document.getElementById('printDocumentArea');
  if (!area) return;

  const today = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const totalLoans = appState.loans.length;
  const borrowed = appState.loans.filter(l => l.status === 'borrowed').length;
  const returned = appState.loans.filter(l => l.status === 'returned').length;
  let totalFinesCollected = 0;

  appState.loans.forEach(l => {
    if (l.finePaid && l.paidAmount) totalFinesCollected += l.paidAmount;
  });

  area.innerHTML = `
    <div class="print-report-header">
      <h2>Dinas Perpustakaan dan Kearsipan Daerah</h2>
      <h3 style="font-size:1.15rem; color:var(--primary); margin:0.25rem 0;">SISTEM MANAJEMEN SIRKULASI PUSTAKAKU</h3>
      <p>Laporan Rekapitulasi Sirkulasi Peminjaman, Smart Locker 24 Jam & Denda Keterlambatan</p>
      <div style="font-size:0.82rem; color:#64748b; margin-top:0.45rem;">
        Dicetak pada: <strong>${today}</strong> • Dicetak oleh: <strong>Petugas Sirkulasi</strong>
      </div>
    </div>

    <div class="print-summary-box">
      <div class="print-summary-item">
        <span>Total Riwayat</span>
        <strong>${totalLoans} Transaksi</strong>
      </div>
      <div class="print-summary-item">
        <span>Buku Sedang Dipinjam</span>
        <strong style="color:#2563eb;">${borrowed} Judul</strong>
      </div>
      <div class="print-summary-item">
        <span>Selesai Dikembalikan</span>
        <strong style="color:#15803d;">${returned} Judul</strong>
      </div>
      <div class="print-summary-item">
        <span>Total Denda Lunas</span>
        <strong style="color:#e11d48;">Rp ${totalFinesCollected.toLocaleString('id-ID')}</strong>
      </div>
    </div>

    <table class="print-table">
      <thead>
        <tr>
          <th style="width:28px; text-align:center;">No</th>
          <th>Kode Booking</th>
          <th>Nama Anggota</th>
          <th>Judul Koleksi Buku</th>
          <th>Lokasi Pengambilan</th>
          <th>Tgl Pinjam</th>
          <th>Jatuh Tempo</th>
          <th>Status</th>
          <th>Denda</th>
        </tr>
      </thead>
      <tbody>
        ${appState.loans.map((l, idx) => `
          <tr>
            <td style="text-align:center;">${idx + 1}</td>
            <td><code>${l.id}</code></td>
            <td><strong>${l.memberName}</strong><br><small style="color:#64748b;">NIM: ${l.memberId}</small></td>
            <td>${l.bookTitle} (${l.quantity || 1} eks.)</td>
            <td>${l.pickupLocation || 'Loket Perpustakaan'}</td>
            <td>${l.borrowDate || l.bookingDate}</td>
            <td>${l.dueDate || '-'}</td>
            <td>
              ${l.status === 'borrowed' ? 'Sedang Dipinjam' :
                l.status === 'ready' ? 'Siap Diambil' :
                l.status === 'pending' ? 'Menunggu ACC' :
                l.status === 'returned' ? 'Selesai Dikembalikan' :
                l.status === 'rejected' ? 'Ditolak Petugas' : 'Dibatalkan'}
            </td>
            <td>
              ${l.finePaid ? `<strong style="color:#15803d;">Lunas (Rp ${(l.paidAmount || l.fineAmount || 0).toLocaleString('id-ID')})</strong>` :
                (l.fineAmount && l.fineAmount > 0) ? `<strong style="color:#b91c1c;">Tertunggak Rp ${l.fineAmount.toLocaleString('id-ID')}</strong>` : '-'}
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>

    <div class="print-signature-section">
      <div class="print-signature-block">
        <p>Mengetahui,<br><strong>Kepala Perpustakaan Daerah</strong></p>
        <div class="print-signature-space"></div>
        <p><u>Drs. H. Hendra Wijaya, M.Hum</u><br>NIP. 19780512 200212 1 003</p>
      </div>
      <div class="print-signature-block">
        <p>Penanggung Jawab Sirkulasi,<br><strong>Petugas Meja Layanan</strong></p>
        <div class="print-signature-space"></div>
        <p><u>Petugas Sirkulasi & Loker</u><br>ID Staf. PETUGAS-01</p>
      </div>
    </div>
  `;

  openModal('printReportModal');
}
window.openPrintReportModal = openPrintReportModal;

function triggerPrintReport() {
  window.print();
}
window.triggerPrintReport = triggerPrintReport;

function openAddBookModal() {
  openModal('addBookModal');
}

function handleAddBookSubmit(e) {
  e.preventDefault();
  const title = document.getElementById('newBookTitle').value.trim();
  const cat = document.getElementById('newBookCategory').value;
  const author = document.getElementById('newBookAuthor').value.trim();
  const rack = document.getElementById('newBookRack').value.trim();
  const stock = parseInt(document.getElementById('newBookStock').value, 10);
  const desc = document.getElementById('newBookDesc').value.trim();

  const newBook = {
    id: "BK-" + Math.floor(10 + Math.random() * 90),
    title,
    category: cat,
    author,
    rack,
    stock,
    borrowed: 0,
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    desc
  };

  appState.books.unshift(newBook);
  saveBooks();
  closeModal('addBookModal');
  showToast(`Buku "${title}" berhasil ditambahkan ke katalog perpustakaan!`, 'success');
  renderCatalog();
  renderAdminPanels();
}

function adminDeleteBook(bookId) {
  const book = appState.books.find(b => b.id === bookId);
  if (!book) return;

  const modal = document.getElementById('deleteBookModal');
  if (modal) {
    const titleEl = document.getElementById('deleteBookModalTitle');
    const warningEl = document.getElementById('deleteBookBorrowedWarning');
    const descEl = document.getElementById('deleteBookModalDesc');
    const confirmBtn = document.getElementById('btnConfirmDeleteBookAction');

    if (titleEl) titleEl.innerText = `"${book.title}" (${book.category})`;

    if (warningEl) {
      if (book.borrowed > 0) {
        warningEl.style.display = 'block';
        warningEl.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> <strong>Catatan:</strong> Buku ini memiliki <b>${book.borrowed} eksemplar</b> dalam masa peminjaman. Tetap lanjutkan untuk menghapus buku dari katalog?`;
      } else {
        warningEl.style.display = 'none';
      }
    }

    if (descEl) {
      descEl.innerText = `Apakah Anda yakin ingin menghapus buku ini secara permanen dari inventaris perpustakaan?`;
    }

    if (confirmBtn) {
      confirmBtn.onclick = function () {
        executeDeleteBook(bookId);
      };
    }

    openModal('deleteBookModal');
  } else {
    // Fallback konfirmasi langsung jika modal tidak terpasang
    if (confirm(`Yakin ingin menghapus buku "${book.title}" dari sistem perpustakaan?`)) {
      executeDeleteBook(bookId);
    }
  }
}

function executeDeleteBook(bookId) {
  const book = appState.books.find(b => b.id === bookId);
  const bookTitle = book ? book.title : 'Buku';

  // Hapus buku dari katalog aktif
  appState.books = appState.books.filter(b => b.id !== bookId);
  saveBooks();

  // Bersihkan data permohonan pinjam terkait jika masih pending/ready
  if (appState.loans && appState.loans.length > 0) {
    let loansModified = false;
    appState.loans.forEach(l => {
      if (l.bookId === bookId && (l.status === 'pending' || l.status === 'ready')) {
        l.status = 'rejected';
        l.rejectReason = 'Buku telah dihapus dari inventaris oleh petugas perpustakaan.';
        loansModified = true;
      }
    });
    if (loansModified) saveLoans();
  }

  closeModal('deleteBookModal');
  showToast(`Buku "${bookTitle}" berhasil dihapus dari perpustakaan.`, 'success');
  renderAdminPanels();
  renderCatalog();
  updateCounters();
}

window.adminDeleteBook = adminDeleteBook;
window.executeDeleteBook = executeDeleteBook;

// ================= EDIT BUKU (CRUD UPDATE) =================
function adminEditBook(bookId) {
  const book = appState.books.find(b => b.id === bookId);
  if (!book) return;

  const inputId = document.getElementById('editBookId');
  const inputTitle = document.getElementById('editBookTitle');
  const inputCategory = document.getElementById('editBookCategory');
  const inputAuthor = document.getElementById('editBookAuthor');
  const inputRack = document.getElementById('editBookRack');
  const inputStock = document.getElementById('editBookStock');
  const inputDesc = document.getElementById('editBookDesc');

  if (inputId) inputId.value = book.id;
  if (inputTitle) inputTitle.value = book.title;
  if (inputCategory) inputCategory.value = book.category;
  if (inputAuthor) inputAuthor.value = book.author;
  if (inputRack) inputRack.value = book.rack;
  if (inputStock) {
    inputStock.value = book.stock;
    const minStock = Math.max(1, book.borrowed || 0);
    inputStock.min = minStock;
  }
  if (inputDesc) inputDesc.value = book.desc || '';

  const hintEl = document.getElementById('editBookStockHint');
  if (hintEl) {
    if (book.borrowed > 0) {
      hintEl.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color:#d97706;"></i> Buku ini sedang dipinjam sebanyak <strong>${book.borrowed} eksemplar</strong>. Stok fisik total tidak boleh kurang dari ${book.borrowed}.`;
    } else {
      hintEl.innerHTML = `<i class="fa-solid fa-circle-check" style="color:#16a34a;"></i> Semua eksemplar saat ini tersedia lengkap di rak.`;
    }
  }

  openModal('editBookModal');
}

function handleEditBookSubmit(e) {
  e.preventDefault();
  const bookId = document.getElementById('editBookId').value;
  const book = appState.books.find(b => b.id === bookId);
  if (!book) return;

  const title = document.getElementById('editBookTitle').value.trim();
  const category = document.getElementById('editBookCategory').value;
  const author = document.getElementById('editBookAuthor').value.trim();
  const rack = document.getElementById('editBookRack').value.trim();
  const stock = parseInt(document.getElementById('editBookStock').value, 10);
  const desc = document.getElementById('editBookDesc').value.trim();

  if (stock < (book.borrowed || 0)) {
    showToast(`Stok tidak boleh lebih kecil dari jumlah buku yang sedang dipinjam (${book.borrowed} eks).`, 'error');
    return;
  }

  book.title = title;
  book.category = category;
  book.author = author;
  book.rack = rack;
  book.stock = stock;
  book.desc = desc;

  // Sinkronkan judul buku dan rak di transaksi pinjam aktif
  if (appState.loans && appState.loans.length > 0) {
    appState.loans.forEach(l => {
      if (l.bookId === bookId) {
        l.bookTitle = title;
        l.rack = rack;
      }
    });
    saveLoans();
  }

  saveBooks();
  closeModal('editBookModal');
  showToast(`Data buku "${title}" berhasil diperbarui!`, 'success');

  renderAdminPanels();
  renderCatalog();
  updateCounters();
}

window.adminEditBook = adminEditBook;
window.handleEditBookSubmit = handleEditBookSubmit;

// ================= PEMBAYARAN DENDA VIA QRIS =================
function openFinePaymentModal(loanId) {
  const loan = appState.loans.find(l => l.id === loanId);
  if (!loan) return;

  const today = new Date().toISOString().split('T')[0];
  const daysLate = Math.max(1, Math.ceil((new Date(today) - new Date(loan.dueDate)) / (1000 * 60 * 60 * 24)));
  const fineAmount = daysLate * FINE_PER_DAY;
  loan.fineAmount = fineAmount;

  const amountEl = document.getElementById('fineModalAmount');
  if (amountEl) amountEl.innerText = `Rp ${fineAmount.toLocaleString('id-ID')}`;

  const detailEl = document.getElementById('fineModalDetail');
  if (detailEl) {
    detailEl.innerHTML = `
      <strong>${loan.bookTitle}</strong> (Kode: ${loan.id})<br>
      <span>Terlambat: <strong>${daysLate} hari</strong> &bull; Tarif: Rp 1.000 / hari</span>
    `;
  }

  const confirmBtn = document.getElementById('btnConfirmFinePayment');
  if (confirmBtn) {
    confirmBtn.onclick = function () {
      confirmFinePayment(loanId);
    };
  }

  openModal('finePaymentModal');
}

function confirmFinePayment(loanId) {
  const loan = appState.loans.find(l => l.id === loanId);
  if (!loan) return;

  const paidAmount = loan.fineAmount || 1000;
  loan.finePaid = true;
  loan.paidAmount = paidAmount;
  loan.fineAmount = 0;
  saveLoans();

  closeModal('finePaymentModal');
  showToast(`Pembayaran denda sebesar Rp ${paidAmount.toLocaleString('id-ID')} untuk "${loan.bookTitle}" berhasil diverifikasi LUNAS!`, 'success');

  renderUserLoans();
  renderAdminPanels();
  updateCounters();
}

window.openFinePaymentModal = openFinePaymentModal;
window.confirmFinePayment = confirmFinePayment;

// ================= BATALKAN PESANAN OLEH ANGGOTA =================
function promptCancelBooking(loanId) {
  const loan = appState.loans.find(l => l.id === loanId);
  if (!loan) return;

  const modal = document.getElementById('cancelBookingModal');
  if (modal) {
    const titleEl = document.getElementById('cancelBookingModalTitle');
    if (titleEl) titleEl.innerText = `"${loan.bookTitle}" (${loan.quantity || 1} Eksemplar)`;

    const confirmBtn = document.getElementById('btnConfirmCancelBooking');
    if (confirmBtn) {
      confirmBtn.onclick = function () {
        executeCancelBooking(loanId);
      };
    }
    openModal('cancelBookingModal');
  } else {
    if (confirm(`Batalkan pemesanan buku "${loan.bookTitle}"? Kuota buku akan dikembalikan.`)) {
      executeCancelBooking(loanId);
    }
  }
}

function executeCancelBooking(loanId) {
  const loan = appState.loans.find(l => l.id === loanId);
  if (!loan || loan.status !== 'pending') return;

  // Kembalikan stok buku
  const book = appState.books.find(b => b.id === loan.bookId);
  const qty = loan.quantity || 1;
  if (book && book.borrowed >= qty) {
    book.borrowed -= qty;
    saveBooks();
  }

  loan.status = 'cancelled';
  saveLoans();

  closeModal('cancelBookingModal');
  showToast(`Pemesanan buku "${loan.bookTitle}" berhasil dibatalkan. Kuota buku telah dikembalikan ke katalog.`, 'info');

  renderCatalog();
  renderUserLoans();
  renderAdminPanels();
  updateCounters();
}

window.promptCancelBooking = promptCancelBooking;
window.executeCancelBooking = executeCancelBooking;

// ================= COUNTERS & BADGES =================
function updateCounters() {
  const pendingLoans = appState.loans.filter(l => l.status === 'pending');
  const readyLoans = appState.loans.filter(l => l.status === 'ready');
  const borrowedLoans = appState.loans.filter(l => l.status === 'borrowed');

  const badgeAdminPending = document.getElementById('badgeAdminPending');
  if (badgeAdminPending) badgeAdminPending.innerText = pendingLoans.length;

  const adminPendingCounter = document.getElementById('adminPendingCounter');
  if (adminPendingCounter) adminPendingCounter.innerText = pendingLoans.length;

  // Stats for standalone admin.html page
  const statPending = document.getElementById('adminStatPending');
  if (statPending) statPending.innerText = pendingLoans.length;

  const statReady = document.getElementById('adminStatReady');
  if (statReady) statReady.innerText = readyLoans.length;

  const statBorrowed = document.getElementById('adminStatBorrowed');
  if (statBorrowed) statBorrowed.innerText = borrowedLoans.length;

  const statBooks = document.getElementById('adminStatBooks');
  if (statBooks) statBooks.innerText = appState.books.length;

  if (appState.currentMember) {
    const userActive = appState.loans.filter(l => l.memberId === appState.currentMember.id && (l.status === 'pending' || l.status === 'ready' || l.status === 'borrowed'));
    const badgeMyLoans = document.getElementById('badgeMyLoans');
    if (badgeMyLoans) badgeMyLoans.innerText = userActive.length;
  }
}

// ================= MODAL HELPER =================
function openModal(id) {
  document.getElementById(id)?.classList.add('open');
}

function closeModal(id) {
  document.getElementById(id)?.classList.remove('open');
}

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-backdrop')) {
    e.target.classList.remove('open');
  }
});

// ================= TOAST NOTIFICATION =================
// ================= TOAST NOTIFICATION =================
function showToast(msg, type = 'info') {
  const wrapper = document.getElementById('toastWrapper');
  if (!wrapper) return;
  const toast = document.createElement('div');
  toast.className = `simple-toast ${type}`;
  toast.innerHTML = `
    <i class="fa-solid ${type === 'success' ? 'fa-circle-check' : type === 'error' ? 'fa-triangle-exclamation' : 'fa-circle-info'}"></i>
    <span>${msg}</span>
  `;
  wrapper.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ================= LISTENERS =================
function setupEventListeners() {
  const opacInput = document.getElementById('opacSearchInput');
  const clearBtn = document.getElementById('btnClearSearch');

  if (opacInput) {
    opacInput.addEventListener('input', () => {
      appState.searchQuery = opacInput.value.trim();
      if (clearBtn) clearBtn.style.display = opacInput.value ? 'block' : 'none';
      renderCatalog();
    });
  }
}

// ================= BOOTSTRAP =================
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});
