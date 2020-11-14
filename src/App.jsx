import alunos from './alunos.js'
import {useState, useEffect} from "react"
import './App.css'


function App() {
  const [alumnis, setalumnis] = useState([])


  useEffect(() => {    
    calculaMedia()// eslint-disable-next-line
  }, [alunos])// eslint-disable-next-line
  
  function calculaMedia(){
    
    for (let aluno of alunos){
      aluno["media"]= (aluno.nota_1+aluno.nota_2+aluno.nota_3+aluno.nota_4)/4}
    console.log(alunos)
    setalumnis(alunos)
  }

  

  return (
    

    <div className="App">
      <div className="Container">
      <table >
        <thead>
          <tr>
            <th>nome</th>
            <th>nota_1</th>
            <th>nota_2</th>
            <th>nota_3</th>
            <th>nota_4</th>
            <th>media</th>
            <th>situação</th>
          </tr>
        </thead>
        <tbody>
          
          {alumnis.map(alumni =>(
          <tr>
            <td>{alumni.nome}</td>
            <td>{alumni.nota_1}</td>
            <td>{alumni.nota_2}</td>
            <td>{alumni.nota_3}</td>
            <td>{alumni.nota_4}</td>
            <td>{alumni.media}</td>
            <td>{alumni.media >= 60? "aprovado":"reprovado"}</td>
          </tr>
          )
          )}      

        </tbody>
      </table>

          

        
      </div>
    </div>
  );
}

export default App;
