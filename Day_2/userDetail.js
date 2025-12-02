let user = {
    name:"Amit kumar",
    email:"amit@gmail.com",
    mobile:"234532432",
    password:"1234455",
    roles:["Admin","User"],

    getName(){
        return this.name;
    },
    setName(name){
        this.name = name;
    },
    getEmail(){
        return this.email;
    },
    setEmail(email){
      this.email = email;
    },
    getPassword(){
        return this.password;
    },
    setPassword(password){
       this.password = password;
    },
    getMobile(){
        return this.mobile;
    },
    setMobile(mobile){
        this.mobile = mobile;
    },
    getRole(){
        return this.roles;
    },
    setRole(roles){
        this.roles = roles;
    }
}

user.setRole(["Customer","user"])

console.log(user.getRole());

