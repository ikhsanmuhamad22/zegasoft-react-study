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

    const transactionValue = isWithdrawal ? -amount : amount;

    const newTabungan = {
      jumlah: transactionValue,
      date: new Date().toLocaleTimeString()
    }
    tabungan.push(newTabungan)
    console.log(tabungan);
    setJumlah('')
  }

  const handdleInput = (event: any) => {
    setJumlah(event.target.value)
  }

  return (
    <div>
      <InputTabungan handdleInput={handdleInput} addTabungan={addTabungan} jumlah={jumlah}/>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Tanggal</th>
            <th>Jumlah</th>
          </tr>
        </thead>
        <tbody>
          <TableRawTabungan data={tabungan}/>
          <tr>
            <td colSpan={2}>Jumlah Tabungan</td>
            <td>{saldoCount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};



