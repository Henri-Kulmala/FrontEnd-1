
function Ajopaivakirja({ ajot }) {

    let km = Number(ajot.loppu.lukema) - Number(ajot.alku.lukema);
    const mina = "Henri Kulmala";
    return (
        <div>
            Laatija: {ajot.laatija} <br /> 
            Rekisterinumero: {ajot.rekisterinro} <br />
            Matka: {km} Km <br />
            Tekijä: <span style={{ color: "green" }}>{mina}</span>
        </div>
    );
}


export default Ajopaivakirja;