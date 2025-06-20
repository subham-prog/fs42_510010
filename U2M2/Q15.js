const users = [
    { id: 123, profile: { name: "John Doe", address: { city: "Los Angeles", zipcode: "90001" } } },
    { id: 123, profile: { name: "John Doe"}}
];

users.forEach(user => {
    const { 
        id = "Information not available", 
        profile: { 
            name = "Information not available", 
            address: { 
                city = "Information not available", 
                zipcode = "Information not available" 
            } = {} 
        } = {} 
    } = user;

    console.log(`User ${name} (ID: ${id}) lives in ${city} (ZIP: ${zipcode})`);
});