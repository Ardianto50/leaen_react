import React from 'react'
import "../assets/css/HomePage.css"

export const Homepage = () => {
  return (
    <div>
        <h1 className='text-h1'>Nama : Ardianto</h1>
        <h3>Umur : 22 Tahun</h3>
        <h3>Alamat : Jakarta Barat, DKI Jakarta</h3>

        <select>
            <option>
                None
            </option>
            <option>
                1
            </option>
        </select>
    </div>
  )
}
