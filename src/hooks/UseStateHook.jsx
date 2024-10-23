export const AnotherTry = () => {
    const [address, setAddress] = useState({
      phoneNumber: "978-435-1780",
      address:{
        houseNumber: "E-142/10",
        street: "Street 50",
        district: "Garden Town",
        city: "Karachi",
      },
    });

    const changeAddressState = () => {
      // Write your code here
      setAddress({...address, address:{
      houseNumber: "R-214",
      street: "Napier Road",
      district: "North Karachi",
      city: "Karachi",
    }})
    //OR
      setAddress(prevState => ({ //this is more correct
          ...prevState,
          address : {
              houseNumber: "R-214",
              street: "Napier Road",
              district: "North Karachi",
              city: "Karachi",
            }
      }))
      // Your code ends here
    }
    return (
      <div>
        <button onClick={ changeAddressState }>Update state</button>
        <div>State: {JSON.stringify(address)}</div>
      </div>
    );
};