const { response } = require('express');
const UserRepository = require('../repositories/UserRepository');
const axios = require('axios');

class UserContrller {
    async showUsers(request, response) {
        let page = parseInt(request.query.page);
        let limit = parseInt(request.query.limit);

        const pageIsNan = isNaN(page);
        const limitIsNan = isNaN(limit);


        if(pageIsNan){
            page = 1
        }
        if(limitIsNan){
            limit = 10
        }

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const users = await UserRepository.findAll();

        const results = {};

        if (endIndex < users.lenght) {
            results.next = {
                page: page + 1,
                limit: limit
            }
        }

        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit
            }
        }

        results.sliceUsers = users.slice(startIndex, endIndex);


        response.json(results.sliceUsers);
    }

    async showDetailUser(request, response) {
        const { username } = request.params;
        const user = await UserRepository.findByUsername(username);

        response.json(user);

    }

    async showRepositoriesUser(request, response) {
        const { username } = request.params;
        const repositories = await UserRepository.findUserRepository(username);

        response.json(repositories);
    }
}

module.exports = new UserContrller();