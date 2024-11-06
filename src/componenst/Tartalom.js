import './Tartalom.css';
import Konyv  from './Konyv';
import { useState } from 'react';
import Kosar from './Kosar';

const konyvek=[
    {
        szerzo:'Molnár ferenc',
        cim:'Pál utcai',
        ar:'33333'
    },
    {
        szerzo:'Petőfi Sándoe',
        cim:'Pál utcai',
        ar:'33333'
    },
    {
        szerzo:'Nagy Imre',
        cim:'Pál utcai',
        ar:'33333'
    },
    {
        szerzo:'Nagy Imre',
        cim:'Pál utcai',
        ar:'33333'
    }
]


function Tartalom(){
    const [kosaram, setKosaram]=useState([])
    const [konyvDb, setKOnyvDb]= useState(0);
    const [konyvOszAr, setKonyvOsszAr]=useState(0)

    function megjelenit(adat,db){
        kosaram.push(adat);
        setKosaram(kosaram)
        setKonyvOsszAr(konyvOszAr + adat.ar);
        setKOnyvDb(konyvDb+1)
        console.log("A gyerekem üzeni:", adat, db, "db könyv van a kosárban!")
    }
   

    return(
        <>
        <div className='kosar'>
            <h3>A kosár tartalma</h3>
            <p>A kosárban {konyvDb} db könyv van</p>
            <p>A kosárban lévő könyvek összértéke: {konyvOszAr}</p>
            <table className="table table_striped">
                <tbody>
                    {kosaram.map((elem, index)=>{
                        return (
                            <Kosar 
                            kosar={elem}
                            key={index}
                            />
                        )
                    })}
                </tbody>
        
            </table>
        </div>
        <div className="tartalom">
            {
                //kapcso zárojel használata a JS kód miatt
                // map olyan mint a foreach
                konyvek.map((elem, index)=>{
                    return (<Konyv konyvAdat={elem} key={index} megjelenit={megjelenit}/>)
                })
            }
        </div>
        </>
    )
}

export default Tartalom