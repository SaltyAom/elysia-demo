import { Elysia, t } from 'elysia'
import { swagger } from '@elysiajs/swagger'

const app = new Elysia()
    .use(
        swagger({
            swagger: {
                info: {
                    title: 'Elysia',
                    description:
                        'Example of using Elysia Swagger to generate documentation',
                    version: '0.2.9'
                },
                tags: [
                    {
                        name: 'auth',
                        description: 'Group of authentication method'
                    }
                ]
            }
        })
    )
    .setModel({
        sign: t.Object(
            {
                username: t.String(),
                password: t.String()
            },
            {
                description: 'Simple sign payload'
            }
        )
    })
    .get('/', () => 'Hello Elysia')
    .post('/post', ({ body }) => body, {
        schema: {
            body: 'sign',
            response: 'sign',
            detail: {
                summary: 'Using POST request',
                tags: ['auth']
            }
        }
    })
    .listen(8080)

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
