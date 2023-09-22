import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import SearchResult from './Components/SearchResult/SearchResult';
export const BASE_URL="http://localhost:9000"
const App = () => {
  const [data, setdata] = useState(null)
 const [loading, setloading] = useState(false)
 const [error, seterror] = useState(null)
 const [filterdata, setfilterdata] = useState(null)
 const [selectbuttton, setselectbuttton] = useState("All")

useEffect(() => {
  const fetchfooddata=async()=>{
    try {
      setloading(true)
      const response=await fetch(BASE_URL)
    const json=await response.json()
    setdata(json) 
    setfilterdata(json )
    setloading(false)
    } catch (error) {
      seterror("Unable to fetch Data")
    }
  }
  fetchfooddata()
  
}, [])

const filterfood=(type)=>{
if (type=="all"){
  setfilterdata(data)
  setselectbuttton("all")
return;
}
const filter=data?.filter((food)=>
food.type.toLowerCase().includes(type.toLowerCase())
)
setfilterdata(filter)
setselectbuttton(type)
}
const searchfood=(e)=>{
  const searchvalue=e.target.value
if (searchvalue==""){
  setfilterdata(null)
}
else{
  const filter=data?.filter((food)=>
  food.name.toLowerCase().includes(searchvalue.toLowerCase())
  )
  setfilterdata(filter)
}

}

const buttondata=[
  {
    name:"All",
    type:"all"
  },
  {
    name:"Breakfast",
    type:"dinner"
  },
  {
    name:"Lunch",
    type:"lunch"
  },
  {
    name:"Dinner",
    type:"dinner"
  },
]

if(error) return <div>{error}</div>
if (loading) return <div>Loading........</div>
  return (
   <>
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="/logo.svg" alt="logo" />
        </div>
        <div className="search">
          <input onChange={searchfood} type="text" placeholder='Search Food'  />
        </div>
      </TopContainer>
      <FilterContainer>

        {
          buttondata.map((value)=>(
            <Button isselected={selectbuttton==value.type} key={value.name} onClick={()=> filterfood(value.type)}> {value.name} </Button>
            ))
        }
       
       
      </FilterContainer>
    
    </Container>
    <SearchResult data={filterdata}/>
   </>
  )
}

export default App;

export const Container=styled.div`
max-width:1200px;
margin:0 auto;
`;
const TopContainer=styled.section`
min-height:100px;
display:flex;
justify-content:space-between;
align-items:center;
padding:16px;

.search {
 input{
  background-color: transparent;
  border: 1px solid red;
  color: white;
  border-radius: 5px;
  height: 40px;
  font-size: 16px;
  padding: 0 10px;
  &::placeholder{
  color:white;
  }
 }
}

@media (0<width<600px){
  flex-direction:column;
  height:80px;
}

`;
const FilterContainer=styled.section`
display:flex;
justify-content:center;
gap:12px ;
margin-bottom:10px;

`;
export const Button=styled.section`
border-radius: 5px;
background: ${({ isSelected }) => (isSelected ? "#f22f2f" : "#ff4343")};
padding: 6px 12px;
border:none;
color:white;
cursor:pointer;
&:hover{
  background-color:#c21919;
}

`;

