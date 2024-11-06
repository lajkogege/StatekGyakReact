import './Konyv.css';
 
//Változo használata komponensben
/*const konyvAdat={
    szerzo:'Molnár Ferenc',
    cim:'A Pál utcai fiúk',
    ár:'3000'
}*/
//Tömbe használatta majd map-el bejárás ezt a tartalom componensben irom meg s majd adom át a propson keresztül a könyvnek


function Konyv(props){
    let db=0;
    function kosarbaTesz(e){
        console.log(props);
        db=db+1;
        console.log(db+"könyv van a kosárba");
        props.megjelenit(props.konyvAdat, db)
    }
    return(
        <div className="konyv">
            <h3>{props.konyvAdat.szerzo}</h3>
            <p>{props.konyvAdat.cim}</p>
            <span>{props.konyvAdat.ar}</span>
            <button onClick={()=> kosarbaTesz(db)}>Kosár</button>
        </div>
    )
}

export default Konyv;
