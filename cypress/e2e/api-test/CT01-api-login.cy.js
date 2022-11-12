const { expect } = require("chai")

describe('Search photos and data', () => {
    it('Search Flavio photos', () => {
        cy.request({
            method: "GET",
            url: "https://apialurapic.herokuapp.com/flavio/photos"
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body[0]).to.have.property('description')
            expect(res.body[0].description).to.be.equal('Farol iluminado')
        }
        )
    })

    it('Valid Login', () => {
        cy.request({
            method: 'POST',
            url: Cypress.env('login-api-url'),
            body: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('id')
            expect(res.body.id).to.be.equal(1)
            expect(res.body).to.have.property('name')
            expect(res.body.name).to.be.equal('flavio')
            expect(res.body).to.have.property('email')
            expect(res.body.email).to.be.equal('flavio@alurapic.com.br')
        })
    })

    it.only('Invalid Login', () => {
        cy.request({
            method: 'POST',
            url: Cypress.env('login-api-url'),
            failOnStatusCode: false,
            body: {username: Cypress.env('wrongUserName'),
            password: Cypress.env('wrongPassword')}
        }).then((res) => {
            expect(res.status).to.be.equal(401)
            expect(res.body).is.not.empty
            //expect(res.body).to.have.property('id')
            //expect(res.body.id).to.be.equal(1)
            //expect(res.body).to.have.property('name')
            //expect(res.body.name).to.be.equal('flavio')
            //expect(res.body).to.have.property('email')
            //expect(res.body.email).to.be.equal('flavio@alurapic.com.br')
            expect(res.body).to.have.property('message')
            expect(res.body.message).to.be.equal('Authentication failed for user undefined')
        })
    })
})