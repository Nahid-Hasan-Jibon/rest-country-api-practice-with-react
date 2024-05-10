

const Country = ({singleCountry}) => {
    const{name ,flags}=singleCountry
    return (
        <div>
          <h3>Name : {name?.common} </h3> 
          <img src={flags.png} alt="" /> 
        </div>
    );
};

export default Country;