export default function RiwayatPekerjaan(){
    return(
        <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="font-bold text-2x1">Riwayat Pekerjaan</h2>
        <RowRiwayatPekerjaan bekerja="Editing Vidio" instansi="Content Creator Capcut" tahun="2022"/>
        <RowRiwayatPekerjaan bekerja="Analisis data"instansi="Apotek Al-Ma'soem Majalaya " tahun="2024"/>
        <RowRiwayatPekerjaan bekerja="Marketing"instansi="PT Shanum Meubel" tahun="2020"/>
        <RowRiwayatPekerjaan bekerja="Data Analisyt"instansi="Dropsuite" tahun="2022-Sekarang"/>
      </div>
      
    
  );
  
}

  interface RowRiwayatPk{
    bekerja: string;
    instansi: string;
    tahun: string;
  }
  function RowRiwayatPekerjaan(props: RowRiwayatPk){
    return(
      <div className="border-2 border-green-900 rounded-lg bg-green-300 p-2 my-5">
      <div className="container mx-auto">
        <div className="grid grid-cois-12 gap-1">
          <div className="col-span-12 md:col-span-4">{props.bekerja}</div>
          <div className="col-span-12 md:col-span-4">{props.instansi}</div>
          <div className="col-span-12 md:col-span-4">{props.tahun}</div>
        </div>
      </div>
    </div>
    );
  }