
export default (users, {text})=>{
    return users.filter((user)=>{
        const textMatchFirstName = user.name.first.toLowerCase().includes(text.toLowerCase()) 
        const textMatchLastName = user.name.last.toLowerCase().includes(text.toLowerCase())
        return  textMatchFirstName || textMatchLastName
    });
}

