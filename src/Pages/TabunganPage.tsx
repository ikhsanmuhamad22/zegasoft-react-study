/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { TableRawTabungan } from "../Components/TableRawTabungan";
import { InputTabungan } from "../Components/InputTabungan";

const tabungan: any = []

const getsaldoCount = (): number =>  {
  let result = 0
  tabungan.map((t: any) => result += t.jumlah)
  return result
}

export const TabunganPage = () => {
  const saldoCount = getsaldoCount()
  const [jumlah, setJumlah] = useState('')

  const addTabungan = (event: any): void => {
    event.preventDefault()
    const amount = parseInt(jumlah);

    const isWithdrawal = event.target.name === 'widhrawal';

    if(isWithdrawal && amount > saldoCount) {
      setJumlah('')
      return alert('saldo tidak mencukupi')
    }

    const transactionValue = isWithdrawal ? -amount : amount;

    const newTabungan = {
      jumlah: transactionValue,
      tanggal: new Date().toLocaleDateString()
    }
    tabungan.push(newTabungan)
    setJumlah('')
  }

  const handdleInput = (event: any) => {
    setJumlah(event.target.value)
  }

  return (
    <div className="container">
      <section>
        <h1>Total Saldo Rp{saldoCount}</h1>
      </section>
      <section>
        <h2>Menabung & Menarik tabungan</h2>
        <InputTabungan handdleInput={handdleInput} addTabungan={addTabungan} jumlah={jumlah}/>
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
            {
              tabungan.length === 0 ? 
                (
                  <tr>
                    <td colSpan={3}>Data Masih Kosong</td>
                  </tr>
                ) : 
                <>
                  <TableRawTabungan data={tabungan}/>
                  <tr>
                    <td colSpan={2}>Jumlah Tabungan</td>
                    <td>{saldoCount}</td>
                  </tr>
                </>
            }
          </tbody>
        </table>
      </section>
    </div>
  );
};



