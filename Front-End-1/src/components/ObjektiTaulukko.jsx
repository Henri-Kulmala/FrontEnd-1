/* eslint-disable react/prop-types */
const ObjektiTaulukko = ({data}) => {

    return (
        <div className="">
            <h1>Lista Objektitaulukosta</h1>
            <ul>
                {data.map((item, index) =>(
                <li key={index}>
                    <strong>Nimi:</strong> {item.nimi} <br />
                     <strong>Alkupäivä:</strong> {item.alkupaiva} <br />
                     <strong>Loppupäivä: </strong>  {item.loppupaiva}
                    
                </li>
                ))}
            </ul>
        </div>

        
    )
};

export default ObjektiTaulukko;