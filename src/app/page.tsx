import Image from "next/image";

const inicialItens = [
  {id: 1, tarefa: 'Estudar', feito: false},
  {id: 2, tarefa: 'Estudar', feito: false},
]
export default function Home() {
  return (
    <div className="areaInicial">
      <h1 className="titulo">Lista de tarefas</h1>

      <div className="areaAcao">
        <input 
          className="inputTarefa" 
          type="text" 
          value={'Tarefa 1'}
        />
        <button className="btnAdd">Add</button>
      </div>

      <div className="areaTarefa w-full">
        <ul className="listaUl">
          {inicialItens.map((item)=> (
            <label className="flex gap-2">
              <Checkbox/>
              <li key={item.id}>
                {item.tarefa}
                <AcaoItens/>
              </li>
            </label>
          ))}
        </ul>
      </div>

    </div>
    
  );
}

export const AcaoItens = ()=>{
  return (
    <div className="acaoItens">
      <i className="bi bi-pencil-fill acao"></i>
      <i className="bi bi-trash3-fill acao"></i>
    </div>
  )
}

export const Checkbox = ()=>{
  return(
    <input 
      type="checkbox"
    />
  )
}
