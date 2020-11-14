import alunos from './alunos.js'
import {useEffect} from "react"
import './App.css'


function App() {


  useEffect(() => {    
    calculaMedia()// eslint-disable-next-line
  }, [])// eslint-disable-next-line
  
  function calculaMedia(){
    
    for (let aluno of alunos){
      aluno["media"]= (aluno.nota_1+aluno.nota_2+aluno.nota_3+aluno.nota_4)/4}
    console.log(alunos)
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
          
          {alunos.map(aluno =>(
          <tr>
            <td>{aluno.nome}</td>
            <td>{aluno.nota_1}</td>
            <td>{aluno.nota_2}</td>
            <td>{aluno.nota_3}</td>
            <td>{aluno.nota_4}</td>
            <td>{aluno.media}</td>
            <td>{aluno.media >= 60? "aprovado":"reprovado"}</td>
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
