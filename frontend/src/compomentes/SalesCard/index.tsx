import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotifictionButtons from '../NotifictionButtons';
import './style.css'

function SalesCard() {
      //codigo para manter o estado das datas até a linha 33
      const min = new Date (new Date().setDate(new Date() .getDate() - 365));
      const max = new Date();

      const [minDate, setMinDate]= useState(new Date(min));
      const [maxDate, setMaxdate]= useState(new Date(max));
    return(

        <>
                <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
              <div className="dsmeta-form-control-container">
              <DatePicker
                  selected={new Date()}
                  onChange={(date: Date) => setMinDate(date)}
                  className="dsmeta-form-control"
                  dateFormat="dd/MM/yyyy"
              />
              </div>
              <div className="dsmeta-form-control-container">
              <DatePicker
                  selected={new Date()}
                  onChange={(date: Date) => setMaxdate(date)}
                  className="dsmeta-form-control"
                  dateFormat="dd/MM/yyyy"
              />
              </div>
            </div>
            
            // da linha 38 a linha 93 foi feito as tabelas 
            <div>
              <table className="dsmeta-sales-table">
                <thead>
                  <tr>
                    <th className="show992">ID</th>
                    <th className="show576">Data</th>
                    <th>Vendedor</th>
                    <th className="show992">Visitas</th>
                    <th className="show992">Vendas</th>
                    <th>Total</th>
                    <th>Notificar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="show992">#341</td>
                    <td className="show576">08/07/2022</td>
                    <td>Anakin</td>
                    <td className="show992">15</td>
                    <td className="show992">11</td>
                    <td>R$ 55300.00</td>
                    <td>
                      <div className="dsmeta-red-btn-container">
                        <div className="dsmeta-red-btn">
                          <NotifictionButtons/>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="show992">#341</td>
                    <td className="show576">08/07/2022</td>
                    <td>Anakin</td>
                    <td className="show992">15</td>
                    <td className="show992">11</td>
                    <td>R$ 55300.00</td>
                    <td>
                      <div className="dsmeta-red-btn-container">
                        <div className="dsmeta-red-btn">
                        <NotifictionButtons/>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="show992">#341</td>
                    <td className="show576">08/07/2022</td>
                    <td>Anakin</td>
                    <td className="show992">15</td>
                    <td className="show992">11</td>
                    <td>R$ 55300.00</td>
                    <td>
                      <div className="dsmeta-red-btn-container">
                        <div className="dsmeta-red-btn">
                        <NotifictionButtons/>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>

              </table>
            </div>

          </div>

        </>

    )
    
}
export default SalesCard;