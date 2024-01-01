import { useEffect } from "react";
import React, { useState } from "react";
import Navbar from "./Navbar";
// import Select from "react-select";

const styles={
  para:{
    margin:"15px"
  }
}

//  https://jsonplaceholder.typicode.com/photos - useeffect without dependency
export default function Funnight() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const [users, setUsers] = useState();

  //   useEffect(() => {
  //     console.log("no dependency");
  //   }, []);

  //   useEffect(() => {
  //    console.log(count, "change");
  //   }, [count]);

  //   useEffect(() => {
  //   console.log( "number change");
  //   }, [number]);

  //   useEffect(() => {
  //   console.log( "count or number change");
  //   }, [number,count]);

  console.log(users,"funnnnighgt");
  const handleCounter = () => {
    // const count = this.state.count;
    //  this.setState({ count: count + 1 });
    setCount(count + 1);

    //  if(count<5){
    //    popup("you reached max capacity")
  };

  const handleNCounter = () => {
    // const count = this.state.count;
    //  this.setState({ count: count + 1 });
    setNumber(number + 1);

    //  if(count<5){
    //    popup("you reached max capacity")
  };

  //   const fetchImage = async () => {
  //     const res = await fetch(imageUrl);
  //     const imageBlob = await res.blob();
  //     const imageObjectURL = URL.createObjectURL(imageBlob);
  //     setImg(imageObjectURL);
  //   };

  useEffect(() => {
    fetchImage();
  }, []);
  const imageList = ["https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg","https://assets-global.website-files.com/61a3c3005e14bffd1c77eea9/63acf4cff44df789631e2215_pexels-ahmed-satti-3223552.jpg","https://miro.medium.com/v2/resize:fit:1400/1*YGvjSVB1cmpoj0JI0ZPq3g.jpeg","https://media.istockphoto.com/id/483294349/photo/cheerful-indian-children-playing-in-maharashtra.jpg?s=612x612&w=0&k=20&c=8IFXQxAKxK-3GXLpjwn9F02jmFEqSOnG2EAM3FWyemQ=","https://cdnb.artstation.com/p/assets/covers/images/010/055/157/large/arup-das-chinki.jpg?1522317287","https://media.istockphoto.com/id/507840116/fr/photo/indienne-heureuse-petite-fille-dans-le-d%C3%A9sert-village-india.jpg?s=612x612&w=0&k=20&c=v81sj0KhALZEHQlM7LXlCAITKGAlwpt3hDlcM4IRWvo=","https://img.freepik.com/premium-photo/indian-children-beach-goa_78361-14104.jpg","https://img.freepik.com/premium-photo/happy-brother-sister-generative-ai_849906-20158.jpg","https://img.freepik.com/premium-photo/generative-ai-illustration-very-happy-kids-hanging-out-with-friends-together_479694-14722.jpg","https://i.guim.co.uk/img/media/3756f895162feb4d2b5e928315553a236f9d88ea/0_0_5315_3191/master/5315.jpg?width=445&dpr=1&s=none"]
  
  const fetchImage = () => {
    fetch("https://jsonplaceholder.typicode.com/users").then(
      async (response) => {
        const data = await response.json();
        setUsers(data);
      }
    );
    //    .then(data =>{
    //         setUsers(data)})
  };

  console.log(users);

    // const myOptions = data.map(info => ({
    //     value: info.users,
    //     label: info.users
    // }));
 

  return (
    <div className="container">
           <tr>
        <td>
            {/* <Select isMulti options={myOptions}></Select> */}
        </td>
     </tr>
     
      Use Effect Demo
      <button className="btn btn-primary mx-1" onClick={handleCounter}>
        Counter Increase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleNCounter}>
        numbrr Increase
      </button>
      <br/>
      {users &&
        users.map((user,i) => (
          <div style={{width:'20%', margin: '25px', height: '300px', border: 'solid black 2px', padding: '10 px', display:'flex',flexDirection:'column',display: 'inline-block'}}>        
            <img
              src= {imageList[i]}
              width="200px"
              height="120px"
            ></img>
            <p>{i}</p>
           <p style={styles.para}>Name : {user.name}</p> 
           <p style={styles.para}>Username : {user.username}</p> 
           <p style={styles.para}>Address : {user.address.suite},{user.address.street}, {user.address.city}</p> 

          </div>
        ))}
    </div>
  );
}