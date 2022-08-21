import { Common } from './Common'

export const handler = async (event: any) => {
    try {
        console.log(event)

        const payload: Common.Map = {
            "hello": "world",
            "intValue": 1,
            "eventData": event
        }

        return {
            statusCode: 200,
            body: JSON.stringify(payload)
        }

    } catch (error) {
        console.log(error)
        const serverError: Common.Map = {
            "Status": "Error",
            "Error": error
        }
        return {
            statusCode: 500,
            body: JSON.stringify(serverError)
        }
    } finally {
        // add code here for anything you need to run last
        // such as closing db connection
    }










}