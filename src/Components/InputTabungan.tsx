/* eslint-disable @typescript-eslint/no-explicit-any */
export const InputTabungan = ({handdleInput, addTabungan, jumlah}: any) => {
  return (
    <div className="form-input">
      <input type="number" min={1000} placeholder="10000.." onChange={handdleInput} value={jumlah}/>
      <div>
        <button type="button" onClick={addTabungan} name='deposit'>Menabung</button>
        <button type="button" onClick={addTabungan} name="widhrawal">Tarik uang</button>
      </div>
    </div>
  )
}