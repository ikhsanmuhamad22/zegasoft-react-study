/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { TableRawTabungan } from '../Components/TableRawTabungan';
const InputTabungan = React.lazy(() => import('../Components/InputTabungan'));

export const TabunganPage = () => {
  const [jumlah, setJumlah] = useState('');
  const [tabungan, setTabungan] = useState<string[]>([]);

  // fun mengambil data jumlah saldo
  const getsaldoCount = (): number => {
    let result = 0;
    tabungan.map((t: any) => (result += t.jumlah));
    return result;
  };
  const saldoCount = getsaldoCount();

  // fun megambil data dari local storage
  useEffect(() => {
    const dataTabungan = localStorage.getItem('tabungan');
    if (dataTabungan) {
      setTabungan(JSON.parse(dataTabungan));
    }
  }, []);

  // fun add Tabungan
  const addTabungan = (event: any): void => {
    event.preventDefault();
    const amount = parseInt(jumlah);
    const iswidhrawal = event.target.name === 'widhrawal';

    if (!amount) {
      return alert('mohon masukan jumlah yang diinginkan');
    }

    if (iswidhrawal && amount > saldoCount) {
      setJumlah('');
      return alert('saldo tidak mencukupi');
    }

    if (amount < 1000) {
      setJumlah('');
      return alert('minimal transaksi Rp1000');
    }

    // fun yang menentukan apakah menabung atau menarik uang
    const transactionValue = iswidhrawal ? -amount : amount;

    interface newTabunganType {
      jumlah: number;
      tanggal: string;
    }

    const newTabungan: newTabunganType = {
      jumlah: transactionValue,
      tanggal: new Date().toLocaleDateString(),
    };

    const existingTabungan: newTabunganType[] = JSON.parse(
      localStorage.getItem('tabungan') ?? '[]'
    );
    const updatedTabungan: any = [...existingTabungan, newTabungan];
    localStorage.setItem('tabungan', JSON.stringify(updatedTabungan));

    setTabungan(updatedTabungan);
    setJumlah('');
  };

  // fun handle input
  const handdleInput = (event: any) => {
    setJumlah(event.target.value);
  };

  // fun clear data
  const clearData = () => {
    localStorage.removeItem('tabungan');
    setTabungan([]);
  };
  return (
    <div className="container">
      <section>
        <h1>Total Saldo Tabungan Rp{saldoCount}</h1>
      </section>
      <section>
        <h2>Menabung & tarik uang</h2>
        <InputTabungan
          handdleInput={handdleInput}
          addTabungan={addTabungan}
          jumlah={jumlah}
        />
      </section>
      <section>
        <h2>Riwayat Tabungan</h2>
        <table>
          <thead>
            <tr>
              <th>Tx</th>
              <th>Tanggal</th>
              <th>Jumlah</th>
            </tr>
          </thead>
          <tbody>
            {tabungan.length === 0 ? (
              <tr>
                <td colSpan={3}>Data Masih Kosong</td>
              </tr>
            ) : (
              <>
                <TableRawTabungan data={tabungan} />
                <tr>
                  <td colSpan={2}>Jumlah Tabungan</td>
                  <td>{saldoCount}</td>
                </tr>
              </>
            )}
          </tbody>
        </table>{' '}
        <br />
        <button onClick={clearData}>Hapus Riwayat & Tabungan</button>
      </section>
    </div>
  );
};
