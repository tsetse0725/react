// import Card from '../components/card'

// const HomePage = () =>{
//   return <div><Card />
//   </div>
// }

// const values = ['text1', 'text2', 'text3', 'text4'
// ]

// const HomePage = () =>{

//   return <div>{
//     values.map((value, index) => {
//       return <Box key={index} text={value} />
//     })
//   }
//   </div>
// }

// export default HomePage;

// const Box = (props) => {
//   return <div>{props.text}
//   <div>{props.name}</div>
//   <div>{props.number}</div>
//   </div>
// }

// import Button from "@/components/Button"
// import Card from "@/components/Card"
// import Input from "@/components/Input"

// const HomePage = () => {
//   return <div style={{ width: 200 }}>
//     <Input placeHolder={'Email or phone Number'}/>
//     <Input placeHolder={'password'} />
//     <Button text="Log In" bgColor="#0866ff" width="100%" />
//     <Button text="Create New Account" bgColor="green" />
//     <Button text="Forgot Password?" bgColor="#0866ff"  />
 
//     <Card />
//   </div>
// }

// export default HomePage


// import {A} from "@/components/A";
// const Home = () => {
//   const gene = "inherited gene From Ancestors";
//   const color = 'green'
//   const sizing = "30px"
//   const weight= "bold"
//   return (
//     <div>
//       <A gene={gene} color={color} sizing={sizing} weight={weight} />

//     </div>
//   );
// };

// export default Home

import {A} from "@/components/A";
import {B} from "@/components/B";

const Home = () => {
  const which = "A";

  if(which === "B"){
    return <A/>;
  }

  return(
    <div style={{ fontSize: "50px"}}>
      {which === "A" ? <A/> : <B/>}
      {which === "A" && <A/>}
    </div>
  );
};

export default Home;