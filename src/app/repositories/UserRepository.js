const axios = require('axios');

class UserRepository{
    async findAll(){
        const users = await axios('https://api.github.com/users');
           
        return users.data;
    }
    async findByUsername(username){
        const user = await axios(`https://api.github.com/users/${username}`);

        return user.data;
    }

    async findUserRepository(username){
        const repos = await axios(`https://api.github.com/users/${username}/repos`)

        return repos.data;
    }

}


module.exports = new UserRepository();