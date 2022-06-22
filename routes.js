// This file was automatically added by layer0 deploy.
// You should commit this file to source control.
const { Router } = require('@layer0/core/router')
const { nextRoutes } = require('@layer0/next')

const { BACKENDS } = require('@layer0/core/constants');

module.exports = new Router()

    .get("/test", ({serveStatic}) => {
        serveStatic('public/test.html')
    })

    .get("/compute", ({compute}) => {

        compute((request, res)=> {
            res.body = 'THIS IS FROM COMPUTE'

            // To set the response status:
            res.statusCode = 200
            res.statusMessage = 'OK'
        })
    })

    .get("/mixed", ({compute}) => {

        compute((request, res)=> {
            serveStatic('public/test.html')
        })
    })

    .get("/works", ({compute, serveStatic}) => {
        compute((request, res)=> {
            serveStatic('public/test.html')
        })
    })



  .use(nextRoutes) // automatically adds routes for all files under /pages
