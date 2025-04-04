// import Card from '../components/card'

// const HomePage = () =>{
//   return <div><Card />
//   </div>
// }

const values = ['text1', 'text2', 'text3', 'text4'
]

const HomePage = () =>{

  return <div>{
    values.map((value, index) => {
      return <Box key={index} text={value} />
    })
  }
  </div>
}

export default HomePage;

const Box = (props) => {
  return <div>{props.text}
  <div>{props.name}</div>
  <div>{props.number}</div>
  </div>
}
