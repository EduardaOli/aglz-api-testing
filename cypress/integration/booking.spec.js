/// <reference types="cypress" />


import req from '../support/api/requests'
import schemas from '../support/api/schemas'
import assertions from '../support/api/assertions'

context('Booking', () => {

    before(() => {
        req.doAuth()
    });
    it('Validar o contrato do GET booking @contract', () => {
        req.getBooking().then(getBookingResponse => {
            cy.log(getBookingResponse.status)
            assertions
                .validadeContractOf(
                    getBookingResponse,
                    schemas
                        .getBookingSchema())
        })

    });

    it('Criar uma reversa com sucesso @functional', () => {
        req.postBooking().then(postBookingResponse => {
            assertions.shouldHaveStatus(postBookingResponse, 200)
            assertions.shouldbookingIdBePresent(postBookingResponse)
            assertions.shouldHaveDefaultHeaders(postBookingResponse)
            assertions.shouldHaveContentTypeAppJson(postBookingResponse)
            assertions.shouldDurationBeFast(postBookingResponse)

        })

    });

    it('Tentar alterar uma reversa sem token @functional', () => {
        req.postBooking().then(postBookingResponse => {
            req.updateBookingWithoutToken(postBookingResponse).then(putBookingResponse => {
                assertions.shouldHaveStatus(putBookingResponse, 403)
            })
        })
    });

    it('Alterar uma reversa com sucesso @functional', () => {
        req.postBooking().then(postBookingResponse => {
            req.updateBooking(postBookingResponse).then(putBookingResponse => {
                assertions.shouldHaveStatus(putBookingResponse, 200)
            })
        })
    });

    it('Excluir uma reserva com sucesso @functional', () => {
        req.postBooking().then(postBookingResponse =>{
            req.deletebooking(postBookingResponse).then(deleteBookingResponse =>{
                assertions.shouldHaveStatus(deleteBookingResponse, 201)
            })
        })
        
    });

    //DESAFIO
    it('Tentar alterar uma reserva inexistente @functional', () => {
        req.postBooking().then(postBookingResponse => {
            req.updateNonExistentBooking(postBookingResponse).then(putBookingResponse => {
                assertions.shouldHaveStatus(putBookingResponse, 405)
                assertions.shouldMessageInvalidMethod(putBookingResponse)
            })
        })
    })

    it('Tentar alterar uma reserva com token inválido @functional', () => {
        req.postBooking().then(postBookingResponse => {
            req.updateBookingWithInvalidToken(postBookingResponse).then(putBookingResponse => {
                assertions.shouldHaveStatus(putBookingResponse, 403)
                assertions.shouldHaveDefaultHeaders(putBookingResponse)
            })
        })
    })

    it('Tentar excluir uma reserva inexistente @functional', () => {
        req.postBooking().then(postBookingResponse => {
            req.deleteNonExistentBooking(postBookingResponse).then(deleteBookingResponse => {
                assertions.shouldHaveStatus(deleteBookingResponse, 405)
                assertions.shouldMessageInvalidMethod(deleteBookingResponse)
            })
        })
    })

    it('Tentar excluir uma reserva sem token @functional', () => {
        req.postBooking().then(postBookingResponse => {
            req.deleteBookingWithoutToken(postBookingResponse).then(deleteBookingResponse => {
                assertions.shouldHaveStatus(deleteBookingResponse, 403)
                assertions.shouldHaveDefaultHeaders(deleteBookingResponse)
            })
        })
    });  
    
    it('Tentar excluir uma reserva com token inválido @functional', () => {
        req.postBooking().then(postBookingResponse => {
            req.deleBookingInvalidToken(postBookingResponse).then(deleteBookingResponse => {
                assertions.shouldHaveStatus(deleteBookingResponse, 403)
                assertions.shouldHaveDefaultHeaders(deleteBookingResponse)
            })
        })

    });

});
