import React from 'react';
import Layout from '../layout/Layout';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Layout title="Home">
      <div className="flex flex-col md:gap-0 gap-3">
        <div className="flex md:flex-row-reverse w-full lg:h-screen  md:gap-5 md:pt-0 pt-[15%] md:h-[700px]  relative h-[400px]">
            <div className="md:w-full w-full md:relative">
              <img className="md:absolute w-full absolute z-0 md:block" src="/public/img/konten/Bg-Video.png" alt="" />
            </div>
         
          <div className="lg:w-[50%]  absolute md:relative w-full z-10 flex flex-col justify-center md:pl-10 lg:pl-44 bg-white bg-opacity-40">
            <div className='w-full pl-5'>
              <h1 className="lg:text-5xl text-3xl font-bold text-primary">
                Yayasan <br /> <span>Pohon Emas Nusantara</span>
              </h1>
              <p className="md:py-6 py-2  ">
                Menjadi jembatan antara masyarakat, perusahaan, dan pemerintah di Kabupaten Bogor dan Jawa Barat. Fokus pada kolaborasi untuk mengatasi masalah sosial, seperti pendidikan terbatas dan pengangguran tinggi. Kami menggalang
                partisipasi dalam aktivitas bermakna dan memfasilitasi kerja sama antar komunitas untuk mencapai perubahan yang signifikan.
              </p>
              <Link to="/about" className="btn btn-primary">
                Lihat Selengkapnya
                {/* icon send */}
                <i className="fas fa-chevron-circle-right"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col gap-3 w-full lg:px-40 md:px-10 px-5 bg-primary py-5 justify-center items-center lg:h-screen h-full">
          <img className="md:w-[40%] w-full" src="/public/img/konten/program.png" alt="" />
          <div className="lg:w-[60%] w-full">
            <h1 className="text-white text-3xl font-bold md:block hidden">Program Kami</h1>
            <p className="text-white md:py-6 py-2 text-center md:text-left">Kami memiliki program-program yang bertujuan untuk meningkatkan kualitas hidup masyarakat di Kabupaten Bogor dan Jawa Barat</p>
            {/* div grid col-6 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white p-5 rounded-lg">
                <h3 className="text-primary font-bold">
                  {' '}
                  <i className="fas fa-graduation-cap"></i> Pendidikan & Pelatihan Pekerja Germen
                </h3>
                <p>Bekerjasama dengan Dinas Perindustrian, Dinas Ketenakerjaan , Komunitas Masyarakat, dan Perusahaan sekitar yang bergerak dibidang industri</p>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <h3 className="text-primary font-bold">
                  <i className="fas fa-tractor"></i> Pemberian Bibit Tani & Pendampingan
                </h3>
                <p>Bekerjasama dengan masyarakat tani , memberikan penyuluhan dan penyemaian sampai dengan panen agar mendapatkan profit yang diinginkan</p>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <h3 className="text-primary font-bold">
                  {' '}
                  <i className="fas fa-industry"></i> Penyaluran Tenaga Kerja Industri
                </h3>
                <p>Bekerjasama dengan Perusahaan Industri dalam rangka meningkatkan produktifitas Perusahaan dan meningkatkan SDM Masyarakat agar siap kerja</p>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <h3 className="text-primary font-bold">
                  <i className="fas fa-business-time"></i> Usaha Mikro Kecil & Menengah (UMKM)
                </h3>
                <p>Memberikan pelatihan -pelatihan , pendampingan , Packaging dan Etalase untuk dipasarkan di khalayak luas , utamanya di kalangan sendiri</p>
              </div>
            </div>
            <Link to="/about" className="btn btn-white mt-5">
              Lihat Selengkapnya
              {/* icon send */}
              <i className="fas fa-chevron-circle-right"></i>
            </Link>
          </div>
        </div>

        {/* Partnership */}
        <div className="flex flex-col gap-3 w-full lg:px-40 md:px-20 px-5 lg:h-screen py-10 items-center justify-center ">
          <div className="w-full text-center flex flex-col justify-center items-center">
            <h1 className="text-primary text-3xl font-bold">Kemitraan Kami</h1>
            <p className="py-6">Kami memiliki kemitraan dengan berbagai instansi dan perusahaan yang mendukung program-program kami</p>
            {/* div grid col-6 */}
            <div className="grid lg:grid-cols-6 grid-cols-3 gap-3  lg:gap-1 md:gap-5 md:px-20 items-center justify-center">
              <img className="lg:w-full" src="/public/img/partnership/pt1.png" alt="" />
              <img className="lg:w-[80%]" src="/public/img/partnership/pt2.png" alt="" />
              <img className="lg:w-[80%] " src="/public/img/partnership/pt3.svg" alt="" />
              <img className="lg:w-[80%] " src="/public/img/partnership/pt4.svg" alt="" />
              <img className="lg:w-[80%] " src="/public/img/partnership/pt5.webp" alt="" />
              <img className="lg:w-[80%] " src="/public/img/partnership/pt6.png" alt="" />
              <img className="lg:w-[80%] " src="/public/img/partnership/Bef.png" alt="" />
              <img className="lg:w-[100%] " src="/public/img/partnership/pt8.png" alt="" />
              <img className="lg:w-[100%] " src="/public/img/partnership/pt9.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="flex md:px-40 px-5 py-5 mt-10 gap-5 lg:flex-row flex-col lg:h-screen items-center bg-primary bg-opacity-15">
          <div className="lg:w-[70%] w-full  flex lg:flex-row flex-col lg:text-left text-center gap-5 items-center">
            <img className="w-[50%] object-contain" src="/public/img/konten/addres.png" alt="" />
            <div>
              <h1 className="text-primary text-3xl font-bold">Head Quarter </h1>
              <p className="py-2">Jl. Tegar Beriman Perum. Graha Kartika Pratama Blok D2 No.23 Kel. Bojong Baru Kec. Bojong Gede Kabupaten Bogor</p>
              <p className="py-2">
                <i className="fas fa-phone-alt"></i> 0857-7656-2038
              </p>
            </div>
          </div>
          <div className="lg:w-[30%] lg:h-[50%] md:w-[500px] md:h-[300px]  h-full  border-2 rounded-md">
            <iframe
              className="w-full h-full"
              src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=Jl.%20Tegar%20Beriman%20Perum.%20Graha%20Kartika%20Pratama%20Blok%20D2%20No.23%20Kel.%20Bojong%20Baru%20Kec.%20Bojong%20Gede%20Kabupaten%20Bogor+(Pena%20Foundation)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
