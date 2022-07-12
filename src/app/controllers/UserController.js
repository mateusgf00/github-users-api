const { response } = require('express');
const UserRepository = require('../repositories/UserRepository');
const axios = require('axios');

class UserContrller{
   async showUsers(request, response){
        const users = await UserRepository.findAll();
        
        response.json(users);
    }

    async showDetailUser(request, response){
        const {username} = request.params;
        const user = await UserRepository.findByUsername(username);

        response.json(user);

    }

    async showRepositoriesUser(request, response){
        const {username} = request.params;
        const repositories = await UserRepository.findUserRepository(username);

        response.json(repositories);
    }
}

module.exports = new UserContrller();