import foto from "../satria.jpg";

export default function Hero() {
    return (
        <div className="container mx-auto p-2 text-center">
            <h1 className="text-gray-300 font-bold">CV ONLINE</h1>
            <h2 className="text-3x1">Muhammad Satria Nugraha</h2>
            <Profile />
            <p>
            Hallo gezz Saya adalah seorang mahasiswa semester 5 jurusan sistem informasi, saya sanagt suka dengan makanan ayam crispy dan mie instan, selain itu saya juga sangat suka traveling dan olahraga seperti berenang, bola, gym.
            Dari kecil saya memiliki cita-cita menjadi seorang polisi namun belum rezekinya saya, tetapi tidak apa apa saya masih punya mimpi menjadi seorang programer karena teknologi sekarang sangatlah berkembang pesat maka dari itu kenapa saya memilih jurusan sistem informasi, ouh iyaa gezz kalau kalian ingin sukses jangan lupa minta daoa orangtua dan doa kepada Allah, berbakt pada orangtua dan jangan tinggalkan 24434 nya ya hehe 
            </p>
        </div>
    );
}

function Profile() {
    return <img src={foto.src} alt="Muhammad Satria Nugraha Profile" className="fotoku" />;
}