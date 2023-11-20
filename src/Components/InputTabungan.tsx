/* eslint-disable @typescript-eslint/no-explicit-any */
export const InputTabungan = ({handdleInput, addTabungan, jumlah}: any) => {
  return (
    <form>
      <input type="number" onChange={handdleInput} value={jumlah}/>
      <button type="button" onClick={addTabungan} name='deposit'>Deposit</button>
      <button type="button" onClick={addTabungan} name="widhrawal">Widthraw</button>
    </form>
  )
}