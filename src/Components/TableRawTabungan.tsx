/* eslint-disable @typescript-eslint/no-explicit-any */
export const TableRawTabungan = ({data}: any) => {
  return (
    <>
      {data.map((tab: any, index: number) => {
        return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{tab.tanggal}</td>
          <td>{tab.jumlah}</td>
        </tr>   
        )
      })}
    </>
  );
};

