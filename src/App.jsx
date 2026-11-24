
import Section1 from "./components/Section1/Section1"
import Section2 from "./components/Section2/Section2"



const App = () => {

const user=[
  {
    img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
    into:'',
    tag:'Satisfied',
    color:'pink',

  },

  {
    img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
    into:'',
    tag:'Underserved',
    color:'royalblue',
  },

  {
    img:'https://images.unsplash.com/photo-1661983229178-0cbc8090aa71?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    into:'',
    color:'lightgreen',
    tag:'Undercover'
  },

  {
    img:'https://images.unsplash.com/photo-1507206130118-b5907f817163?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    into:'',
    color:'orange',
    tag:'Average'
  },

  {
    img:'https://images.unsplash.com/photo-1744551472640-5b242dc56597?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    into:'',
    color:'lightblue',
    tag:'Unknown'
  },
]

  return (
    <div>
    <Section1 user={user}/>
    <Section2/>
    </div>  
  )
}

export default App
 
