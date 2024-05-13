import React from 'react';
import Layout from '../layout/Layout';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout title="Tentang Kami">
      <div className="pt-32 py-10 flex flex-col w-full h-full">
        <div className="flex lg:gap-10 flex-col md:flex-row  ">
          <div className="flex">
            <div className="lg:w-[500px] lg:h-[400px] border bg-primary md:block hidden"></div>
            <div className="lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] bg-secondary absolute lg:left-80 z-0 rounded-full p-5">
              <img className="rounded-full object-fill w-full h-full" src="/public/img/logo/pena_logo.png " alt="" />
            </div>
          </div>

          <div className="flex flex-col justify-center lg:pl-60 lg:pr-40 z-10 md:bg-transparent bg-white bg-opacity-60 px-5">
            <h1 className="text-3xl font-bold text-primary">Yayasan Pohon Emas Nusantara</h1>
            <p className="py-5">
              Menjadi jembatan antara masyarakat, perusahaan, dan pemerintah di Kabupaten Bogor dan Jawa Barat. Fokus pada kolaborasi untuk mengatasi masalah sosial, seperti pendidikan terbatas dan pengangguran tinggi. Kami menggalang
              partisipasi dalam aktivitas bermakna dan memfasilitasi kerja sama antar komunitas untuk mencapai perubahan yang signifikan.
            </p>
          </div>
        </div>

        <div className="w-full lg:px-40 px-5 flex flex-col items-center md:pt-20">
          <div className="">
            <h1 className="text-2xl lg:text-3xl font-bold text-primary mb-4 text-center">Tentang Kami</h1>
            <p className="py-2">
              Selamat datang di PENA Foundation, yayasan yang didirikan pada tahun 2019 sebagai respons terhadap tantangan dan permasalahan dalam era industri 4.0. Kami berfokus pada pembinaan dan pengembangan sumber daya manusia (SDM),
              serta menjembatani kesenjangan antara perusahaan, masyarakat, dan pemerintah.
            </p>
            <p className="py-2">
              Kami beroperasi di Kabupaten Bogor, Jawa Barat, sebuah wilayah yang kaya akan keragaman budaya namun juga rentan terhadap masalah sosial. Melihat begitu banyak anak yang mendapatkan pendidikan terbatas dan pengangguran yang
              tinggi, kami percaya bahwa perubahan yang signifikan hanya dapat tercapai melalui partisipasi dalam aktivitas komunitas dan kolaborasi antar sektor.
            </p>
            <p className="py-2">PENA Foundation bekerja sama dengan berbagai pihak termasuk pemerintah dan DPRD Kabupaten Bogor. Kami juga telah membentuk kumpulan masyarakat dari berbagai kegiatan, seperti:</p>
            <ul className="list-disc pl-5">
              <li>#BEP (Bogor Edun Pisan): Komunitas yang didirikan oleh anak muda yang peduli terhadap Kabupaten Bogor, dengan semangat "Biarpun tidak Berlari, tapi jangan berdiam diri".</li>
              <li>Panduan Belajar (Panbel): Wadah untuk belajar di lingkungan rumah guna menciptakan generasi terdidik dan terarah.</li>
              <li>Majelis Dzikir wa Taklim: Tempat untuk mengasah spiritualitas keagamaan bagi para pemuda dengan harapan agar memiliki pegangan dalam pergaulan.</li>
              <li>Media Center berbasis Aplikasi Digital: Tempat untuk transaksi, edukasi, dan informasi program-program PENA Foundation serta berita yang tersedia untuk masyarakat.</li>
            </ul>
            <p className="py-2">Kami bertekad untuk menghubungkan lebih banyak orang dalam aktivitas bermakna dan memfasilitasi kolaborasi antar komunitas untuk Kabupaten Bogor yang lebih baik.</p>
           
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
